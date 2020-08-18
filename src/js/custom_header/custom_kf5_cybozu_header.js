import css from '../../css/custom_header.css';
import React, { Component }from 'react';
import {AppBar, Toolbar, IconButton, Link, Drawer, Hidden} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import NestedList from './nested_list';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import {adjustCSApage, adjustPages, initDataAtCategory, initDataAtSection, initDataAtArticle} from './init.js';
import {getArticles, getArticlesBySection} from './fun.js';
import {catalogObject} from './catalog_structure.js';
import {styles} from './style.js';
import LanguageView from './language.js';


const catalogStateInfo = {
  type: 'other',
  num: 0
};

class KfiveCustomHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false,
      needPermanent: false,
      catalog: {...catalogObject},
      catalogState: {...catalogStateInfo},
      isLogin: false,
      showLanguage: false,
      showSearch: false
    };
  }

  componentDidMount(){
    console.log('father has mounted..........');

    let page_type = 'other';
    // let current_url = parent.document.getElementById('preview_frame') ? parent.document.getElementById('preview_frame').contentWindow.location.href : window.location.href;
    // let current_url = 'https://cybozudev.kf5.com/hc/kb/category/27412/';
    // let current_url = 'https://cybozudev.kf5.com/hc/kb/section/106246/';
    let current_url = 'https://cybozudev.kf5.com/hc/kb/article/1378683/';
 
    if(/(category|section|article)/.test(current_url)) {
      page_type = RegExp.$1;
      
      adjustCSApage();
      
      this.setState({
        needPermanent: true
      });
    }

    adjustPages(this);

    //init tree state of three type of pages
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

    document.addEventListener('click', (e) => {
      this.hideSearch();
    });
  }

  handleDrawerToggle(){
    this.setState(state =>({
      mobileOpen: !state.mobileOpen
    }))
  }

  showLanguageBox(){
    this.setState(state =>({
      showLanguage: true
    }))
  }

  hideLanguageBox(){
    this.setState(state =>({
      showLanguage: false
    }))
  }
  
  showSearch(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState(state =>({
      showSearch: true
    }))
  }

  hideSearch(){
    this.setState(state =>({
      showSearch: false
    }))
  }
   
  stop(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();  
  }

  login(){
    window.open('https://cybozudev.kf5.com/user/login/');
  }

  handleSectionClick(category_id, section_id){
    getArticles(this, category_id, section_id);
  }
  
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <ElevationScroll {...this.props}>
          <AppBar position="fixed" className={classes.topBar}>
            <Toolbar className={classes.toolBar}>
              <IconButton style={{ color: '#000000' }} aira-label="open drawer" edg="start" onClick={()=>this.handleDrawerToggle()} className={classes.menuButton}>
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

              <IconButton aria-label="search" title="检索内容" style={{ color: '#000000' }} onClick={(e)=>this.showSearch(e)}>
                <SearchIcon className={classes.searchIcon}/>
              </IconButton>
              <div>
                <IconButton aria-label="language" title="切换语言" style={{ color: '#000000' }} onMouseOver={()=>this.showLanguageBox()} onMouseLeave={()=>this.hideLanguageBox()}>
                  <LanguageIcon className={classes.searchIcon} style={{ color: '#000000' }} />
                </IconButton>
                <LanguageView showLanguage={this.state.showLanguage}/>
              </div>
              <IconButton aria-label="user-login" title="登录" style={{ color: '#000000', display: this.state.isLogin ? "none": "flex"}} onClick={()=>this.login()}>
                <PersonOutlineIcon className={classes.searchIcon}/>
              </IconButton>
              <div id="user_info_container" style={{ display: this.state.isLogin ? " ": "none"}}>
              </div>
            </Toolbar>
            <div className={'cust_search_box' + (this.state.showSearch ? ' cust_search_box_expand' : '')} onClick={(e)=>this.stop(e)}>
              <form className={'cust_search_box_form' + (this.state.showSearch ? ' cust_search_box_form_expand' : '')} accept-charset="UTF-8" action="/hc/search/results/" method="get">
                <div className={'cust_search_box_flex'}>
                  <input id="search" name="keyword" placeholder="输入问题关键字，找到答案" type="search"/>
                  <IconButton aria-label="close_search" title="关闭" onClick={()=>this.hideSearch()} style={{ color: '#000000' }} >
                    <CloseIcon className={classes.searchIcon}/>
                  </IconButton>
                </div>
              </form>
            </div>
          </AppBar>
        </ElevationScroll>
        <Hidden mdUp implementation="css">
         <Drawer 
          variant="temporary"
          anchor={this.props.theme.direction !== 'rtl' ? 'right' : 'left'}
          open={this.state.mobileOpen}
          onClose={()=>this.handleDrawerToggle()}
          classes={{paper: classes.drawerPaperMin}}
          ModalProps={{keepMounted:true}}>
            <NestedList catalog={this.state.catalog} catalogState={this.state.catalogState} sectionClick={(c,s)=>this.handleSectionClick(c,s)}/>
         </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={this.state.needPermanent ? classes.drawer : classes.drawer_none}
            classes={{paper: classes.drawerPaper}}
            variant="permanent"
            open>
              <Toolbar className={classes.toolBar}/>
              <NestedList catalog={this.state.catalog} catalogState={this.state.catalogState} sectionClick={(c,s)=>this.handleSectionClick(c,s)}/>
          </Drawer>
        </Hidden>
      </div>
    )
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

export default withStyles(styles, {withTheme: true})(KfiveCustomHeader);