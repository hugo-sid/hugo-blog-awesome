---
title: 目录
date: 2023-05-02
description: 在 Hugo 博客 awesome 主题中设置目录
---

## 目录

本主题支持在博客文章中显示目录（ToC）。

## 参数

您可以通过两个参数管理目录：

- 全局 `toc` 参数；
- 文章的 `toc` 参数。

文章的 `toc` 参数优先级高于全局 `toc` 参数。

## 在所有文章中启用目录

要在所有文章（全局）中启用目录，请在 `hugo.toml` 中将参数 `toc` 设置为 `true`。

```toml
[params]
  toc = true
```

要全局禁用目录，只需忽略 `toc` 参数或将其设置为 `false`。

## 在特定文章中启用目录

要在特定文章中启用目录，请在文章设置中将参数 `toc` 设置为 `true`。

```yaml
---
title: 如何启用目录
date: 2023-05-02
toc: true
---
```

## 在特定文章中禁用目录

要在特定文章中禁用目录，您需要遵循两个步骤。

注意：文章中的 `.Params.toc` 会覆盖 `.Site.Params.toc`。完成这些步骤后，文章中的 `toc` 参数将为 `false`。

1. 在 `hugo.toml` 中将参数 `toc` 设置为 `true`。

    ```toml
    [params]
      toc = true
    ```

2. 在希望禁用目录的文章的 front matter 中添加 `toc = false`。

    ```yaml
    ---
    title: 如何启用目录
    date: 2023-05-02
    toc: false
    ---
    ```

## 默认打开目录

默认情况下，目录是关闭的。要默认打开它，请在 `hugo.toml` 中将参数 `tocOpen` 设置为 `true`。

```toml
[params]
  tocOpen = true
```

或者直接在文章的 front matter 中添加 `tocOpen` 参数。

```yaml
---
title: 如何启用目录
date: 2023-05-02
tocOpen: true
---
```
