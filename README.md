# leetcode刷题 Javascript版本

## 前言

最近在准备校招暑期实习，算法题必不可少，所以开一个项目，将一些前端必须要掌握的算法题记录下来。

## 安装

下载项目后，运行：

```bash
npm install
```

安装依赖后，运行：

```bash
npm test
```

## 踩坑

今天升级了Node到v11.11，然后运行代码，出错：

```bash
TypeError: Cannot assign to read only property 'Symbol(Symbol.toStringTag)' of object '#<process>'
```

千万要注意自己的Node版本！！！如果不是必须情况，没必要追求最新版本的Node，我就是手贱升级了一下，导致出现了错误！[issues 8069](https://github.com/facebook/jest/issues/8069)