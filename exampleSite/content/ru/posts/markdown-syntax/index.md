---
title: Инструкция по использованию Markdown
date: 2023-02-11
author: Hugo Authors
description: Пример статьи, демонстрирующей базовый синтаксис Markdown и форматирование элементов HTML.
---

В этой статье предлагается образец базового синтаксиса Markdown, который можно использовать в файлах контента Hugo, а также показано как расширенна разметка базовые элементы HTML CSS в теме Hugo.
<!--more-->

## Headings

Следующий HTML `<h1>`—`<h6>` элементы показывают шесть уровней заголовков разделов. От самого большого уровня `<h1>` до самого малого `<h6>`.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Параграф

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Изображение

Вы можете использовать следующий синтаксис для добавления изображения. Путь до изображения должна быть относителен к файлу `index.md`.

```markdown
![Landscape](1.jpg)
```

![Landscape](1.jpg)

Вы так же можете использовать изображение из внешних источников.

```markdown
![Image](https://source.unsplash.com/random/600x400/?tech)
```

![Image](https://source.unsplash.com/random/600x400/?tech)

## Blockquote

Blockquote может подсветить контент который был процитирован из других источников. Опционально, необязательно с цитатой, которая должна находиться в пределах `footer` или `cite` элементов, и опционально, со встроенными изменениями, такими как аннотации и сокращения.

### Blockquote без атрибутов

> Вы можете использовать синтаксис Markdown совместно с blockquote, к примеру, **bold**,  _italics_, [links](https://gohugo.io/), `code`.

### Blockquote с атрибутов

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: Приведенная выше цитата взята из выступления Роба Пайка [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) на Gopherfest, 18 ноября 2015.

## Таблицы

Таблицы не часть основных спецификаций Markdown. Но Hugo поддерживает их из коробки.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

### Markdown в таблицах

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Блок кода

### Блок кода с обратными кавычками

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

### Блок кода с отступом в четыре пробела

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

### Блок кода с коротким кодом внутренней подсветки Hugo

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

### Встроенный код

Используйте обратные кавычки для отсылки к `variable` в пределах предложения.

## Списки

### Упорядоченный список

1. First item
2. Second item
3. Third item

### Неупорядоченный список

* List item
* Another item
* And another item

### Вложенные списки

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Остальные элементы — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> bitmap формат изображений.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Нажмите <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> для завершения сессии.

Большинство <mark>саламандр</mark> ведут ночной образ жизни и охотятся на насекомых, червей и других мелких существ.
