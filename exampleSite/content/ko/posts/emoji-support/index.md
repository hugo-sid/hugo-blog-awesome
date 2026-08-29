---
title: 이모지 지원
date: 2023-02-01
author: Hugo Authors
description: Hugo에서 이모지를 사용하기 위한 가이드
tags:
  - emoji
---

이모지는 Hugo 프로젝트에서 여러 방법으로 활성화될 수 있습니다.
<!--more-->
[`emojify`](https://gohugo.io/functions/emojify/) 함수는 템플릿 또는 [인라인 숏코드](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes)에서 사용할 수 있습니다.

이모지를 전역적으로 활성화하려면, `hugo.toml`에서 `enableEmoji`를 `true`로 설정하세요. 컨텐츠 파일에서 이모지 숏코드를 사용할 수 있습니다; 예를 들어,

`:see_no_evil:` :see_no_evil: `:hear_no_evil:` :hear_no_evil: `:speak_no_evil:` :speak_no_evil:

I :heart: Hugo! 😁

[Emoji cheat sheet](http://www.emoji-cheat-sheet.com/)는 이모지 숏코드를 확인하기 좋은 유용한 참고 자료입니다.

***

**참고:** 위 방법는 Hugo에 유니코드 표준 이모지 문자와 조합을 활성화합니다. 하지만 이 글자의 렌더링은 브라우저와 플랫폼에 의존합니다. 이모지를 꾸미기 위해서 제 3자 폰트나 폰트 스택을 사용할 수 있습니다; 예를 들어,

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
