import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import RootRef  from '@material-ui/core/RootRef';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {stylesB} from '../css/style.js';
import {catalogObjOrder} from '../util/catalog_structure.js'


function NestedList(props) {
  const {classes, catalog, catalogState, sectionClick, home = false} = props;
  const domRef = React.useRef();


  React.useEffect(()=> {
    if(typeof domRef.current !== 'undefined'){
      domRef.current.scrollIntoView();
    }
  },[props.catalogState]);

  const sectionElem = (loading, open) => {
    if (loading) {
      return (
        <div className={classes.loading}></div>
      )
    } else {
      return open ? (<ExpandLess />) : (<ExpandMore />)
    }
  }

  const ListItemLink = (props) =>{
    return <ListItem button component="a" {...props} />;
  }
  
  const HomeDiv = () => {
    return (
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
        <a href="/hc/" title="cybozu">
          <img style={{ height:'30px', width:'140px'}}src="https://fs.kf5.com/upload/23361/201609/57d644f573e8d_327.png" alt=""/>
        </a>
      </div>
    )
  }

  return (
    <List component="nav"
    aria-labelledby="nested-list-subheader"
    className={classes.root}>
      {home && <HomeDiv/>}
      {
        catalogObjOrder.map((c_idx) => {
          var list = [];
          list.push(
            <ListSubheader key={c_idx} className={classes.subHeader + (catalog[c_idx]['selected'] && catalogState['type'] == 'category'  ? ' ' + classes.subHeaderSelected : '')} disableSticky={true}>{catalog[c_idx]['title']}</ListSubheader>
          )

          var sections_tmp = catalog[c_idx]['sections']
          list.push(
            catalog[c_idx]['sectionsOrder'].map(s_idx => {
              let sub_list = []
              let section = sections_tmp[s_idx]
              if(catalogState['type'] == 'section' && section['id'] == catalogState['num']) {
                sub_list.push(
                  <RootRef key={s_idx} rootRef={domRef}>
                    <ListItemLink  href="javascript:void(0);" onClick={() => sectionClick(c_idx, section['id'])} selected={true}>
                      <ListItemText primary={section['title']} classes={{ primary: classes.textPrimary }}/> 
                      {sectionElem(section['loading'], section['open'])} 
                    </ListItemLink>
                  </RootRef>
                )
              } else {
                sub_list.push(
                  <ListItemLink  key={s_idx} href="javascript:void(0);" onClick={() => sectionClick(c_idx, section['id'])} >
                    <ListItemText primary={section['title']} classes={{ primary: classes.textPrimary }}/> 
                    {sectionElem(section['loading'], section['open'])} 
                  </ListItemLink>
                )
              }

              sub_list.push(
                <Collapse  key={s_idx + 'collapse'} in={section['open']} itemout="auto" >
                  <List component="div" disablePadding>
                  {
                    section['articles'].map((article) => {
                      if (catalogState['type'] == 'article' && catalogState['num'] == article.id) {
                        return (
                          <RootRef  key={article.id} rootRef={domRef}>
                            <ListItemLink  href={'/hc/kb/article/' + article.id + '/'} className={classes.nested} selected={true} >
                              <ListItemText primary={article.title} className={classes.article} classes={{ primary: classes.textPrimary }}/>
                            </ListItemLink>
                          </RootRef>
                        )
                      } else {
                        return (
                          <ListItemLink key={article.id} href={'/hc/kb/article/' + article.id + '/'} className={classes.nested} selected={false} >
                            <ListItemText primary={article.title} className={classes.article} classes={{ primary: classes.textPrimary }}/>
                          </ListItemLink>
                        )
                      }
                    })
                  }
                  </List>
                </Collapse>
              )
              return sub_list;
            })
          )
          return list;
        })
      }
    </List>
  )
}

export default withStyles(stylesB, {withTheme: true})(NestedList);