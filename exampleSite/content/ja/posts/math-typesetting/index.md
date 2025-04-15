---
author: Hugo Authors
title: 数式の組版 - ブログ投稿内で数式を表記する方法
date: 2023-04-01
description: KaTeXの簡単なセットアップ方法
math: true
---

Hugoでは[サードパーティーJavaScriptライブラリ](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/layouts/partials/helpers/katex.html)を利用することで数式を表記することができます。

<!--more-->

ここでは、[KaTeX](https://katex.org/)を利用して説明します。

- サイト全体でKaTeXを利用する場合、以下に示す通り、`math`引数を`true`に設定してください。
  - `hugo.toml`
    ```toml
    [params]
      math = true
    ```
  - `hugo.yaml`
    ```yaml
    params:
      math: true
    ```
- ページごとにKaTeXを有効にしたい場合、以下に示す通り`math: true`をMarkdownのFront Matterに追加してください。

  ```
  ---
  math: true
  ---
  ```

**注意:** [サポートされているTeX関数](https://katex.org/docs/supported.html)のオンラインリファレンスが参考になります。

### 例

- ブロック数式:

  $$
  \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
  $$

- インライン数式：

  これはインラインで示す多項式です: $5x^2 + 2y -7$。
