import React from 'react';


export default function LanguageView(props) {
  const {showLanguage} = props;
  const [isShow, updateShow] = React.useState(false);


  const languageRedirect = (type) => {
    switch(type) {
      case 'en':
        window.open('https://developer.kintone.io/hc/en-us/');
        break;
      case 'jp':
        window.open('https://developer.cybozu.io/hc/ja');
        break;
      default:
        break;
    }
  }

  const show = () => {
    updateShow(true);
  }
  const hide = () => {
    updateShow(false);
  }

  return (
    <div 
    className={'cust_language_box' + ((isShow || showLanguage)? ' cust_language_box_expand' : '')}
    onMouseOver={()=>show()}
    onMouseLeave={()=>hide()}
     >
      <ul>
        <li style={{borderBottom: '#eee solid 1px'}}onClick={()=>languageRedirect('jp')}><span>日本語</span></li>
        <li onClick={()=>languageRedirect('en')}><span>English</span></li>
      </ul>
    </div>
  )
}