import {getSectionIdByArticle, getCacheArticles, getArticlesBySection} from './fun.js'; 

/**
 *  当用户访问的页面是， 文档一级分类，二级分类，文档详情
 *  做些css调整
 */
export const adjustCSApage = () => {
  jQuery('main').children().addClass('cust_content');
  jQuery('footer').children().addClass('cust_content');

  document.getElementsByTagName("main")[0].children[0].style.display = 'none';
  document.getElementsByClassName('right')[0].style.display = 'none';

}

/**
 * 对所有页面所调整迎合导航栏设计
 * @param {Object} comp
 */
export const adjustPages = (comp) => {

  let userinfo_container = jQuery('#user_info_container');
  let kf5_orginal_userinfo = jQuery('.user-nav');
  kf5_orginal_userinfo.find('.user-info-name').css('color', 'black');
  let is_login = (kf5_orginal_userinfo.find('.user-info-name').get(0).childNodes[0].nodeName === document.createElement('a').nodeName) ? false : true;
  userinfo_container.append(kf5_orginal_userinfo.eq(0));
  
  //由于顶部bar，将原整体页面下移
  jQuery('main').css('margin-top', '70px');

  //整个react UI组件都渲染完后，将遮盖层隐藏
  let coverLayer = document.getElementById('cover_layer');
  if(coverLayer) {
    coverLayer.style.display = 'none';
  }


  comp.setState({
    isLogin: is_login
  })
}

/**
 * 
 * @param {Object} comp 
 * @param {Object} catalog 
 * @param {Object} catalogState 
 * @param {String} curl 
 */
export const initDataAtCategory = (comp, catalog, catalogState, curl) => {
  /category\/(\d+)/.test(curl);
  let num = RegExp.$1;
  catalogState.type = 'category';
  catalogState.num = num;
  catalog[num].selected = true;
  
  comp.setState({
    catalog: {...catalog},
    catalogState: {...catalogState}
  });
}

/**
 * 
 * @param {Object} comp 
 * @param {Object} catalog 
 * @param {Object} catalogState 
 * @param {String} curl 
 */
export const initDataAtSection = (comp, catalog, catalogState, curl) => {
  /section\/(\d+)/.test(curl);
  let num = RegExp.$1;
  catalogState.type = 'section';
  catalogState.num = num;
  Object.keys(catalog).map((c_idx) => {
    if (catalog[c_idx].sections.hasOwnProperty(num)) {
      catalog[c_idx].selected = true;
    }
  });
  
  comp.setState({
    catalog: {...catalog},
    catalogState: {...catalogState}
  });
}

/**
 * 
 * @param {Object} comp 
 * @param {Object} catalog 
 * @param {Object} catalogState 
 * @param {String} curl 
 */
export const initDataAtArticle = (comp, catalog, catalogState, curl) => {
  /article\/(\d+)/.test(curl);
  let num = RegExp.$1;
  catalogState.type = 'article';
  catalogState.num = num;

  let section_id;
  let category_id;
  getSectionIdByArticle(num).then(res =>{
    section_id =res;
    Object.keys(catalog).map((c_idx) => {
      let section = catalog[c_idx].sections;
      if (typeof section[section_id] !== 'undefined') {
        category_id = c_idx;
      }
    });

    let cache_data = getCacheArticles(section_id);
    if(cache_data.length > 0) {
       return new Promise((reslove, reject) => {
         reslove(cache_data);
       })
    } else {
      return getArticlesBySection(section_id);
    }
  }, err => {
    // console.log('Faild to get Section ID.....', err);
  }).then(res => {
    if( typeof res !== 'undefined' && res !== null) {
      catalog[category_id].selected = true;
      catalog[category_id].sections[section_id].open = true;
      catalog[category_id].sections[section_id].articles = res;

      comp.setState({
        catalog: {...catalog},
        catalogState: {...catalogState}
      })
    }
  }, err => {
    // console.log('Faild to get Article list........', err);
  })
}