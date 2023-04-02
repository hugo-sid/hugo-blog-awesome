---
author: Hugo Authors
title: Math Typesetting
date: 2023-04-01
description: A brief guide to setup KaTeX
math: true
---

Mathematical notation in a Hugo project can be enabled by using
[third party JavaScript libraries](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/layouts/partials/helpers/katex.html).

<!--more-->

In this example we will be using [KaTeX](https://katex.org/).

- To enable KaTeX globally, set the parameter `math` to `true` in a project's
  configuration file as follows.
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
- To enable KaTeX on a per page basis, include the parameter `math: true` in
  Front Matter of Markdown content file as follows.

  ```
  ---
  math: true
  ---
  ```

**Note:** The online reference of
[Supported TeX Functions](https://katex.org/docs/supported.html) is a helpful resource.

### Examples

- Block math:

  $$
  \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
  $$

- Inline math:

  This is an inline polynomial: $5x^2 + 2y -7$.
