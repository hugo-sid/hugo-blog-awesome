---
title: Table of content
date: 2023-05-02
description: Setup table of content in Hugo blog awesome theme
---

## Table of content

This theme supports displaying table of content (ToC) in blog posts.

## Parameters

You can manage a ToC with two parameters:
- global `toc` parameter;
- post `toc` parameter.

The post `toc` parameter has higher priority than the global `toc` parameter.

## Enable table of content on all posts

To enable ToC on all posts (globally) set parameter `toc` to `true` in `config.toml`.

```toml
[params]
  toc = true
```

To disable ToC globally, simply ignore the `toc` parameter or set it to `false`.
 
## Enable table of content on certain posts

To enable ToC on certain posts set parameter `toc` to `true` in post settings.

    ```yaml
    ---
    title: How to enable table of content
    date: 2023-05-02
    toc: true
    ---
    ```

## Disable table of content on certain posts

To disable ToC on certain posts, you have to follow two steps.

Notice: `.Params.toc` in the post will overide `.Site.Params.toc`. After these steps, parameter `toc`  in the post will be `false`.

1.  Set parameter `toc` to `true` in `config.toml`.

    ```toml
    [params]
      toc = true
    ```

2.  Add `toc = false` to the front matter of the post for which you wish to disable ToC.

    ```yaml
    ---
    title: How to enable table of content
    date: 2023-05-02
    toc: false
    ---
    ```

## Open table of content

By default, ToC is closed. To open it by default, set parameter `tocOpen` to `true` in `config.toml`.

```toml
[params]
  tocOpen = true
```

Or simply add the `tocOpen` parameter to the front matter of the post.

```yaml
---
title: How to enable table of content
date: 2023-05-02
tocOpen: true
---
```