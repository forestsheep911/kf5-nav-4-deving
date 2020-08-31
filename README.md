# 仓库说明

该仓库是所有KF5网站改善项目中，使用react开发的项目集合。将这些项目合并在一起，是为了使用webpack打包时可以，提取react，等一些公共代码，从而解决单个js文件过大，和重复引入重复代码等问题。

# 工程化配置

### 持续的、自动化打包、自带webserver的、开发环境配置

* 在本地开发环境机器上，提前安装好node.js运行环境。（保持最新稳定版）
* 将本github资源库整体，下载到本地机器上。
* 使用cli工具，移动到源码根目录
* 生成npm配饰文件\[package.json\] (文件仓库内已包含)
```
\\自建新环境
npm init //生成
\\本仓库跳过这步

```
* 安装开发环境依赖库

```
\\自建新环境
npm -i webpack, webpack-cli, webpack-dev-server, html-webpack-plugin
\\使用本仓库package.json
npm -i
```
* 创建&配置webpack配置文件 （本仓库已存在写好的配置文件\[webpack.dev.config.js\]）

* package.json文件内添加npm脚本 （本仓库已写好）
```
"scripts": {
    ....
    "dev": "webpack-dev-server --config ./webpack.dev.config.js",
    ....
}
```
* 命令行控制台运行如果下
```
npm run dev
```

* 完成以上步骤后，本地会启动一个服务器，访问地址是http://localhost:8080/
之后，当修改原代码保存后，webpack会自动打包，并刷新网址，使用最新编译好的代码。

# 部署方案 & 正式环境使用JS文件打包

* 正式环境js文件，使用npm run build命令打包，具体的打包配置可以查看根目录下的webpack.config.js
* 打包成功后会在dist目录下生成3个文件
```
* cybozu_kf5_header.bundle.js //项目代码
* material_ui_core_main.bundle.js // material ui库用到的组件
* react_main.bundle.js  // react核心代码
* vendor_libarys.bundle.js // 其它使用到的第三方包 node_modules目录下的

具体可以查看webpack.config.js 的 optimization.splitChunks配置项， 怎么分割打包和包名规则都在这个配置内
```

## 正式环境部署方案

* 将上面打包好的4个文件传到 阿里云oss上
* 将下面一段代码复制到 【kf5模板编辑页>页面底部】最下方。
```
//因为项目不兼容IE10一下浏览器，所以JS引用需要过滤
<!--[if (gte IE 10)|(!IE)]> -->
<script src="https://cybozukf5.oss-cn-shanghai.aliyuncs.com/js/vendor_libarys.bundle.js" type="text/javascript"></script>
<script src="https://cybozukf5.oss-cn-shanghai.aliyuncs.com/js/react_main.bundle.js" type="text/javascript"></script>
<script src="https://cybozukf5.oss-cn-shanghai.aliyuncs.com/js/material_ui_core_main.bundle.js" type="text/javascript"></script>
<script src="https://cybozukf5.oss-cn-shanghai.aliyuncs.com/js/cybozu_kf5_header.bundle.js" type="text/javascript"></script>
<!-- <![endif]-->
```
* 修改【kf5模板编辑页>页面头部】
```
//将原先class属性是header的div隐藏,并新加一个id为header的div
<div class="header"></div>
修改成下面
<div id="cover_layer" style="position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; background-color: #fff; z-index: 2000;"></div> 
<div class="header" style="display:none"></div>
<div id="header"></div>
```
* 修改【kf5模板编辑页>首页】
```
//将首页原先的目录菜单隐藏，给class是navigation的元素添加display:none的style属性
 <div class="navigation" style="display:none;">
```


