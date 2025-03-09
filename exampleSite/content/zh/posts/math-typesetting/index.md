---
author: Hugo Authors
title: 数学排版 - 在博客文章中使用数学符号
date: 2023-04-01
description: KaTeX 设置简要指南
math: true
---

在 Hugo 项目中，可以通过使用 [第三方 JavaScript 库](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/layouts/partials/helpers/katex.html) 来启用数学符号。

<!--more-->

在本示例中，我们将使用 [KaTeX](https://katex.org/)。

- 要全局启用 KaTeX，请在项目的配置文件中将参数 `math` 设置为 `true`，如下所示。
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
- 要在每页基础上启用 KaTeX，请在 Markdown 内容文件的 Front Matter 中包含参数 `math: true`，如下所示。

  ```
  ---
  math: true
  ---
  ```

**注意：** [支持的 TeX 函数](https://katex.org/docs/supported.html) 在线参考是一个有用的资源。

### 示例

- 块级数学公式：

  $$
  \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
  $$

- 行内数学公式：

  这是一个行内多项式：$5x^2 + 2y -7$。
