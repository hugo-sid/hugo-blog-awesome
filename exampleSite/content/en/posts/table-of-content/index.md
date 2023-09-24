---
title: Table of content
date: 2023-05-02
description: Setup table of content in Hugo blog awesome theme
---

## Table of content

This theme supports displaying table of content (ToC) in blog posts.

## Enable table of content on all posts

To enable ToC on all posts (globally) set parameter `toc` to `true` in `config.toml`.

```toml
[params]
  toc = true
```

To disable ToC globally, simply ignore the `toc` parameter or set it to `false`.
 
## Disable table of content on certain posts

To disable ToC on certain posts, you have to follow two steps.

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
