---
title: Emoji 支持
date: 2023-02-01
author: Hugo Authors
description: 在 Hugo 中使用 Emoji 的指南
tags:
    - emoji
---

在 Hugo 项目中有多种方式可以启用 Emoji。

<!--more-->

可以在模板中直接调用 [`emojify`](https://gohugo.io/functions/emojify/) 函数，或者使用 [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes)。

要全局启用 Emoji，请在站点的 `hugo.toml` 中将 `enableEmoji` 设置为 `true`。您可以直接在内容文件中输入 Emoji 的简写代码，例如：

`:see_no_evil:` :see_no_evil: `:hear_no_evil:` :hear_no_evil: `:speak_no_evil:` :speak_no_evil:

我 :heart: Hugo! 😁

[Emoji 速查表](http://www.emoji-cheat-sheet.com/) 是一个非常有用的 Emoji 简写代码参考。

---

**注意：** 上述步骤启用了 Hugo 中的 Unicode 标准 Emoji 字符和序列，但这些字符的渲染效果取决于浏览器和平台。要为 Emoji 设置样式，您可以使用第三方 Emoji 字体或字体堆栈，例如：

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
