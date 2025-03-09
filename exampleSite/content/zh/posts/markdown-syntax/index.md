---
title: Markdown 语法指南
date: 2023-02-11
author: Hugo Authors
description: 展示基本 Markdown 语法和 HTML 元素格式化的示例文章。
isStarred: true
---

本文提供了 Hugo 内容文件中可以使用的 Markdown 语法示例，同时展示了 Hugo 主题中是否对基本 HTML 元素进行了 CSS 装饰。
<!--more-->

## 标题

以下 HTML `<h1>`—`<h6>` 元素表示六个级别的标题。`<h1>` 是最高级别的标题，而 `<h6>` 是最低级别的标题。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## 图片

您可以使用以下语法来包含图片。图片的路径应相对于 `index.md` 文件。

```markdown
![Landscape](1.jpg)
```

![Landscape](1.jpg)

您还可以包含来自外部来源的图片。

```markdown
![Image](https://source.unsplash.com/random/600x400/?tech)
```

![Image](https://source.unsplash.com/random/600x400/?tech)

## 引用

引用元素表示从其他来源引用的内容，可以选择包含引用来源，引用来源必须位于 `footer` 或 `cite` 元素中，还可以选择包含注释和缩写等内联更改。

### 无来源的引用

> 您可以在引用中使用 Markdown 语法，例如 **bold**,  _italics_, [links](https://gohugo.io/), `code`。

### 带来源的引用

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上述引用摘自 Rob Pike 在 2015 年 11 月 18 日 Gopherfest 上的[演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

## 表格

表格不是 Markdown 核心规范的一部分，但 Hugo 原生支持它们。

   Name | Age
--------|------
   Bob  | 27
 Alice  | 23

### 表格中的 Markdown

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## 代码块

### 使用反引号的代码块

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### 缩进四个空格的代码块

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### 使用 Hugo 内置高亮短代码的代码块

{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

### 内联代码

使用反引号在句子中引用 `variable`。

## 列表类型

### 有序列表

1. First item
2. Second item with some `code` in it
3. Third item

### 无序列表

* List item
* Another item with some `code` in it
* And another item

### 嵌套列表

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## 其他元素 — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按下 <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> 结束会话。

大多数 <mark>蝾螈</mark> 是夜行动物，捕食昆虫、蠕虫和其他小生物。
