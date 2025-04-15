---
title: 絵文字のサポート
date: 2023-02-01
author: Hugo Authors
description: Hugoの中で絵文字を使う方法について
tags:
    - emoji
---

Hugoの中で絵文字を有効化する方法はいくつかあります。

<!--more-->

[`emojify`](https://gohugo.io/functions/emojify/)関数をテンプレートから直接呼び出すか、[インラインショートコード](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes)から呼び出すこともできます。

サイト全体で絵文字を利用したい場合、`hugo.toml`内にある`enableEmoji`の値を`true`に変更してください。その後は絵文字のショートハンドコードをコンテンツファイルの中で直接ご利用いただけます。例えば以下のように:

`:see_no_evil:` :see_no_evil: `:hear_no_evil:` :hear_no_evil: `:speak_no_evil:` :speak_no_evil:

I :heart: Hugo! 😁

[絵文字チートシート](http://www.emoji-cheat-sheet.com/)は絵文字のショートハンドコードを確認するのに便利なツールです。

---

**注意: ** 上記で示した手順はUnicode標準の絵文字およびシーケンスを有効にしますが、その文字はブラウザやプラットフォームにより、表示が異なる可能性があります。もし表示を統一したい場合、サードパーティー製の絵文字フォントを利用するか、あるいはサードパーティー製のフォントスタックを利用することもできます。例えば以下のようなCSSを書くことになります:

{{< highlight css >}}
.emoji {
font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
{{< /highlight >}}

{{< css.inline >}}

<style>
.emojify {
  font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
  font-size: 2rem;
  vertical-align: middle;
}
@media screen and (max-width:650px) {
  .nowrap {
    display: block;
    margin: 25px 0;
  }
}
</style>

{{< /css.inline >}}
