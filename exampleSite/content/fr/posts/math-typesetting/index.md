---
author: Hugo Authors
title: Mise en Page des Formules Mathématiques
date: 2023-04-01
description: Un guide rapide pour configurer KaTeX
math: true
---

La notation mathématique dans un projet Hugo peut être activée en utilisant des
[bibliothèques JavaScript tierces](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/layouts/partials/helpers/katex.html).

<!--more-->

Dans cet exemple, nous utiliserons [KaTeX](https://katex.org/).

- Pour activer KaTeX au niveau global, réglez le paramètre `math` sur `true` dans la configuration d'un projet comme suit.

  - `hugo.toml`
    ```toml
    [params]
      math = true
    ```
  - `hugo.yaml`
    ```yaml
    params:
      math: true
    ```
- Pour activer KaTeX uniquement dans certaines pages, incluez le paramètre `math: true` dans
  le Front Matter du fichier markdown comme suit.

  ```
  ---
  math: true
  ---
  ```

**Remarque :** Le guide de référence en ligne
[Supported TeX Functions](https://katex.org/docs/supported.html) est une ressource utile.

### Exemples

- Bloc math :

$$
\varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$

- Math en une ligne :

Voici un polynôme en une ligne : $5x^2 + 2y -7$.