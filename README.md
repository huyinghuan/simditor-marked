simditor-marked
==============

[Simditor](http://simditor.tower.im/)扩展，将编辑器内markdown的内容格式化

另外Simditor全屏编辑插件[simditor-fullscreen](https://github.com/huyinghuan/simditor-fullscreen)

### 如何使用

#### 常规加载
在Simditor的基础上额外引用[marked.js](https://github.com/chjj/marked/blob/master/lib/marked.js) 和 simditor-marked 的脚本

```html
<script src="js/marked.js"></script>
<script src="js/simditor-marked.js"></script>
```

配置

```javascript
new Simditor({
    textarea: textareaElement,
    ...,
    toolbar: [..., 'marked']
})
```

点击marked 按钮（类似m的图标）后（或用快捷键Ctrl+m），将格式化编辑器里面markdown的内容。
如果选中了一部分编辑器的内容，那么只会格式选中的内容，否则格式全部内容。

#### AMD模式加载

引入require.js
```
<script src="bower_components/requirejs/require.js"></script>
```

在require.js的入口 配置 marked
```
 require.config({
    paths:{
      jquery: 'bower_components/jquery/dist/jquery.min',
      simditor: 'bower_components/simditor/lib/simditor',
      'simple-module': 'bower_components/simple-module/lib/module',
      'simple-uploader': 'bower_components/simple-uploader/lib/uploader',
      'simple-hotkeys': 'bower_components/simple-hotkeys/lib/hotkeys',
      'simditor-marked': 'lib/simditor-marked',
      marked: 'bower_components/marked/lib/marked'
    }
  });
```

使用simditor
```
  require(
    [
      'jquery',
      'simditor',
      'simditor-marked'
    ],function($, Simditor){
      var editor = new Simditor({
        textarea: $('#editor'),
        toolbar: [
          //...
          'marked'
        ]
      });
    });
```


### 使用bower安装

```shell
bower install simditor-marked
```

### 查看 demo

clone 本仓库。

在仓库目录下运行
```shell
npm install
bower install
grunt
```
在浏览器打开index.html即可(requirejs 的demo为index-require.html)

### History
v0.0.7
1. 支持2.1.5
(由于官方不在提供统一的图标处理，因此需要额外添加对fontawesome的依赖．具体可以参考demo: index.html)

v0.0.6
1.支持mac快捷键 cmd + m

v0.0.5
1.支持 ```simditor``` 2.0.6以上版本．

v0.0.4

1. 修复bug #1. 在firefox中无法正确转义代码块

v0.0.3

1. 支持AMD模式加载

v0.0.2 

1. 更新icon. 不用锤子用类似m的图标了。
