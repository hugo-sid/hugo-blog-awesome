---
title: Markdownの文法について
date: 2023-02-11
author: Hugo Authors
description: この投稿では、基本的なマークダウンの文法と、HTML要素の整形について説明しています。
isStarred: true
---

この投稿ではHugoのコンテンツファイルでご利用いただける基本的なマークダウンの文法の説明と、HugoのテーマによってCSSで整形される一部のHTML要素についてご説明いたします。

<!--more-->

## 見出し

以下に示す`<h1> - <h6>` までのHTML要素は6段階のセクション見出しを意味しています。`<h1>`が一番大きな見出しで、`<h6>`が一番小さな見出しです。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## 画像

以下の文法を利用することで画像を添付することが可能です。パスは`index.md`ファイルからの相対で表記することをお勧めします。

```markdown
![Landscape](1.jpg)
```

![Landscape](1.jpg)

また、外部のリソースから画像を読み込むことも可能です。

```markdown
![Image](https://source.unsplash.com/random/600x400/?tech)
```

![Image](https://source.unsplash.com/random/600x400/?tech)

## 引用

blockquote要素は他から引用してきたコンテンツについて言及していることを示します。`footer`あるいは`cite`要素を利用して出典を示すこともできます。また、文章内で注記や略称について変更することもできます。

### 注記のないblockquote

> blockquote内で**bold**,  _italics_, [links](https://gohugo.io/), `code`のようなMarkdown文法を利用することもできます。

### 注記のあるblockquote

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上記は2015年11月18日にGopherfestでRob Pike氏が[発言した内容](https://www.youtube.com/watch?v=PAAkCSZUG1c)から引用しています。

## テーブル

テーブルはMarkdownのコアスペックにはありませんが、Hugoは標準でサポートしています。

   Name | Age
--------|------
   Bob  | 27
 Alice  | 23

### テーブルの中でMarkdownを利用する

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## コードブロック

### バックティックでコードを表記する

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

### 4文字スペースでインデントしたコードブロック

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

### Hugoの内部ハイライトショートコードを利用したコードブロック

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

### インラインコード

バックティックを利用することで`variable`を表現することができます。

## リストタイプ

### 順番のあるリスト

1. First item
2. Second item with some `code` in it
3. Third item

### 順番のないリスト

* List item
* Another item with some `code` in it
* And another item

### 入れ子リスト

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## そのほかの要素 — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr>はビットマップの画像形式です。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd>を押してセッションを終了してください。

ほとんどの<mark>サラマンダー</mark>は夜行性で、昆虫や蠕虫、そのほかの小動物を捕食します。
