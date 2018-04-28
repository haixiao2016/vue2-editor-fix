#### 基于vue2-editor构建

> 原有问题：中文状态下，谷歌浏览器显示异常，第一个字母显示

> 原有项目基于quill构建，quill在新版本中解决了这个bug，但是vue2-editor的代码还是从原来的版本构建的

* 具体解决方法：
  1. 安装vue2-editor（npm/yarn）
  ```
  npm install --save vue2-editor
  ```
  2. 从node_modules下面找到vue2-editor文件夹，打开dist目录，将本项目中的vue2-editor.js替换掉原来的vue2-editor.js文件
