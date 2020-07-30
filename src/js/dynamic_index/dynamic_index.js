import css from '../../css/dynamic_index_style.css';
import React from 'react';

const  dynamicIndexObject = [];
const  dynamicIndexPosition = {position: 0};

export function DynamicIndex() {
  const [expand, setExpand] = React.useState(false);
  const [dynamicIndex, updateIndex] = React.useState([]);
  const [positionD, updatePosition] = React.useState(0); 
  const [isInit, setInit] = React.useState(true);
  const [isAdjust, finishAdjust] = React.useState(false);
 
  React.useEffect(() => {
    if (!isInit)
    {
      return;
    }

    // window.addEventListener('scroll', () => {
      
    //   dynamicIndexObject.map((item, idx) => {
    //     let current_page_TY = (typeof window.scrollY === 'undefined') ? document.documentElement.scrollTop : window.scrollY;
    //     let refer_v_p = current_page_TY - dynamicIndexObject[dynamicIndexPosition.position].elm.offsetTop;
    //     let refer_v_n = current_page_TY - item.elm.offsetTop;

    //     if ((refer_v_n <= 0 && refer_v_p <= 0) || (refer_v_n > 0 && refer_v_p > 0))
    //     {
    //       return;
    //     }

    //     if (Math.abs(refer_v_p) > Math.abs(refer_v_n))
    //     {
    //       dynamicIndexPosition.position = idx;
    //       updatePosition(idx);
    //       return;
    //     }
    //   });
    // });
   
    initDynamicIndex();
    setInit(false);
  });

  const initDynamicIndex = () => {
    var h1 = document.createElement('h1').nodeName;
    var h2 = document.createElement('h2').nodeName;
    var h3 = document.createElement('h3').nodeName;

    var original_content = jQuery('.original-content').children();
    original_content.map((idx) => {
      let elm_dom_obj = original_content.get(idx);
      if(elm_dom_obj.nodeName === h1 || elm_dom_obj.nodeName === h2 || elm_dom_obj.nodeName === h3){
        let index_item = {};
        console.log(elm_dom_obj, elm_dom_obj.getAttribute('id'));
        if(elm_dom_obj.getAttribute('id') !== null && elm_dom_obj.getAttribute('id').length > 0)
        {
          index_item.id = elm_dom_obj.getAttribute('id');
        } else {
          index_item.id = 'dynamicidx' + idx;
          elm_dom_obj.setAttribute('id', 'dynamicidx' + idx);
        }

        elm_dom_obj.classList.add('cus_h');
        elm_dom_obj.style.backgroundPositionY = '70px';
        index_item.title = elm_dom_obj.innerText;
        index_item.second_level = elm_dom_obj.nodeName === h3 ? true : false;
        index_item.elm = elm_dom_obj;

        dynamicIndexObject.push(index_item);
      }
    });

    updateIndex(dynamicIndexObject);
  }

  const expandIndex = () => {
    if(!isAdjust){
      let new_dynamic_index = [];
      let is_need_adjust = false;
      dynamicIndexObject.map((item,idx) => {
        let index_item = item;
        if(item.id !== item.elm.getAttribute('id')) {
          index_item.id = item.elm.getAttribute('id');
          is_need_adjust = true;
        }
        new_dynamic_index.push(index_item);
      });

      finishAdjust(true);

      if (is_need_adjust) {
        updateIndex(new_dynamic_index);
      }
    }

    setExpand(true);
  }

  const closeIndex = () => {
    setExpand(false);
  }

  return (
    <div class="dynamic_index_root" onMouseOver={() => expandIndex()} onMouseOut={() => closeIndex()}>
      <ul className={`dynamic_index_ul  ${expand ? 'dynamic_index_ul_expand' : ''}`}>
        {
          dynamicIndex.map((item,idx) => {
            return (
              <li id={item.id} className={`dynamic_index_li ${expand ? 'dynamic_index_ul_expand' : ''} ${(expand & item.second_level) ? 'dynamic_index_li_secondleve': ''} ${positionD === idx ? 'dynamic_index_li_selected': ''}` } onMouseEnter={() => expandIndex()}>
                <a href={'#'+item.id} >{item.title}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}