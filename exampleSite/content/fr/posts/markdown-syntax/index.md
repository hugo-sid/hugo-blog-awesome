---
title: Guide de la Syntaxe Markdown
date: 2023-02-11
author: Hugo Authors
description: Exemple d'article présentant la syntaxe de base de Markdown et le formatage des éléments HTML.
---

Cet article propose un exemple de syntaxe Markdown de base pouvant être utilisée dans les fichiers de contenu Hugo, et montre également si les éléments HTML de base sont décorés avec du CSS dans un thème Hugo.
<!--more-->

## Titres

Les éléments HTML `<h1>` à `<h6>` suivants représentent six niveaux de titres de sections. `<h1>` est le niveau de section le plus élevé, tandis que `<h6>` est le plus bas.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraphe

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Image

Vous pouvez utiliser la syntaxe suivante pour inclure une image. Le chemin de l'image doit être relatif au fichier `index.md`.

```markdown
![Paysage](1.jpg)

```

![Paysage](1.jpg)

Vous pouvez également inclure des images provenant de sources externes.

```markdown
![Image](https://source.unsplash.com/random/600x400/?tech)
```

![Image](https://source.unsplash.com/random/600x400/?tech)

## Citations

L'élément de citation représente un contenu cité d'une autre source, éventuellement avec une attribution qui doit être dans un élément `footer` ou `cite`, et éventuellement avec des modifications en ligne telles que des annotations et des abréviations.


### Citation sans attribution

> Vous pouvez utiliser la syntaxe Markdown dans une citation, comme **gras**, _italique_, [liens](https://gohugo.io/) ou `code`.

### Citation avec attribution

> Ne communiquez pas en partageant de la mémoire, partagez la mémoire en communiquant.<br> 
> — <cite>Rob Pike[^1]</cite>


[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.
[^1]: La citation ci-dessus est extraite du [discours](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durant Gopherfest, le 18 novembre 2015.

## Tableaux

Les tableaux ne font pas partie de la spécification Markdown de base, mais Hugo les prend en charge nativement.


   Nom | Age
--------|------
    Bob | 27
  Alice | 23

### Markdown dans les tableaux

| Italique   | Gras     | Code   |
| --------  | -------- | ------ |
| *Italique* | **Gras** | `code` |

## Blocs de code

### Bloc de code avec des accents graves

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exemple de document HTML5</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Bloc de code indenté avec quatre espaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Exemple de document HTML5</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Bloc de code avec le shortcode interne de mise en évidence d'Hugo

{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exemple de document HTML5</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

### Inline code

Utilisez l'accent grave pour faire référence à une `variable` dans une phrase.

## Types de listes

### Liste ordonnée

1. Premier élément
2. Deuxième élément
3. Troisième élément

### Liste non ordonnée

* Premier élément
* Deuxième élément
* Troisième élément

### Liste imbriquée

* Fruits
  * Pomme
  * Orange
  * Banane
* Produits laitiers
  * Lait
  * Fromage

## Autres éléments — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> est un format d'image bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Appuyez sur <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> pour terminer la session.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent des insectes, des vers et d'autres petites créatures.