# 简单实现一个vue cli

基于webpack来实现一个vue cli的功能

实现vue cli的目录部署

实现一些性能优化的功能。

​	 静态资源压缩，打包，添加指纹等等。

**资源发布**

 将静态资源发布到外面的demo/static目录中

 将模板资源发布到外面的demo/views/index.html文件中

**发布模板**

​	 发布html文件用html-webpack-plugin插件

​			 template  定义模板文件位置

​			 filename 模板文件发布位置

​			 hash  是否添加指纹（添加在query上）

​			 inject 是否注入静态资源（默认是注入的）

 **压缩资源**

​	压缩js，压缩html，压缩css

**拆分文件**

将模块文件打包在一起：main.js

将样式文件打包在一起: style.css

​	 我们使用mini-css-extract-plugin插件

​			 vue组件中样式拆分： extractCSS: true

​			 css和scss|less样式拆分，使用该插件加载机

​			 我们通过插件的filename属性定义文件发布位置。

对资源添加指纹：css资源，js资源等

​		 压缩css使用optimize-css-assets-webpack-plugin插件

​		 压缩js： mode: ‘production’

**拆分库文件**

将库文件打包在一起：lib.js

​	 optimization: {

​		 splitChunks: { 拆分文件

​				 cacheGroup: { 公用缓存分组

​						 lib: {

​								 name： 库文件名称

​								 chunks  ‘initial’,

​								 test: 库文件特征

​						 }

​				 }

​		 }

​	 }
