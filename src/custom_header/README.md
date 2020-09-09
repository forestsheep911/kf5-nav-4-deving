# kintone开发者网站 导航菜单改版调查
### 背景
日本和美国的开发者网站中，文档的导航菜单都有三层，能导航到具体的文章。然而中国的开发者网站文档的导航菜单只有二层（文档的分类）。想要导航到具体文档需要经过多层分类导航页面，甚至翻页，页面跳转过多。因此网站的体验不是很好。


### 本调查Demo效果图展示

* 适配大屏幕效果
![适配大屏幕效果](/resources/full_screen.gif)
<br/>
<br/>

# 注意事项

##  如何修改KF5网站一级、二级菜单
将来如果对KF5网站的一级、二级文档分类进行了，增、删、改、排序等操作。都需要对本项目中的/src/custom_header/util/catalog_structure.js文件进行相应的修改。

* catalogObject 主要是kf5网站中一级和二级分类的属性和层级关系的映射
* 一级菜单的hiddenW属性的修改， 通过调节浏览器大小，找到各个一级菜单适合的隐藏值作为hiddenW的值.
```

catelogObject = { //catelogObject本身是个对象
   ...
   '[一级分类id]' : { id: 'xxx(一级分类id)', title: '(一级分类名称)', selected: '(代码标识，true选中状态)',hiddenW: '111(代码标识，表示屏幕缩小至这个尺寸时，该菜单要被折叠显示)'， sections: { (二级分类对象), sectionsOrder[(二级菜单显示顺序，显示与否)]}
   ...
}

// 二级分类对象
sections : {
  ...
  '[二级分类id]' : { id: '(二级分类id)', title: '(二级分类名称)', open : '(代码标识，true时二级菜单被展开)', loading: '(代码标识, true表示正在加载三级菜单数据)', articles：[(当前二级分类下的所有文档列表，通过ajax请求获取，结构请查看代码自己分析)]}
  ...
}
```
* catalogObjOrder 主要用于决定一级菜单显示顺序、显示与否。

```
//数组对象内值的顺序就是，导航菜单上的顺序
 catalogObjOrder = ['27412','1018929','27413', '27414', '27415', '27416', '27417', '28043']
```

记得每次修改后都需要重新打包出js文件上传至码云。
（第3方依赖库没有新版本情况下，打包后只有/dist/cybozu_kf5_header.bundle.js会有变化）

## KF5 Restful API
本项目请求kf5 Restful API 时，使用的是 basic Auth.
如果要替换用户。需要修改以下文件内几处信息。[目前使用该账户](https://bozuman.cybozu.com/k/21732/show#record=98)
```
// 文件： src/custom_header/util/fun.js
以下两处函数内 :
1. getSectionIdByArticle
2. getArticlesBySection

//替换()号内的内容， 内容可以借助postman 工具生成。
"headers": {
          "Authorization": ("Basic NDA4NTg3NzI0QHFxLmNvbS90b2tlbjpkOGIyMTA1NjBhNGQxYTczNzA1YmNiOTEzMDkyNGU=")
      }, 
```
[KF5 认证API参考文档](https://developer.kf5.com/doc/restapi/core/)

## 文档获取上限
目前没有处理获取文档记录API的分页问题，因为分页的基数是100条。
现在kf5网站内还不存在，分类下文章有超过100条的情况。将来某个分类下文章快接近100这个基数时，需要提前实现分页获取记录功能。

目前用到以下两个Restful API
* 查看指定文档分类的正式文档列表: /apiv2/forums/{forum_id}/posts.json [KF5 api 参考文档](https://developer.kf5.com/doc/restapi/core/)
* 查看文档（获取返回json对象内的forum_id）：/apiv2/posts/{id}.json [KF5 api 参考文档1](https://developer.kf5.com/doc/restapi/helpcenter/38-210)
[KF5 api 参考文档2](https://developer.kf5.com/doc/restapi/helpcenter/38-208)

