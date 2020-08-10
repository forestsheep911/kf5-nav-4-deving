import css from '../../css/custom_header.css';
import React, { Component }from 'react';
import {AppBar, Toolbar, IconButton, Link, Drawer, Hidden} from '@material-ui/core';
import {withStyles,  withTheme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import NestedList from './nested_list';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import {adjustCSApage, adjustPages, initDataAtCategory, initDataAtSection, initDataAtArticle} from './init.js';
import {catalogObject} from './catalog_structure.js';

const drawerWidth = 240;

const catalogStateInfo = {
  type: 'other',
  num: 0
};

const styles = theme => ({
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
  },
  titleMenuActived: {
    borderColor: '#47ACDD'
  }
});

class KfiveCustomHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false,
      needPermanent: false,
      catalog: catalogObject,
      catalogState: catalogStateInfo
    };
  }

  handleDrawerToggle() {
    this.setState({
      mobileOpen: true
    });
  };

  componentDidMount(){
    console.log('father has mounted..........');

    let page_type = 'other';
    // let current_url = parent.document.getElementById('preview_frame') ? parent.document.getElementById('preview_frame').contentWindow.location.href : window.location.href;
    let current_url = 'https://cybozudev.kf5.com/hc/kb/category/27412/';
    // let current_url = 'https://cybozudev.kf5.com/hc/kb/section/106246/';
    // let current_url = 'https://cybozudev.kf5.com/hc/kb/article/205473/';
 
    if(/(category|section|article)/.test(current_url)) {
      page_type = RegExp.$1;
      
      adjustCSApage();
      
      this.setState({
        needPermanent: true
      });
    }

    adjustPages();

    //initdata
    switch(page_type) {
      case 'category':
        initDataAtCategory(this, catalogObject, catalogStateInfo, current_url);
        break;
      case 'section':
        initDataAtSection(this, catalogObject, catalogStateInfo, current_url);
        break;
      case 'article':
        initDataAtArticle(this, catalogObject, catalogStateInfo, current_url);
        break;
      default:
        break;
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <ElevationScroll {...this.props}>
          <AppBar position="fixed" className={classes.topBar}>
            <Toolbar className={classes.toolBar}>
              <IconButton style={{ color: '#000000' }} aira-label="open drawer" edg="start" onClick={()=>handleDrawerToggle()} className={classes.menuButton}>
                <MenuIcon className={classes.menuIcon}/>
              </IconButton>

              <div style={{display:'inline-block'}}>
                <a href="/hc/" title="cybozu">
                  <img style={{ height:'30px', width:'140px'}}src="https://fs.kf5.com/upload/23361/201609/57d644f573e8d_327.png" alt=""/>
                </a>
              </div>

              <div style={{marginLeft: '20px', flexGrow: '1'}}>
                <Hidden smDown implementation="css">
                {
                  Object.keys(this.state.catalog).map((idx) => {
                    return <div key={idx} className={classes.titleMenu + (this.state.catalog[idx]['selected'] ? ' ' + classes.titleMenuActived : '')}>
                      <Link
                        href={'/hc/kb/category' + idx}
                        underline='none'
                        className={classes.aLink}
                        selected={false}>
                        {this.state.catalog[idx]['title']}
                      </Link>
                    </div>
                  })
                }
                </Hidden>
              </div>

              <IconButton aria-label="search" style={{ color: '#000000' }}>
                <SearchIcon className={classes.searchIcon}/>
              </IconButton>
              <IconButton aria-label="language" style={{ color: '#000000' }}>
                <LanguageIcon className={classes.searchIcon}/>
              </IconButton>
              <IconButton aria-label="user-login" style={{ color: '#000000' }}>
                <PersonOutlineIcon className={classes.searchIcon}/>
              </IconButton>
              <div id="user_info_container">
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Hidden mdUp implementation="css">
         <Drawer 
          variant="temporary"
          anchor={this.props.theme.direction == 'rtl' ? 'right' : 'left'}
          onClose={() =>handleDrawerToggle()}
          classes={{paper: classes.drawerPaperMin}}
          ModalProps={{keepMounted:true}}>
            <CatalogDiv catalog={this.state.catalog} catalogState={this.state.catalogState}/>
         </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={this.state.needPermanent ? classes.drawer : classes.drawer_none}
            classes={{paper: classes.drawerPaper}}
            variant="permanent"
            open>
              <CatalogDiv catalog={this.state.catalog} catalogState={this.state.catalogState}/>
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

function CatalogDiv(catalog, catalogState) {
  return <NestedList {...catalog} {...catalogState} />;
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

export default withStyles(styles, {withTheme: true})(KfiveCustomHeader);