# 仓库说明

该仓库是所有KF5网站改善项目中，使用react开发的项目集合。将这些项目合并在一起，是为了使用webpack打包时可以，提取react，等一些公共代码，从而解决单个js文件过大，和重复引入重复代码等问题。

### 项目列表

* 三层目录 https://github.com/cybozu-private/kf5-three-level-navigation-menu/tree/master/src/js/custom_header

* 动态索引  https://github.com/cybozu-private/kf5-three-level-navigation-menu/tree/master/src/js/dynamic_index
### 目录说明
* /demo_resource <br/>
demo.html 和 demo_dynamic_index.html 用到一些现有kf5网站应用的js和css文件，目的是在开发调试过程中，可以最真实的还原kf5网站原效果。

* /dist <br/>
完整项目打包后的资源文件，将存放在该目录下。
构建命令：[npm run build] 生成分隔的资源文件， 除了“common_react.bundle.js”其它都需要被页面引用

* /dist/header <br/>
三层目录结构项目打包后的资源文件， 将存放在该目录下。
构建命令: [npm run build_three_leve_tree_marge] 生成一个文件，所有代码都在一起。
构建命令：[npm run build_three_leve_tree] 生成分隔的资源文件。

* /dist/index <br/>
动态索引项目打包后的资源文件， 将存放在该目录下。
构建命令: [npm run build_dynamic_index_marge] 生成一个文件，所有代码都在一起。
构建命令：[npm run build_dynamic_index] 生成分隔的资源文件。

* /resources <br/>
README.md 所有素材存放在该目录下。

* /src/css <br/>
所有项目 css文件， 存放在该目录下。

* /src/js <br/>
一般有需要对整个项目有公共库后者函数提取，在该目录下创建JS文件， 参考common_rect.js文件。

* /src/js/custom_header <br/>
三层目录 项目源码文件位置

* /src/js/dynamic_index <br/>
动态索引 项目源码文件位置

* /src/js/util <br/>
通用函数


### 如何继续开发和构建 

本仓库代码都基于react框架开发. webpack 打包代码。

* 在本地开发环境机器上提前安装好node.js运行环境.
* 将本github资源库整体下载到本地开发环境机器上.
* 使用命令行工具，移动到源码根目录运行以下命令
* npm install (这个命令只需要在初次构建运行，作用是根据package.json的第3方库依赖关系，下载依赖库。)
* 修改代码
* 使用package.json 预先写好的相应 [build] 命令，构建打包代码。



