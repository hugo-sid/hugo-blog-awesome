---
author: Hugo Authors
title: Текст с математическими символами
date: 2023-04-01
description: Краткое руководство по настройке KaTeX
math: true
---

Математические обозначения в проекте Hugo можно включить с помощью
[сторонние библиотеки JavaScript](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/layouts/partials/helpers/katex.html).

<!--more-->

В этом примере, мы будем использовать [KaTeX](https://katex.org/).

- Для включения KaTeX глобально, установите параметр `math` в `true` в конфигурационный файл проекта в формате, который вы используете.
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
- Для включения KaTeX для каждой страницы, добавьте параметр `math: true` в
  Markdown настройки файла с контентом как показано.

  ```
  ---
  math: true
  ---
  ```

**Заметка:** Онлайн заметка
[Supported TeX Functions](https://katex.org/docs/supported.html) полезный ресурс.

### Пример

- Блок с математикой:

  $$
  \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
  $$

- Встроенная математика:

 Это полином: $5x^2 + 2y -7$.
