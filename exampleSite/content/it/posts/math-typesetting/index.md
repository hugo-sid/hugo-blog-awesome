---
author: Hugo Authors
title: Impaginazione Delle Formule Matematiche
date: 2023-04-01
description: A brief guide to setup KaTeX
math: true
---

La notazione matematica in un progetto Hugo può essere abilitata utilizzando delle
[librerie JavaScript di terze parti](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/layouts/partials/helpers/katex.html).

<!--more-->

In questo esempio utilizzeremo [KaTeX](https://katex.org/).

- Per abilitare KaTeX a livello globale, impostate il parametro `math` a `true` nella configurazione di un progretto come segue.

  - `config.toml`
    ```toml
    [params]
      math = true
    ```
  - `config.yaml`
    ```yaml
    params:
      math: true
    ```
- Per abilitare KaTeX solamente in alcune pagine, includete il parametro `math: true` nel
  Front Matter del file markdown come segue.

  ```
  ---
  math: true
  ---
  ```

**Nota:** La guida di riferimento online
[Supported TeX Functions](https://katex.org/docs/supported.html) è un'utile risorsa di informazioni.

### Esempi

- Blocco matematico:

  $$
  \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
  $$

- Matematica inline:

  Questo è un polinomiale inline: $5x^2 + 2y -7$.
