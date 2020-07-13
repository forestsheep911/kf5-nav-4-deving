import css from '../../css/custom_header.css';
import React from 'react';
import {AppBar, Toolbar, IconButton, Link, Drawer, Hidden, useScrollTriggger} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import NestedList from './nested_list';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import {getSectionIdByArticle, getCacheArticles, getArticlesBySection} from '../util/util';

const drawerWidth = 240;

const catalogObject = {
    '27412' : {id: '27412', title: '开始', sections: {
            '106246': {id: '106246', title: 'Getting Started', open: false, loading: false, articles: []},
            '1125834': {id: '1125834', title: 'kintone开发者账号', open: false, loading: false, articles: []}
            }   
    },
    '1018929': {id: '1018929', title: '行业案例', sections: {
            '1074068': {id: '1074068', title: '共通', open: false, loading: false, articles: []}
            }
    },
    '27413': {id: '27413', title: '教程', sections: {
            '106247': {id: '106247', title: 'kintone自定义概要', open: false, loading: false, articles: []},
            '106248': {id: '106248', title: 'kintone API入门系列', open: false, loading: false, articles: []},
            '1001894': {id: '1001894', title: 'kintone 自定义的技巧', open: false, loading: false, articles: []}
            }
    },
    '27414': {id: '27414', title: 'API文档和SDK', sections: {
            '106249': {id: '106249', title: 'kintone API指南', open: false, loading: false, articles: []},
            '106250': {id: '106250', title: 'kintone REST API', open: false, loading: false, articles: []},
            '106251': {id: '106251', title: 'kintone JavaScript API', open: false, loading: false, articles: []},
            '1125808': {id: '1125808', title: 'cybozu User API', open: false, loading: false, articles: []},
            '1000279': {id: '1000279', title: 'SDK/Tools', open: false, loading: false, articles: []},
            '1000278': {id: '1000278', title: 'kintone 插件开发', open: false, loading: false, articles: []},
            '1073865': {id: '1073865', title: 'cybozu.cn 共通', open: false, loading: false, articles:[]}
            }
    },
    '27415': {id: '27415', title: '开发范例', sections: {
            '106252': {id: '106252', title: '自定义开发', open: false, loading: false, articles: []},
            '1019421': {id: '1019421', title: '第三方API整合', open: false, loading: false, articles:[]}
            }
    },
    '27416': {id: '27416', title: '插件', sections: {
            '1073272': {id: '1073272', title: '插件', open: false, loading: false, articles:[]}
            }
    },
    '27417': {id: '27417', title: '工具', sections: {
            '106254': {id: '106254', title: '开发工具', open: false, loading: false, articles: []},
            '106255': {id: '106255', title: '资源库', open: false, loading: false, articles:[]}
            }
    },
    '28043': {id: '28043', title: '通知', sections: {
            '108673': {id: '108673', title: '咨询动态', open: false, loading: false, articles: []},
            '108672': {id: '108672', title: 'API更新信息', open: false, loading: false, articles: []}
            }
    }
}

function ElevationScroll (props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolBar: {
        minHeight: '56px',
    },
    drawer: {
        flexShrink: 0,
    },
    drawer_none: {
        display: 'none',
    },
    topBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuIcon: {
        fontSize: '2.4rem'
    },
    aLink: {
       color: '#000000',
       fontSize: '1.6rem',
    },
    searchIcon: {
        fontSize: '2.4rem'
    },
    drawerPaper: {
        width:drawerWidth,
        overflowY: 'auto !important',
        marginTop: '55px',
        '&::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '4px',
          backgroundColor: 'transparent',
        },
        '&:hover::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&:hover::-webkit-scrollbar-thumb': {
          backgroundColor: '#c1c1c1',
        }
    },
    drawerPaperMin: {   
      width: drawerWidth,
    },
    titleMenu: {
        display: 'inline-block',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginLeft: '15px',
        marginRight: '15px',
        borderBottom: '4px solid transparent',
        transition: 'border .3s',
        '&:hover': {
            borderColor: '#47ACDD'
        }
    }
}));

export default function KfiveCustomHeader(props) {
    const classes = useStyles();
    const theme = useTheme();

    const currentUrl = parent.document.getElementById('preview_frame') ? parent.document.getElementById('preview_frame').contentWindow.location.href : window.location.href;
    // const currentUrl = 'https://cybozudev.kf5.com/hc/kb/article/204093/';
    console.log('当前URL：', currentUrl);

    const [initDataState, setInitDataState] = React.useState(1);
    const [initHtml, setInitHtml] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [needPermanent, setPermanent] = React.useState(false);
    const [catalog, setCatalog] = React.useState(catalogObject);
    const [catalogState, setCatalogState] = React.useState({'type': null, 'section_id': null, 'article_id': null});

    React.useEffect(() => {
        console.log('*Parent render*', 'permanent:', needPermanent);

        if (!initHtml) {
          if (/(category|section|article)/.test(currentUrl) || jQuery('#right').length > 0) {
            setPermanent(true);
            jQuery("main").children().addClass("cust_content");
            jQuery("footer").children().addClass("cust_content");
            jQuery("main").show();
            jQuery("footer").show();
          }

          // move element of user info
          const user_info_container  = jQuery("#login_user_container");
          const kf5_user_elm = jQuery(".user-nav");
          kf5_user_elm.find(".user-info-name").css('color', 'black');
          user_info_container.append(kf5_user_elm.eq(0));

          //因为新的title bar，原整体页面下移.
          jQuery("main").css('margin-top', '70px');

          setInitHtml(true);
        }

        if (initDataState !== 1)
        {
          return;
        }


        let analysis_url = currentUrl.split("/");
        let catalog_state = {};

        analysis_url.map((item, index) => {
          if ( /^\d+$/.test(item) ) {
            catalog_state.type = analysis_url[index-1];
            let cache_data = null;
            let new_catalog = {};
            let category_id = null;
            let section_id = null;
            jQuery.extend(true, new_catalog, catalog);
            
            switch (catalog_state.type) {
              case 'section':
                catalog_state.section_id = item;
                setCatalogState(catalog_state);
                setInitDataState(3);
                break;
              case 'article':
                setInitDataState(2);
                catalog_state.article_id = item;
                getSectionIdByArticle(item).then(res => {
                  section_id = res;

                  Object.keys(catalog).map((c_idx) => {
                    let section = catalog[c_idx].sections;
                    if (typeof section[section_id] !== 'undefined'){
                      category_id = c_idx;
                    }
                  });

                  cache_data = getCacheArticles(section_id);
                  if(cache_data.length > 0) {
                    return  new Promise((reslove, reject) => { 
                      reslove(cache_data);
                    });
                  } else {
                    return getArticlesBySection(section_id);
                  }
                }, err => {
                  console.log('获取文档所属section ID失败!');
                  setInitDataState(3);
                }).then(res => { 
                  if( typeof res !== 'undefined' || res !== null ){
                    new_catalog[category_id].sections[section_id].open = true;
                    new_catalog[category_id].sections[section_id].articles = res;
                    setCatalog(new_catalog);
                    setCatalogState(catalog_state);
                    setInitDataState(3);
                  }
                }, err => {
                  console.log('获取文档所属section 下所有 tips失败!');
                  setInitDataState(3);
                });
                break;
              default:
                break;
            }
          }
        });
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (<NestedList initState={initDataState} catalog={catalog} catalogState={catalogState}/>);

    return (
      <div className={classes.root}>
        <ElevationScroll {...props}>
          <AppBar position="fixed" className={classes.topBar}>
            <Toolbar className={classes.toolBar}>
              <IconButton color="black" aira-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
                <MenuIcon className={classes.menuIcon} />
              </IconButton>
              <div style={{disapley:'inline-block'}}>
                <a href="/hc/" title="cybozu">
                  <img style={{ height:'30px', width:'140px'}}src="https://fs.kf5.com/upload/23361/201609/57d644f573e8d_327.png" alt=""/>
                </a>
              </div>

              <div style={{marginLeft: '20px', flexGrow: '1'}}>
                <Hidden smDown implementation="css">
                {
                  Object.keys(catalogObject).map((idx) => {
                    return (
                      <div className={classes.titleMenu}>
                        <Link
                          href={'/hc/kb/section/' + Object.keys(catalogObject[idx]['sections'])[0]}
                          underline="none"
                          className={classes.aLink}
                          selected={false}>
                          {catalogObject[idx]['title']}  
                        </Link>
                      </div>
                    )
                  })
                }
                </Hidden>
              </div>

              <IconButton aria-label="search" color="black">
                <SearchIcon className={classes.searchIcon}/>
              </IconButton>
              <IconButton aria-label="language" color="black">
                <LanguageIcon className={classes.searchIcon}/>
              </IconButton>
              <div id="login_user_container">
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction == 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaperMin,
            }}
            ModalProps={{
              keepMounted: true,
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={needPermanent ? classes.drawer : classes.drawer_none}
            classes={{paper: classes.drawerPaper}}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    )
}