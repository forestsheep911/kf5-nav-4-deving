# kintone开发者网站 导航菜单改版调查
### 背景
日本和美国的开发者网站中，文档的导航菜单都有三层，能导航到具体的文章。然而中国的开发者网站文档的导航菜单只有二层（文档的分类）。想要导航到具体文档需要经过多层分类导航页面，甚至翻页，页面跳转过多。因此网站的体验不是很好。


### 本调查Demo效果图展示

* 适配大屏幕效果
![适配大屏幕效果](/resources/full_screen.gif)
<br/>
<br/>
* 适配手机等小屏幕效果
![适配手机等小屏幕](/resources/min_screen.gif)


### 如何部署到kf5上步骤

#### 第一步
将"/dist"目录下的cybozu_kf5_header.bundle.js文件上传至阿里云上。

#### 第二步
对kf5模板设计中的以下几个区域代码块做修改：

* 将原有“页面头部”的代码全部使用下面这段代码覆盖
````
<div class="header" id="header"></div>
<div class="user-nav clearfix">{{user_info}}</div>
````
* 在“页面底部”中引用阿里云上的cybozu_kf5_header.bundle.js文件
````
   //以下位置插入如下代码
   <script src="https://cybozukf5.oss-cn-shanghai.aliyuncs.com/js/cybozu_kf5_header.bundle.js" type="text/javascript"></script>
</footer>
````

* 对"知识库分区页"做如下修改：给部分html元素添加“display:none;”属性隐藏起来。
````
<main style="display:none;"> //修改main元素
//将旧的导航元素隐藏
<div class="right" style="display:none;">
            {{category_section_list}}
</div>
````

* 对"知识库分类页"做如下修改：给部分html元素添加“display:none;”属性隐藏起来。
````
//同上
<main style="display:none;">
<div class="right" style="display:none;">
            {{category_section_list}}
        </div>
````

* 对“知识库文档页”做如下修改：给部分html元素添加“display:none;”属性隐藏起来。
````
//同上
<main style="display:none;">
<div class="right" style="display:none;">
            {{category_section_list}}
        </div>
````

* 对“搜索结果页”做如下修改：给部分html元素添加“display:none;”属性隐藏起来。
````
<main style="display:none;"> //修改main元素
````

完成以上修改，就大功告成。

### 如何继续开发和构建 cybozu_kf5_header.bundle.js
本demo使用到了react框架，和基于react框架的一套UI设计组件库Material-UI， 以上技术的license都是MIT协议可以放心使用。

* 在本地开发环境机器上提前安装好node.js运行环境.
* 将本github资源库整体下载到本地开发环境机器上.
* 使用命令行工具，移动到源码根目录运行以下命令
* npm install (这个命令只需要在初次构建运行，作用是根据package.json的第3方库依赖关系，下载依赖库。)
* 修改代码
* npm run build （这个命令就会生成“cybozu_kf5_header.bundle.js”文件）

### 补充说明
本dome中 Title bar上的 多语言切换和搜索目前只是放了一个ICON占位，具体实现效果因为不在本调查范围内，所以没有具体实现.





