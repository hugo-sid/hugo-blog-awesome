---
title: 目次
date: 2023-05-02
description: Hugo blog awesomeテーマの中で目次を設定しましょう
---

## 目次

ものテーマは目次(ToC)の表示に対応しています。

## 引数

以下の2つの引数で目次を管理できます:

- グローバル `toc` 引数；
- 投稿の `toc` 引数。

投稿の`toc`はグローバルの`toc`より優先されます。

## 目次をすべての投稿で有効にする

目次をすべての投稿(グローバル)で有効にするには、`hugo.toml`内の`toc`引数を`true`に設定してください。

```toml
[params]
  toc = true
```

すべての投稿で目次を使用したくない場合、`toc`引数を記述しないか`false`に設定してください。

## 特定投稿で目次を有効にする

目次を特定の投稿でのみ有効にする場合、投稿設定で`toc`引数に`true`を設定してください。

```yaml
---
title: 目次を有効にする方法
date: 2023-05-02
toc: true
---
```

## 特定の投稿で目次を無効にする

特定の投稿でのみ目次を無効にする場合、2段階を経る必要があります。

注意: 投稿内にある`.Params.toc`は`.Site.Params.toc`を上書きします。以下の手順を経ると、その投稿内の`toc`引数は`false`になります。

1. `hugo.toml`内の`toc`引数を`true`に設定してください。

    ```toml
    [params]
      toc = true
    ```

2. `toc = false`を目次を無効にしたい投稿内のfront matterに追加してください。

    ```yaml
    ---
    title: 目次を有効にする方法
    date: 2023-05-02
    toc: false
    ---
    ```

## 目次を開いておく方法

既定の設定では、目次は閉じられた状態で表示されます。開いた状態で表示したい場合、`hugo.toml`内の`tocOpen`引数を`true`に設定してください。

```toml
[params]
  tocOpen = true
```

あるいは、投稿内のfront matterに`tocOpen`引数を追加することもできます。

```yaml
---
title: 目次を有効にする方法
date: 2023-05-02
tocOpen: true
---
```
