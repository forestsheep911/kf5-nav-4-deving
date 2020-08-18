# 仓库说明

该仓库是所有KF5网站改善项目中，使用react开发的项目集合。将这些项目合并在一起，是为了使用webpack打包时可以，提取react，等一些公共代码，从而解决单个js文件过大，和重复引入重复代码等问题。

### 项目列表

* 三层目录 https://github.com/cybozu-private/kf5-three-level-navigation-menu/tree/master/src/js/custom_header

* 动态索引  https://github.com/cybozu-private/kf5-three-level-navigation-menu/tree/master/src/js/dynamic_index

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




