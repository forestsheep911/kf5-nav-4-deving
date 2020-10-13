/**
 * 
 * @param {number} articles 
 * @param {number} section_id 
 */
const saveCache = (articles, section_id) => {
  try {
      let storage_data = JSON.stringify({ 
      'updatetime': (new Date()).getTime()/1000, 
      'articles': articles
      });
      window.localStorage.setItem('s'+section_id, storage_data);
  } catch (err) {}

};

/**
 * 
 * @param {number} section_id 
 */
export const getArticlesBySection = (section_id) => {
  // console.log('start geting articles list.......');
  let settings = {
      "url": "/apiv2/forums/"+ section_id +"/posts.json?sort=sort:desc,'is_top':1",
      "method": "GET",
      "headers": {
          "Authorization": "Basic a2ludG9uZWRldkBjeWJvenUuY246Y3lib3p1ZGw2NjY="
      }, 
  };

  return new Promise((reslove, reject) => {
      jQuery.ajax(settings).done((data) => {
          let articles_res = data.posts;

          let articles = [];
          articles_res.map((article) => {
              let article_tmp = {};
              article_tmp.id = article.id;
              article_tmp.title = article.title;
              article_tmp.isTop = article.is_top;
              articles.push(article_tmp);
          });

          saveCache(articles, section_id);

          reslove(articles);
      }).fail(() => {
          reject(false);
      });
  });
};

/**
 * 
 * @param {number} section_id 
 */
export const getCacheArticles = (section_id) => {
  // console.log('get cache data............');
  let articles_session_storage = (typeof window.localStorage !== 'undefined') ? JSON.parse(window.localStorage.getItem('s'+section_id)) : null;
  let now_time = (new Date()).getTime()/1000;

  let articles = [];
  if( articles_session_storage !== null ) {
    // console.log('using storage data');
    articles = articles_session_storage.articles;

    if ((now_time - articles_session_storage['updatetime']) > 3600 ) {
      getArticlesBySection(section_id).then( res =>{
      });
    }
  }

  return articles;
};

/**
 * 
 * @param {number} article_id 
 */
export const getSectionIdByArticle = (article_id) => {
  // console.log('start geting article info......');
  let settings = {
      "url": "/apiv2/posts/"+ article_id + ".json",
      "method": "GET",
      "headers": {
        "Authorization": "Basic a2ludG9uZWRldkBjeWJvenUuY246Y3lib3p1ZGw2NjY="
      },
  };

  return new Promise((reslove, reject) => {
      jQuery.ajax(settings).done((data) => {
          reslove(data.post.forum_id);
      }).fail(() => {
          reject(false);
      });
  });
  
}

export const getArticles = (comp,category_id, section_id) => {
  if(comp.state.catalog[category_id].sections[section_id].loading) {
    return;
  }

  let new_catalog = {...comp.state.catalog};

  if (new_catalog[category_id].sections[section_id].articles.length === 0)
  {
    let cache_articles = getCacheArticles(section_id);
    if(cache_articles.length > 0)
    {
      new_catalog[category_id].sections[section_id].articles = cache_articles;
      new_catalog[category_id].sections[section_id].open = true;
      comp.setState({
        catalog: {...new_catalog}
      });
    } else {
      new_catalog[category_id].sections[section_id].loading = true;
      new_catalog[category_id].sections[section_id].open = false;
      comp.setState({
        catalog: {...new_catalog}
      });

      getArticlesBySection(section_id).then(res => {
        new_catalog[category_id].sections[section_id].open = true;
        new_catalog[category_id].sections[section_id].articles = res;
        new_catalog[category_id].sections[section_id].loading = false;
        comp.setState({
          catalog: {...new_catalog}
        });
      }, err => {});
    }
  } else {
    new_catalog[category_id].sections[section_id].open = !new_catalog[category_id].sections[section_id].open;
    comp.setState({
      catalog: {...new_catalog}
    });
  }
}

