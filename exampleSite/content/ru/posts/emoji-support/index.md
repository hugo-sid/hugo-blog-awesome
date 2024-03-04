---
title: Поддержка смайликов
date: 2023-02-01
author: Hugo Authors
description: Инструкция для использования смайликов в Hugo
tags:
  - emoji
---

Смайлики могут быть задействован в проекте Hugo несколькими способами.
<!--more-->
[`emojify`](https://gohugo.io/functions/emojify/) функция может быть напрямую вызвана в шаблоне или [встроенный короткий код](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes). 

Для включения смайликов на весь проект, установите значение `enableEmoji = true` в файле `hugo.toml` вашего сайта. Вы можете набрать смайлик shorthand codes непосредственно в файле с содержимым; К примеру, 

`:see_no_evil:` :see_no_evil: `:hear_no_evil:` :hear_no_evil: `:speak_no_evil:` :speak_no_evil:

Я :heart: Hugo! 😁

[Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) полезное руководство по коротким кодам для смайликов.

***

**Заметка** Следующие шаги включат стандартные Unicode символы смайликов и последовательно в Hugo, однако отрисовка этих глифов зависит от браузера и платформы. Для добавления стиля к смайликам Вы можете использовать сторонние шрифты или наборы шрифтов; К примеру:

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
