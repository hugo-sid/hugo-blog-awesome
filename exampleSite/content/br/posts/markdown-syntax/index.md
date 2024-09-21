---
title: Guia de Sintaxe de Markdown
date: 2023-02-11
author: Nome do autor
description: Exemplo de artigo demonstrando a sintaxe básica do Markdown e a formatação para elementos HTML.
isStarred: true
---

Este artigo fornece um exemplo da sintaxe básica de Markdown que pode ser usada em arquivos de conteúdo do Hugo e também mostra se os elementos básicos de HTML são decorados com CSS em um tema do Hugo.
<!--more-->

## Títulos

Os seguintes elementos HTML `<h1>`—`<h6>` representam seis níveis de cabeçalhos de seção. `<h1>` é o nível mais alto de seção, enquanto `<h6>` é o mais baixo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Parágrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Image

Você pode usar a seguinte sintaxe para incluir uma imagem. O caminho da imagem deve ser relativo ao arquivo `index.md`.

```markdown
![Landscape](1.jpg)
```

![Landscape](1.jpg)

Você também pode incluir uma imagem de uma fonte externa.

```markdown
![Image](https://source.unsplash.com/random/600x400/?tech)
```

![Image](https://source.unsplash.com/random/600x400/?tech)

## Citações em Bloco

O elemento de citação em bloco representa conteúdo que é citado de outra fonte, opcionalmente com uma citação que deve estar dentro de um elemento `footer` ou `cite`, e, opcionalmente, com alterações em linha, como anotações e abreviações.

### Citações em Bloco sem atribuições

> Você pode usar a sintaxe Markdown dentro de uma citação em bloco, como: **bold**,  _italics_, [links](https://gohugo.io/), `code`.

### Citações em Bloco com atribuições

> Não comunique compartilhando memória; compartilhe memória comunicando.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: A citação acima é um trecho de Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) durante a festa Gopher, November 18, 2015.

## Tables

Tabelas não fazem parte da especificação principal do Markdown, mas o Hugo as suporta nativamente.

   Nome | Idade
--------|------
    Bob | 27
  Alice | 23

### Markdown dentro de tabelas

| Itálico   | Negrito  | Código |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Blocos de Código

### Blocos de Código com crase

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Teste</p>
</body>
</html>
```

### Blocos de Código identado com quatro espaço

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Teste</p>
    </body>
    </html>

### Bloco de código com o shortcode de destaque interno do Hugo

{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Teste</p>
</body>
</html>
{{< /highlight >}}

### Código em Linha

Use a crase para se referir a uma `variável` dentro de uma frase.

## Tipos de Lista

### Lista Ordenada

1. Primeiro Item
2. Segundo Item com algum `codigo` dentro
3. Terceiro Item

### Lista não Ordenada

* Item delista
* Outro Item com algum `codigo` dentro
* E outro Item

### Lista em cascata

* Frutas
  * Maça
  * Laranja
  * Banana
* Laticínios
  * Leite
  * Queijo

## Outros Elementos — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> é um arquivo de formato bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Pressione <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> para terminar uma sessão.

A maioria das <mark>salamandras<mark> é noturna e caça insetos, vermes e outras pequenas criaturas.
