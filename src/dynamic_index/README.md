# kintone开发者网站 文档页面索引改善
### 背景

* 原KF5 索引效果
![原KF5索引效果](/resources/index_example_original.gif)
<br/>
短板：对于想要通过索引多次定位到目标内容，操作繁琐，每次都需要点击回到页面顶端按钮。


* 其它 文档类网站 索引设计
![参考效果](/resources/index_example.gif)
长处：每次定位操作一步到位。

### 本调查Demo效果图展示

![参考效果](/resources/index_demo.gif)
如上效果图，常态浏览文档时， 索引表现为一个抽象轮廓， 当鼠标移动到抽象轮廓上时，显示真实索引，点击可以定位到指定文档内容位置。并且索引和浏览文档时的页面滚动有相关联动，在滚动页面时，抽象轮廓也会有相应变化。

### 如何部署到kf5上步骤

#### 第一步
将"/dist/index"目录下的dynamic_index_marge.bundle.js文件上传至阿里云上。

#### 第二步

* 在“知识库文档页”插入一个div和引用JS
````
<!--[if (gte IE 10)|(!IE)]> -->
<div id ="dynamic_index" style="width:0px;height:0px;"></div>
<script src="https://cybozukf5.oss-cn-shanghai.aliyuncs.com/js/dynamic_index.bundle.js" type="text/javascript" ></script>
<!-- <![endif]-->
````


### 如何继续开发和构建 dynamic_index_marge.bundle.js
本demo使用到了react框架， 以上技术的license都是MIT协议可以放心使用。

* 在本地开发环境机器上提前安装好node.js运行环境.
* 将本github资源库整体下载到本地开发环境机器上.
* 使用命令行工具，移动到源码根目录运行以下命令
* npm install (这个命令只需要在初次构建运行，作用是根据package.json的第3方库依赖关系，下载依赖库。)
* 修改代码
* npm run build_dynamic_index_marge （这个命令就会生成“dynamic_index_marge.bundle.js”文件）