---
author: Autor
title: Notação Matemática - use a notação matemática em postagens de blog.
date: 2023-04-01
description: Um breve guia para configurar o KaTeX.
math: true
---

A notação matemática em um projeto Hugo pode ser habilitada usando
[bibliotecas JavaScript de terceiros](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/layouts/partials/helpers/katex.html).

<!--more-->

Neste exemplo usaremos [KaTeX](https://katex.org/).

- Para habilitar o KaTeX globalmente, defina o parâmetro `math` como `true` no arquivo de configuração do projeto da seguinte forma.
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
- Para habilitar o KaTeX em uma base por página, inclua o parâmetro `math: true` no Front Matter do arquivo de conteúdo Markdown da seguinte forma.

  ```
  ---
  math: true
  ---
  ```

**Note:** A referencia online das
[funções suportadas TeXs](https://katex.org/docs/supported.html) é um recurso valioso.

### Exemplos

- Bloco Matemático:

  $$
  \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
  $$

- Matemática em linha:

  Este é um polinômio em linha:: $5x^2 + 2y -7$.
