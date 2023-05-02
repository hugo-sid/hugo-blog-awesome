---
title: How to enable table of content ?
date: 2023-05-02
description: Setup table of content in Hugo blog awesome theme
---

## Table of content

This theme supports displaying table of content in blog posts.

To enable it, globally set `toc` to `true` in `config.toml`:

```toml
[params]
  toc = true
```

This will enable table of content for all posts. If you want to enable it for a specific post, add `toc = true` to the front matter of the post:

```yaml
---
title: How to enable table of content
date: 2023-05-02
toc: true
---
```
