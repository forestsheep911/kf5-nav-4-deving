!function(l){function e(e){for(var t,n,a=e[0],o=e[1],r=e[2],i=0,c=[];i<a.length;i++)n=a[i],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&c.push(d[n][0]),d[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(p&&p(e);c.length;)c.shift()();return u.push.apply(u,r||[]),s()}function s(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==d[r]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},d={2:0},u=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=l,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=a;u.push([335,0,4,1]),s()}({331:function(e,t,n){var a=n(179),o=n(332);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);e.exports=o.locals||{}},332:function(e,t,n){(t=n(180)(!1)).push([e.i,".cust_content{margin-left:0 auto}.cust_content div:first-child{flex:0 0 100%}@media (max-width: 1660px){.cust_content{margin-left:260px}}@media (max-width: 960px){.cust_content{margin-left:0px}}.cus_cover{position:fixed;top:0px;bottom:0px;left:0px;right:0px;background-color:#fff;z-index:2000}.cust_dialog_box{position:absolute;border-radius:4px;box-shadow:0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12),0px -1px 3px 0px rgba(0,0,0,0.12);box-sizing:border-box;color:#000;font-size:14px;font-weight:400;line-height:40px;background-color:#fff;visibility:hidden}.cust_dialog_box ul{padding:0 15px;opacity:0}.cust_dialog_box ul li{text-align:center;padding:0 15px;cursor:pointer}.cust_dialog_box ul li:hover{color:#47ACDD}.cust_dialog_box_expand{visibility:visible}.cust_dialog_box_expand ul{opacity:1;transition:opacity 0.35s, visibility .35s;-webkit-transition:opacity 0.35, visibility .35s}.cust_search_box{height:0px;width:100%;background-color:#fcfcfc;border-top:#eee solid 1px;visibility:hidden}.cust_search_box_expand{visibility:visible;height:50px;transition:0.35s;-webkit-transition:0.35}.cust_search_box_form{padding:0 30px;width:100%;height:100%;opacity:0}.cust_search_box_form_expand{opacity:1;transition:opacity 0.35s;-webkit-transition:opacity 0.35}.cust_search_box_form input{height:40px;width:80%;background-color:transparent;border:none;padding:0 2px;border-bottom:#47ACDD solid 2px;font-size:15.84px;outline:none;flex-grow:1}.cust_search_box_form input:hover{background-color:transparent;border:none;border-bottom:#47ACDD solid 2px}.cust_search_box_form input:focus{background-color:transparent;border-bottom:#47ACDD solid 2px;border-top:none;border-left:none;border-right:none;box-shadow:none}.cust_search_box_flex{display:flex;align-items:center;justify-content:center;height:100%;max-width:1024px;margin:0 auto}.cust_header_license{padding:4px 10px;border-radius:3px;border:1px solid #ddd;background-color:#fdd000;line-height:20px}.cust_arrow_up{font-size:0;line-height:0;border-width:6px;border-color:#817e7e;border-top-width:0;border-style:dashed;border-bottom-style:solid;border-left-color:transparent;border-right-color:transparent}.cust_arrow_down{display:inline-block;font-size:0;line-height:0;margin-left:6px;border-width:5px;border-color:#817e7e;border-bottom-width:0;border-style:dashed;border-top-style:solid;border-left-color:transparent;border-right-color:transparent;transition:transform 0.2s, webkit-transform 0.2s;-webkit-transition:transform 0.2s, webkit-transform 0.2s}.cust_arrow_up{transform:rotate(-180deg);-ms-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-webkit-transform:rotate(-180deg);-o-transform:rotate(-180deg)}.cust_dir_menu{display:inline-block}@media (max-width: 1250px){.cust_dir_menu{display:none}}\n",""]),e.exports=t},335:function(e,t,n){"use strict";n.r(t);function a(e){return{root:{display:"flex"},toolBar:{minHeight:"56px"},drawer:{flexShrink:0},drawer_none:{display:"none"},topBar:{zIndex:e.zIndex.drawer+1,backgroundColor:"#fff",borderBottom:"1px solid #eee"},menuButton:S()({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),menuIcon:{fontSize:"2.4rem"},aLink:{color:"#000000",fontSize:"1.6rem"},searchIcon:{fontSize:"2.4rem"},drawerPaper:{width:240,overflowY:"auto !important","&::-webkit-scrollbar":{width:"4px",height:"4px",backgroundColor:"transparent"},"&::-webkit-scrollbar-track":{backgroundColor:"transparent"},"&::-webkit-scrollbar-thumb":{borderRadius:"4px",backgroundColor:"transparent"},"&:hover::-webkit-scrollbar-track":{backgroundColor:"transparent"},"&:hover::-webkit-scrollbar-thumb":{backgroundColor:"#c1c1c1"}},drawerPaperMin:{width:240},titleMenu:{display:"inline-block",paddingTop:"10px",paddingBottom:"10px",marginLeft:"15px",marginRight:"15px",borderBottom:"4px solid transparent",transition:"border .3s","&:hover":{borderColor:"#47ACDD"}},titleMenuActived:{borderColor:"#47ACDD"}}}var o=n(54),l=n.n(o),r=(n(145),n(172),n(0)),u=n.n(r),i=n(7),c=n.n(i),s=n(40),d=n.n(s),p=n(62),m=n.n(p),h=n(32),f=n.n(h),g=n(33),b=n.n(g),y=n(34),x=n.n(y),v=n(29),w=n.n(v),_=n(75),k=n.n(_),E=n(28),S=n.n(E),j=n(181),C=n.n(j),N=n(182),P=n.n(N),O=n(183),D=n.n(O),L=n(184),B=n.n(L),I=n(125),M=n.n(I),W=n(376),z=n(377),A=n(378),T=n(381),R=n(380),Q=n(5),G=n(199),H=n.n(G),Y=n(200),J=n.n(Y),U=n(198),$=n.n(U),Z=n(202),q=n.n(Z),F=n(201),K=n.n(F),V=n(3),X=n.n(V),ee=n(185),te=n.n(ee),ne=n(371),ae=n(370),oe=n(382),re=n(373),ie=n(374),ce=n(372),le=n(186),se=n.n(le),de=n(195),ue=n.n(de),pe={1045534:{id:"1045534",title:"开始",selected:!1,sections:{1180519:{id:"1180519",title:"Getting Started",open:!1,loading:!1,articles:[]},1180520:{id:"1180520",title:"kintone开发者账号",open:!1,loading:!1,articles:[]},1180521:{id:"1180521",title:"kintone开发者演示环境",open:!1,loading:!1,articles:[]}}},1045536:{id:"1045536",title:"行业案例",selected:!1,hiddenW:740,sections:{1180523:{id:"1180523",title:"共通",open:!1,loading:!1,articles:[]}}},1045537:{id:"1045537",title:"教程",selected:!1,hiddenW:800,sections:{1180524:{id:"1180524",title:"kintone自定义概要",open:!1,loading:!1,articles:[]},1180525:{id:"1180525",title:"kintone API入门系列",open:!1,loading:!1,articles:[]},1180526:{id:"1180526",title:"kintone 自定义的技巧",open:!1,loading:!1,articles:[]}}},1045538:{id:"1045538",title:"API文档和SDK",selected:!1,hiddenW:1015,sections:{1180527:{id:"1180527",title:"kintone API指南",open:!1,loading:!1,articles:[]},1180528:{id:"1180528",title:"kintone REST API",open:!1,loading:!1,articles:[]},1180529:{id:"1180529",title:"kintone JavaScript API",open:!1,loading:!1,articles:[]},1180530:{id:"1180530",title:"cybozu User API",open:!1,loading:!1,articles:[]},1180531:{id:"1180531",title:"SDK/Tools",open:!1,loading:!1,articles:[]},1180532:{id:"1180532",title:"kintone 插件开发",open:!1,loading:!1,articles:[]},1180533:{id:"1180533",title:"cybozu.cn 共通",open:!1,loading:!1,articles:[]}}},1045539:{id:"1045539",title:"开发范例",selected:!1,hiddenW:1140,sections:{1180534:{id:"1180534",title:"自定义开发",open:!1,loading:!1,articles:[]},11180535:{id:"1180535",title:"第三方API整合",open:!1,loading:!1,articles:[]}}},1045540:{id:"1045540",title:"插件",selected:!1,hiddenW:1200,sections:{1180536:{id:"1180536",title:"插件",open:!1,loading:!1,articles:[]}}},1045541:{id:"1045541",title:"工具",selected:!1,hiddenW:1300,sections:{1180537:{id:"1180537",title:"开发工具",open:!1,loading:!1,articles:[]},1180538:{id:"1180538",title:"资源库",open:!1,loading:!1,articles:[]}}},1045542:{id:"1045542",title:"通知",selected:!1,hiddenW:1300,sections:S()({1180539:{id:"1180539",title:"咨询动态",open:!1,loading:!1,articles:[]}},"1180539",{id:"1180539",title:"API更新信息",open:!1,loading:!1,articles:[]})}},me=["1045534","1045536","1045537","1045538","1045539","1045540","1045541","1045542"];var he=Object(Q.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)},subHeader:{paddingLeft:"8px"},subHeaderSelected:{borderLeft:"4px solid #47ACDD",backgroundColor:"#e6f7ff"},article:{color:"#87CEFA"},textPrimary:{fontFamily:"Microsoft YaHei, 微软雅黑",fontSize:"14px"},loading:{animation:"$rotate 0.75s 0s linear infinite",color:"#fff",display:"inline-block",height:"20px",width:"20px",border:"2px solid #000000",borderRadius:"100%",borderBottomColor:"transparent",background:"transparent !important",margin:"2px"},"@keyframes rotate":{"0%":{transform:"rotate(0deg)"},"50%":{transform:"rotate(180deg)"},"100%":{transform:"rotate(360deg)"}}}},{withTheme:!0})(function(e){var r=e.classes,t=e.catalog,i=e.catalogState,c=e.sectionClick,n=e.home,a=void 0!==n&&n,l=u.a.useRef();function s(e,t){return e?u.a.createElement("div",{className:r.loading}):t?u.a.createElement(se.a,null):u.a.createElement(ue.a,null)}function d(e){return u.a.createElement(oe.a,te()({button:!0,component:"a"},e))}function o(){return u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement("a",{href:"/hc/",title:"cybozu"},u.a.createElement("img",{style:{height:"30px",width:"140px"},src:"https://fs.kf5.com/upload/23361/201609/57d644f573e8d_327.png",alt:""})))}return u.a.useEffect(function(){void 0!==l.current&&l.current.scrollIntoView()},[e.catalogState]),u.a.createElement(ae.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:r.root},a&&u.a.createElement(o,null),me.map(function(a){var e=[];e.push(u.a.createElement(ne.a,{key:a,className:r.subHeader+(t[a].selected&&"category"==i.type?" "+r.subHeaderSelected:""),disableSticky:!0},t[a].title));var o=t[a].sections;return e.push(w()(o).map(function(e){var t=[],n=o[e];return"section"==i.type&&n.id==i.num?t.push(u.a.createElement(ce.a,{key:e,rootRef:l},u.a.createElement(d,{href:"#",onClick:function(){return c(a,n.id)},selected:!0},u.a.createElement(re.a,{primary:n.title,classes:{primary:r.textPrimary}}),s(n.loading,n.open)))):t.push(u.a.createElement(d,{key:e,href:"#",onClick:function(){return c(a,n.id)}},u.a.createElement(re.a,{primary:n.title,classes:{primary:r.textPrimary}}),s(n.loading,n.open))),t.push(u.a.createElement(ie.a,{key:e+"collapse",in:n.open,itemout:"auto"},u.a.createElement(ae.a,{component:"div",disablePadding:!0},n.articles.map(function(e){return"article"==i.type&&i.num==e.id?u.a.createElement(ce.a,{key:e.id,rootRef:l},u.a.createElement(d,{href:"/hc/kb/article/"+e.id+"/",className:r.nested,selected:!0},u.a.createElement(re.a,{primary:e.title,className:r.article,classes:{primary:r.textPrimary}}))):u.a.createElement(d,{key:e.id,href:"/hc/kb/article/"+e.id+"/",className:r.nested,selected:!1},u.a.createElement(re.a,{primary:e.title,className:r.article,classes:{primary:r.textPrimary}}))})))),t})),e}))}),fe=n(379),ge=n(197),be=n.n(ge);function ye(t,e){var n,a=w()(t);return x.a&&(n=x()(t),e&&(n=n.filter(function(e){return b()(t,e).enumerable})),a.push.apply(a,n)),a}function xe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ye(Object(n),!0).forEach(function(e){S()(t,e,n[e])}):f.a?m()(t,f()(n)):ye(Object(n)).forEach(function(e){d()(t,e,b()(n,e))})}return t}function ve(o){var t={url:"https://cybozudev.kf5.com/apiv2/forums/"+o+"/posts.json?sort=sort:desc,'is_top':1",method:"GET",headers:{Authorization:"Basic a2ludG9uZWRldkBjeWJvenUuY246Y3lib3p1ZGw2NjY="}};return new l.a(function(a,e){jQuery.ajax(t).done(function(e){var t=e.posts,n=[];t.map(function(e){var t={};t.id=e.id,t.title=e.title,t.isTop=e.is_top,n.push(t)}),function(e,t){try{var n=be()({updatetime:(new Date).getTime()/1e3,articles:e});window.sessionStorage.setItem("s"+t,n)}catch(e){}}(n,o),a(n)}).fail(function(){e(!1)})})}function we(e){var t=void 0!==window.sessionStorage?JSON.parse(window.sessionStorage.getItem("s"+e)):null,n=(new Date).getTime()/1e3,a=[];return null!==t&&n-t.updatetime<3600&&(a=t.articles),a}function _e(t,e){var n,a=w()(t);return x.a&&(n=x()(t),e&&(n=n.filter(function(e){return b()(t,e).enumerable})),a.push.apply(a,n)),a}function ke(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_e(Object(n),!0).forEach(function(e){S()(t,e,n[e])}):f.a?m()(t,f()(n)):_e(Object(n)).forEach(function(e){d()(t,e,b()(n,e))})}return t}function Ee(t,a,n,e){/article\/(\d+)/.test(e);var o,r,i,c=RegExp.$1;n.type="article",n.num=c,i={url:"https://cybozudev.kf5.com/apiv2/posts/"+c+".json",method:"GET",headers:{Authorization:"Basic a2ludG9uZWRldkBjeWJvenUuY246Y3lib3p1ZGw2NjY="}},new l.a(function(t,e){jQuery.ajax(i).done(function(e){t(e.post.forum_id)}).fail(function(){e(!1)})}).then(function(e){o=e,w()(a).map(function(e){void 0!==a[e].sections[o]&&(r=e)});var n=we(o);return 0<n.length?new l.a(function(e,t){e(n)}):ve(o)},function(e){}).then(function(e){null!=e&&(a[r].selected=!0,a[r].sections[o].open=!0,a[r].sections[o].articles=e,t.setState({catalog:ke({},a),catalogState:ke({},n)}))},function(e){})}var Se=n(17),je=n.n(Se);function Ce(e){function t(e){switch(e){case"en":window.open("https://developer.kintone.io/hc/en-us/");break;case"jp":window.open("https://developer.cybozu.io/hc/ja")}}var n=e.showLanguage,a=u.a.useState(!1),o=je()(a,2),r=o[0],i=o[1];return u.a.createElement("div",{className:"cust_dialog_box"+(r||n?" cust_dialog_box_expand":""),onMouseOver:function(){i(!0)},onMouseLeave:function(){i(!1)}},u.a.createElement("ul",null,u.a.createElement("li",{style:{borderBottom:"#eee solid 1px"},onClick:function(){return t("jp")}},u.a.createElement("span",null,"日本語")),u.a.createElement("li",{onClick:function(){return t("en")}},u.a.createElement("span",null,"English"))))}var Ne=n(375),Pe=n(73);function Oe(e){var t=e.showMore,n=e.currentWW,a=u.a.useState(!1),o=je()(a,2),r=o[0],i=o[1];return u.a.createElement("div",{style:{marginTop:"8px"},className:"cust_dialog_box"+(r||t?" cust_dialog_box_expand":""),onMouseOver:function(){i(!0)},onMouseLeave:function(){i(!1)}},u.a.createElement("ul",null,me.map(function(t){if(pe[t].hiddenW>n)return u.a.createElement("li",{key:"mk_"+t,onClick:function(){return e=t,void(window.location.href="/hc/kb/category/"+e);var e}},u.a.createElement("span",null,pe[t].title))})))}var De=Object(Q.a)(a,{withTheme:!0})(function(e){var t=e.classes,n=u.a.useState(window.innerWidth?window.innerWidth:document.body.clientWidth),a=je()(n,2),o=a[0],r=a[1],i=u.a.useState(!1),c=je()(i,2),l=c[0],s=c[1];u.a.useEffect(function(){var e=Object(Pe.a)(d,50);window.addEventListener("resize",e)},[]);var d=function(){var e=window.innerWidth?window.innerWidth:document.body.clientWidth;r(e)};return u.a.createElement("div",{style:{marginLeft:"20px",flexGrow:"1",display:"flex"}},u.a.createElement(T.a,{xsDown:!0,implementation:"css"},me.map(function(e){if(!(pe[e].hiddenW>o))return u.a.createElement("div",{key:e,className:t.titleMenu+(pe[e].selected?" "+t.titleMenuActived:"")+(pe[e].canHidden?" cust_dir_menu":"")},u.a.createElement(Ne.a,{href:"/hc/kb/category/"+e,underline:"none",className:t.aLink,selected:!1},pe[e].title))}),u.a.createElement("div",{className:t.titleMenu,onMouseOver:function(){s(!0)},onMouseLeave:function(){s(!1)},style:{display:o<pe[me[me.length-1]].hiddenW?"inline-block":"none"}},u.a.createElement(Ne.a,{href:"#",underline:"none",className:t.aLink,selected:!1},"更多"),u.a.createElement("div",{className:"cust_arrow_down"+(l?" cust_arrow_up":"")}),u.a.createElement(Oe,{showMore:l,currentWW:o}))))});function Le(t,e){var n,a=w()(t);return x.a&&(n=x()(t),e&&(n=n.filter(function(e){return b()(t,e).enumerable})),a.push.apply(a,n)),a}function Be(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Le(Object(n),!0).forEach(function(e){S()(t,e,n[e])}):f.a?m()(t,f()(n)):Le(Object(n)).forEach(function(e){d()(t,e,b()(n,e))})}return t}function Ie(a){var o=function(){if("undefined"==typeof Reflect||!k.a)return!1;if(k.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(k()(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n=M()(a);return t=o?(e=M()(this).constructor,k()(n,arguments,e)):n.apply(this,arguments),B()(this,t)}}var Me={type:"other",num:0},We=function(e){D()(a,e);var n=Ie(a);function a(e){var t;return C()(this,a),(t=n.call(this,e)).state={mobileOpen:!1,needPermanent:!1,catalog:Be({},pe),catalogState:Be({},Me),isLogin:!1,showLanguage:!1,showSearch:!1},t}return P()(a,[{key:"componentDidMount",value:function(){var t=this,e="other",n=parent.document.getElementById("preview_frame")?parent.document.getElementById("preview_frame").contentWindow.location.href:window.location.href;switch(/\/(category|section|article)\//.test(n)&&(e=RegExp.$1,jQuery("main").children().addClass("cust_content"),jQuery("footer").children().addClass("cust_content"),document.getElementsByTagName("main")[0].children[0].style.display="none",document.getElementsByClassName("right")[0].style.display="none",this.setState({needPermanent:!0})),function(e){var t=jQuery("#user_info_container"),n=jQuery(".user-nav");n.find(".user-info-name").css("color","black");var a=n.find(".user-info-name").get(0).childNodes[0].nodeName!==document.createElement("a").nodeName;t.append(n.eq(0)),jQuery("main").css("margin-top","70px"),jQuery("main").find(".navigation").css("display","none"),jQuery(".header").eq(0).hide();var o=document.getElementById("cover_layer");o&&(o.style.display="none"),e.setState({isLogin:a})}(this),e){case"category":!function(e,t,n,a){/category\/(\d+)/.test(a);var o=RegExp.$1;n.type="category",t[n.num=o].selected=!0,e.setState({catalog:ke({},t),catalogState:ke({},n)})}(this,pe,Me,n);break;case"section":!function(e,t,n,a){/section\/(\d+)/.test(a);var o=RegExp.$1;n.type="section",n.num=o,w()(t).map(function(e){t[e].sections.hasOwnProperty(o)&&(t[e].selected=!0)}),e.setState({catalog:ke({},t),catalogState:ke({},n)})}(this,pe,Me,n);break;case"article":Ee(this,pe,Me,n)}document.addEventListener("click",function(e){t.hideSearch()})}},{key:"handleDrawerToggle",value:function(){this.setState(function(e){return{mobileOpen:!e.mobileOpen}})}},{key:"showLanguageBox",value:function(){this.setState(function(e){return{showLanguage:!0}})}},{key:"hideLanguageBox",value:function(){this.setState(function(e){return{showLanguage:!1}})}},{key:"showSearch",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState(function(e){return{showSearch:!0}})}},{key:"hideSearch",value:function(){this.setState(function(e){return{showSearch:!1}})}},{key:"stop",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},{key:"login",value:function(){window.open("https://cybozudev.kf5.com/user/login/")}},{key:"handleSectionClick",value:function(e,t){var n,a,o,r,i;a=e,o=t,(n=this).state.catalog[a].sections[o].loading||(0===(r=xe({},n.state.catalog))[a].sections[o].articles.length?0<(i=we(o)).length?(r[a].sections[o].articles=i,r[a].sections[o].open=!0,n.setState({catalog:xe({},r)})):(r[a].sections[o].loading=!0,r[a].sections[o].open=!1,n.setState({catalog:xe({},r)}),ve(o).then(function(e){r[a].sections[o].open=!0,r[a].sections[o].articles=e,r[a].sections[o].loading=!1,n.setState({catalog:xe({},r)})},function(e){})):(r[a].sections[o].open=!r[a].sections[o].open,n.setState({catalog:xe({},r)})))}},{key:"render",value:function(){var n=this,e=this.props.classes;return u.a.createElement("div",{className:e.root},u.a.createElement(ze,this.props,u.a.createElement(W.a,{position:"fixed",className:e.topBar},u.a.createElement(z.a,{className:e.toolBar},u.a.createElement(A.a,{style:{color:"#000000"},"aira-label":"open drawer",edg:"start",onClick:function(){return n.handleDrawerToggle()},className:e.menuButton},u.a.createElement($.a,{className:e.menuIcon})),u.a.createElement(T.a,{smDown:!0,implementation:"css"},u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement("a",{href:"/hc/",title:"cybozu"},u.a.createElement("img",{style:{height:"30px",width:"140px"},src:"https://fs.kf5.com/upload/23361/201609/57d644f573e8d_327.png",alt:""})))),u.a.createElement(De,{catalog:this.state.catalog}),u.a.createElement(T.a,{xsDown:!0,implementation:"css"},u.a.createElement("div",{className:"cust_header_license"},u.a.createElement("a",{href:"https://cybozudev.kf5.com/hc/kb/article/1307437/"},u.a.createElement("span",null,"免费申请开发者账号")))),u.a.createElement(A.a,{"aria-label":"search",title:"检索内容",style:{color:"#000000"},onClick:function(e){return n.showSearch(e)}},u.a.createElement(H.a,{className:e.searchIcon})),u.a.createElement("div",null,u.a.createElement(A.a,{"aria-label":"language",title:"切换语言",style:{color:"#000000"},onMouseOver:function(){return n.showLanguageBox()},onMouseLeave:function(){return n.hideLanguageBox()}},u.a.createElement(J.a,{className:e.searchIcon,style:{color:"#000000"}})),u.a.createElement(Ce,{showLanguage:this.state.showLanguage})),u.a.createElement(A.a,{"aria-label":"user-login",title:"登录",style:{color:"#000000",display:this.state.isLogin?"none":"flex"},onClick:function(){return n.login()}},u.a.createElement(K.a,{className:e.searchIcon})),u.a.createElement("div",{id:"user_info_container",style:{display:this.state.isLogin?" ":"none"}})),u.a.createElement("div",{className:"cust_search_box"+(this.state.showSearch?" cust_search_box_expand":""),onClick:function(e){return n.stop(e)}},u.a.createElement("form",{className:"cust_search_box_form"+(this.state.showSearch?" cust_search_box_form_expand":""),"accept-charset":"UTF-8",action:"/hc/search/results/",method:"get"},u.a.createElement("div",{className:"cust_search_box_flex"},u.a.createElement("input",{id:"search",name:"keyword",placeholder:"输入问题关键字，找到答案",type:"search"}),u.a.createElement(A.a,{"aria-label":"close_search",title:"关闭",onClick:function(){return n.hideSearch()},style:{color:"#000000"}},u.a.createElement(q.a,{className:e.searchIcon}))))))),u.a.createElement(T.a,{mdUp:!0,implementation:"css"},u.a.createElement(R.a,{variant:"temporary",anchor:"rtl"!==this.props.theme.direction?"left":"right",open:this.state.mobileOpen,onClose:function(){return n.handleDrawerToggle()},classes:{paper:e.drawerPaperMin},ModalProps:{keepMounted:!0}},u.a.createElement(he,{home:!0,catalog:this.state.catalog,catalogState:this.state.catalogState,sectionClick:function(e,t){return n.handleSectionClick(e,t)}}))),u.a.createElement(T.a,{smDown:!0,implementation:"css"},u.a.createElement(R.a,{className:this.state.needPermanent?e.drawer:e.drawer_none,classes:{paper:e.drawerPaper},variant:"permanent",open:!0},u.a.createElement(z.a,{className:e.toolBar}),u.a.createElement(he,{catalog:this.state.catalog,catalogState:this.state.catalogState,sectionClick:function(e,t){return n.handleSectionClick(e,t)}}))))}}]),a}(r.Component);function ze(e){var t=e.children,n=e.window,a=Object(fe.a)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return u.a.cloneElement(t,{elevation:a?4:0})}ze.propTypes={children:X.a.element.isRequired,window:X.a.func};var Ae=Object(Q.a)(a,{withTheme:!0})(We);n(331);window.Promise=window.Promise||l.a,c.a.render(u.a.createElement(Ae,null),document.getElementById("header"))},73:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(93),o=n.n(a),r=function(t,n){var a=0;return function(){var e=o()();n<e-a&&(t.apply(this,arguments),a=e)}}}});