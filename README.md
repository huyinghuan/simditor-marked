simditor-marked
==============

[Simditor](http://simditor.tower.im/)扩展，将编辑器内markdown的内容格式化

### 如何使用
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
在浏览器打开index.html即可

### History

v0.0.2 

1. 更新icon. 不用锤子用类似m的图标了。