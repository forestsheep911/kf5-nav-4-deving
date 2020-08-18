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
import {stylesB} from './style.js';
import {getCacheArticles, getArticlesBySection} from './fun.js';


function NestedList(props) {
  const {classes, catalogState} = props;
  const [catalog, updateCatalog] = React.useState(props.catalog);
  // const [catalogState] = React.useState(props.catalogState);
  const domRef = React.useRef();


  React.useEffect(()=> {
    console.log('children sender...props.catalogState changed...');
    if(typeof domRef.current !== 'undefined'){
      domRef.current.scrollIntoView();
    }
  },[props.catalogState]);

  const handleSectionClick = (category_id, section_id) => {
    if(catalog[category_id].sections[section_id].loading) {
      return;
    }

    let new_catalog = {...catalog};

    if (catalog[category_id].sections[section_id].articles.length === 0)
    {
      let cache_articles = getCacheArticles(section_id);
      if (cache_articles.length > 0)
      {
        new_catalog[category_id].sections[section_id].articles = cache_articles;
        new_catalog[category_id].sections[section_id].open = true;
        updateCatalog({...new_catalog});
      } else {
        new_catalog[category_id].sections[section_id].loading = true;
        new_catalog[category_id].sections[section_id].open = false;
        updateCatalog({...new_catalog});

        getArticlesBySection(section_id).then(res => {
          new_catalog[category_id].sections[section_id].open = true;
          new_catalog[category_id].sections[section_id].articles = res;
          new_catalog[category_id].sections[section_id].loading = false;
          updateCatalog({...new_catalog});
        }, err => {});
      } 
    } else {
      new_catalog[category_id].sections[section_id].open = !catalog[category_id].sections[section_id].open;
      updateCatalog({...new_catalog});
    } 
  }

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

  return (
    <List component="nav"
    aria-labelledby="nested-list-subheader"
    className={classes.root}>
      {
        Object.keys(catalog).map((c_idx) => {
          var list = [];
          list.push(
            <ListSubheader key={c_idx} className={classes.subHeader + (catalog[c_idx]['selected'] && catalogState['type'] == 'category'  ? ' ' + classes.subHeaderSelected : '')} disableSticky={true}>{catalog[c_idx]['title']}</ListSubheader>
          )

          var sections_tmp = catalog[c_idx]['sections']
          list.push(
            Object.keys(sections_tmp).map(s_idx => {
              let sub_list = []
              let section = sections_tmp[s_idx]
              if(catalogState['type'] == 'section' && section['id'] == catalogState['num']) {
                sub_list.push(
                  <RootRef key={s_idx} rootRef={domRef}>
                    <ListItemLink  href="#" onClick={() => handleSectionClick(c_idx, section['id'])} selected={true}>
                      <ListItemText primary={section['title']} classes={{ primary: classes.textPrimary }}/> 
                      {sectionElem(section['loading'], section['open'])} 
                    </ListItemLink>
                  </RootRef>
                )
              } else {
                sub_list.push(
                  <ListItemLink  key={s_idx} href="#" onClick={() => handleSectionClick(c_idx, section['id'])} >
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