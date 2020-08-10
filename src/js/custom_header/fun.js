const saveCache = (articles, section_id) => {
  try {
      let storage_data = JSON.stringify({ 
      'updatetime': (new Date()).getTime()/1000, 
      'articles': articles
      });
      window.sessionStorage.setItem('s'+section_id, storage_data);
  } catch (err) {}

};

export const getArticlesBySection = (section_id) => {
  console.log('start geting articles list.......');
  let settings = {
      "url": "https://cybozudev.kf5.com/apiv2/forums/"+ section_id +"/posts.json?sort=sort:desc,'is_top':1",
      "method": "GET",
      "headers": {
          "Authorization": "Basic NDA4NTg3NzI0QHFxLmNvbS90b2tlbjpkOGIyMTA1NjBhNGQxYTczNzA1YmNiOTEzMDkyNGU="
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

export const getCacheArticles = (section_id) => {
  console.log('get cache data............');
  let articles_session_storage = (typeof window.sessionStorage !== 'undefined') ? JSON.parse(window.sessionStorage.getItem('s'+section_id)) : null;
  let now_time = (new Date()).getTime()/1000;

  let articles = [];
  if( articles_session_storage !== null  && ( (now_time - articles_session_storage['updatetime']) < 3600) ) {
    console.log('using storage data');
    articles = articles_session_storage.articles;
  }

  return articles;
};

export const getSectionIdByArticle = (article_id) => {
  console.log('start geting article info......');
  let settings = {
      "url": "https://cybozudev.kf5.com/apiv2/posts/"+ article_id + ".json",
      "method": "GET",
      "headers": {
        "Authorization": "Basic NDA4NTg3NzI0QHFxLmNvbS90b2tlbjpkOGIyMTA1NjBhNGQxYTczNzA1YmNiOTEzMDkyNGU="
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
