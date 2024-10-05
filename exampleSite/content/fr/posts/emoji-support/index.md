---
title: Support Emoji
date: 2023-02-01
author: Hugo Authors
description: Guide sur l'utilisation des emoji dans Hugo
tags:
  - emoji
---

Les emoji peuvent être activées dans un projet Hugo de différentes manières.
<!--more-->
La fonction [`emojify`](https://gohugo.io/functions/emojify/) peut être appelée directement dans les modèles ou dans les[Shortcodes Inline](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes). 

Pour activer les emoji globalement, réglez `enableEmoji` à `true` dans le fichier `hugo.toml` de votre site. Vous pouvez taper manuellement les raccourcis pour les emoji directement dans les fichiers de contenu ; ex.

`:see_no_evil:` :see_no_evil: `:hear_no_evil:` :hear_no_evil: `:speak_no_evil:` :speak_no_evil:

Moi :heart: Hugo! 😁

La [cheat sheet Emoji](http://www.emoji-cheat-sheet.com/) est un document de référence utile pour les codes de raccourci des emoji.

***

**N.B.** Les étapes mentionnées ci-dessus activent les séquences et les emoji Unicode standard dans Hugo, cependant la façon dont ces glyphes sont affichés dépend du navigateur et de la plateforme. Pour appliquer votre style personnel aux emoji, vous pouvez choisir d'utiliser une police tierce pour les emoji ou une pile de polices ; exemple.

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
