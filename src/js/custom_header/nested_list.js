import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import RootRef  from '@material-ui/core/RootRef';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {getCacheArticles, getArticlesBySection} from '../util/util';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subHeader: {
    paddingLeft: '8px',
  },
  article: {
    color: '#87CEFA',
  },
  textPrimary: {
    fontFamily: 'Microsoft YaHei, 微软雅黑',
    fontSize: '14px'
  },
  loading: {
    animation: '$rotate 0.75s 0s linear infinite',
    color: "#fff",
    display: 'inline-block',
    height: '20px',
    width: '20px',
    border: '2px solid #000000',
    borderRadius: '100%',
    borderBottomColor: 'transparent',
    background: 'transparent !important',
    margin: '2px',
    
  },
  "@keyframes rotate": {
    "0%": {  
      transform: "rotate(0deg)"
    },
    "50%": {
      transform: "rotate(180deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [catalog, setCatalog] = React.useState(props.catalog);
  const [catalogState, setCatalogState] = React.useState(props.catalogState);
  const [position, setPosition] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    console.log('*Children sender*');

    if(position) {
      return;
    }

    if(props.initState === 3 && typeof domRef.current === 'undefined') {
      setCatalog(props.catalog);
      setCatalogState(props.catalogState);
    } 

    if(!position && typeof domRef.current !== 'undefined' && catalogState.type === 'section'){
      domRef.current.scrollIntoView();
    }
  });

  const handleExpand = () =>{
    if(!position && typeof domRef.current !== 'undefined'){
      domRef.current.scrollIntoView();
    }
  };

  const handleSectionClick = (category_id, section_id) => {
    console.log('expandless...', category_id, section_id);
    setPosition(true);

    if(catalog[category_id].sections[section_id].loading) {
      return;
    }
    
    let new_catalog = {};
    jQuery.extend(true, new_catalog, catalog);

    if (catalog[category_id].sections[section_id].articles.length === 0)
    {
      let cache_articles = getCacheArticles(section_id);
      if (cache_articles.length > 0)
      {
        new_catalog[category_id].sections[section_id].articles = cache_articles;
        new_catalog[category_id].sections[section_id].open = true;
        setCatalog(new_catalog);
      } else {
        new_catalog[category_id].sections[section_id].loading = true;
        new_catalog[category_id].sections[section_id].open = false;
        setCatalog(new_catalog);
        //开始去取数据
        getArticlesBySection(section_id).then(res => {
          new_catalog[category_id].sections[section_id].open = true;
          new_catalog[category_id].sections[section_id].articles = res;
          new_catalog[category_id].sections[section_id].loading = false;
          let res_catalog = {};
          jQuery.extend(true, res_catalog, new_catalog);
          setCatalog(res_catalog);
        }, err => {});
      } 
    } else {
      new_catalog[category_id].sections[section_id].open = !catalog[category_id].sections[section_id].open;
      setCatalog(new_catalog);
    } 
  };

  const sectionElem = (loading, open) => {
    if (loading) {
      return (
        <div className={classes.loading}></div>
      )
    } else {
      return open ? (<ExpandLess />) : (<ExpandMore />)
    }
  };

  const ListItemLink = (props) =>{
    return <ListItem button component="a" {...props} />;
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}>
    {
      Object.keys(catalog).map((c_idx) => {
        var list = [];
        list.push(
          <ListSubheader className={classes.subHeader} disableSticky={true}>{catalog[c_idx]['title']}</ListSubheader>
        )
        
        var sections_tmp = catalog[c_idx]['sections']
        list.push(
          Object.keys(sections_tmp).map((s_idx) => {
            let sub_list = [];
            let section = sections_tmp[s_idx];
            if(catalogState['type'] == 'section' && section['id'] == catalogState['section_id']) {
              sub_list.push(
                <RootRef rootRef={domRef}>
                  <ListItemLink href="#" onClick={() => handleSectionClick(c_idx, section['id'])} selected={true}>
                    <ListItemText primary={section['title']} classes={{ primary: classes.textPrimary }}/> 
                    {sectionElem(section['loading'], section['open'])} 
                  </ListItemLink>
                </RootRef>
              )
            } else {
              sub_list.push(
                <ListItemLink href="#" onClick={() => handleSectionClick(c_idx, section['id'])} >
                  <ListItemText primary={section['title']} classes={{ primary: classes.textPrimary }}/> 
                  {sectionElem(section['loading'], section['open'])} 
                </ListItemLink>
              )
            }

            sub_list.push(
              <Collapse in={section['open']} itemout="auto" onEntered={() => handleExpand()}>
                <List component="div" disablePadding>
                {
                  section['articles'].map((article) => {
                    if (catalogState['type'] == 'article' && catalogState['article_id'] == article.id) {
                      return (
                        <RootRef rootRef={domRef}>
                          <ListItemLink href={'/hc/kb/article/' + article.id + '/'} className={classes.nested} selected={true} >
                            <ListItemText primary={article.title} className={classes.article} classes={{ primary: classes.textPrimary }}/>
                          </ListItemLink>
                        </RootRef>
                      )
                    } else {
                      return (
                        <ListItemLink href={'/hc/kb/article/' + article.id + '/'} className={classes.nested} selected={false} >
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
  );
}