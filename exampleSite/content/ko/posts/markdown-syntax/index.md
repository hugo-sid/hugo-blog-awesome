---
title: 마크다운 문법 가이드
date: 2023-02-11
author: Hugo Authors
description: 기본 마크다운 문법과 HTML 요소를 위한 형식을 시연하는 예제 포스트입니다.
isStarred: true
---

이 포스트는 Hugo 컨텐츠 파일에 이용될 수 있는 기본 마크다운 문법의 예제를 제공하고, 또한 Hugo 테마의 CSS로 꾸며진 기본적인 HTML 요소를 시연합니다.
<!--more-->

## 문단 제목

다음과 같은 HTML 코드`<h1>`—`<h6>`는 여섯 단계의 문단을 나타냅니다. `<h1>`는 최상위 문단이고 반면 `<h6>`는 최하위 문단입니다..

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 문단

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Image

다음과 같은 문법으로 이미지를 삽입할 수 있습니다. 이미지 파일의 경로는 `index.md` 파일의 상대경로여야 합니다.

```markdown
![Landscape](1.jpg)
```

![Landscape](1.jpg)

또한 외부 제공자에서 이미지를 삽입할 수 있습니다.

```markdown
![Image](https://source.unsplash.com/random/600x400/?tech)
```

![Image](https://source.unsplash.com/random/600x400/?tech)

## 인용

인용 요소는 다른 소스에서 인용된 컨텐츠를 나타냅니다.

### 저작자 표시가 없는 인용

> 인용 안에서 마크다운 문법을 사용할 수 있습니다, **굵게**,  _기울임꼴_, [링크](https://gohugo.io/), `코드`처럼요.

### 저작자 표시가 있는 인용

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 위의 인용문은 2015년 11월 18일 Gopherfest에서 롭 파이크가 진행한 [강연](https://www.youtube.com/watch?v=PAAkCSZUG1c)에서 발췌한 것입니다.

## 표

표는 마크다운 사양에 포함되지 않지만, Hugo는 표를 즉시 사용할 수 있게 지원합니다.

   이름 | 나이
--------|------
    Bob | 27
  Alice | 23

### 표 안의 마크다운
| 기울임꼴   | 굵게     | 코드   |
| --------  | -------- | ------ |
| *기울임꼴* | **굵게** | `코드` |

## 코드 블록

### 역따옴표를 이용한 코드 블록

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

### 띄어쓰기 네 칸으로 들여쓴 코드 블록

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

### Hugo 내장 하이라이트 숏코드를 이용한 코드 블록

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

### 인라인 코드

`변수`를 문장 안에서 참조하기 위해 역따옴표를 사용하세요.

## 리스트 종류

### 순서있는 리스트

1. 첫번째 요소
2. `코드`가 들어있는 두번째 요소
3. 세번쨰 요소

### 순서없는 리스트

* 리스트 요소
* `코드`가 들어있는 요소
* 그리고 또다른 요소

### 중첩된 리스트

* 과일
  * 사과
  * 오렌지
  * 바나나
* 유제품
  * 우유
  * 치즈

## 그 밖의 요소 — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr>는 비트맵 이미지 형식입니다.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd>를 눌러 세션을 종료하세요.

대부분의 <mark>도롱뇽</mark>은 야행성으로, 곤충, 지렁이 및 기타 작은 생물들을 사냥합니다.