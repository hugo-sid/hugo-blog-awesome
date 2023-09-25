---
title: Supporto Alle Emoji
date: 2023-02-01
author: Hugo Authors
description: Guide to emoji usage in Hugo
tags:
  - emoji
---

Le emoji possono essere abilitate in un progetto Hugo in diversi modi.
<!--more-->
La funzione [`emojify`](https://gohugo.io/functions/emojify/) può essere richiamata direttamente nei modelli oppure negli [Shortcodes Inline](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes). 

Per abilitare le emoji globalmente, impostate `enableEmoji` a `true` nel file `config.toml` del vostro sito. Potete digitare a mano le scorciatoie per le emoji direttamente nei file di contenuto; es.

`:see_no_evil:` :see_no_evil: `:hear_no_evil:` :hear_no_evil: `:speak_no_evil:` :speak_no_evil:

Io :heart: Hugo! 😁

La [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) è un utile documento di riferimento per le codici di scorciatoia alle emoji.

***

**N.B.** I passi sopra menzionati abilitano gli emoji standard Unicode e le sequenze in Hugo, tuttavia il modo in cui questi glifi vengono rappresentati dipende dal browser e dalla piattaforma. Per applicare il vostro stile personale alle emoji potete a scelta utilizzare un font di terze parti per Emoji oppure un font stack; es.

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
