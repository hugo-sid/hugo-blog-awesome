---
title: Tabela de Conteúdo
date: 2023-05-02
description: Configurar a tabela de conteúdo no tema "Awesome" do blog Hugo.
---

## Tabela de Conteúdo

Este tema suporta a exibição de um tabela de conteúdo (ToC) em postagens de blog.

## Parâmetros

Você pode gerenciar o tabela de conteúdo com dois parâmetros:
- parâmetro global `toc`;
- parâmetro de postagem `toc`.

O parâmetro `toc` da postagem tem prioridade mais alta que o parâmetro global `toc`.

## Habilitar a Tabela de Conteúdo em todas as postagens

Para habilitar o tabela de conteúdo (ToC) em todas as postagens (globalmente), defina o parâmetro `toc` como `true` no arquivo `hugo.toml`.

```toml
[params]
  toc = true
```

Para desativar o tabela de conteúdo globalmente, basta ignorar o parâmetro `toc` ou defini-lo como `false`.
 
 ## Habilitar a Tabela de Conteúdo em determinadas postagens

Para habilitar o tabela de conteúdo (ToC) em certas postagens, defina o parâmetro `toc` como `true` nas configurações da postagem.

```yaml
---
title: Como habilitar o tabela de conteúdo
date: 2023-05-02
toc: true
---
```
## Desabilitar o tabela de conteúdo em determinadas postagens

Para desabilitar o tabela de conteúdo (ToC) em certas postagens, você deve seguir dois passos.

Observação: `.Params.toc` na postagem irá sobrescrever `.Site.Params.toc`. Após esses passos, o parâmetro `toc` na postagem será `false`.

1. Defina o parâmetro `toc` como `true` no `hugo.toml`.

    ```toml
    [params]
      toc = true
    ```

2. Adicione `toc = false` à frente da postagem para a qual você deseja desabilitar o tabela de conteúdo.

    ```yaml
    ---
    title: Como habilitar o tabela de conteúdo
    date: 2023-05-02
    toc: false
    ---
    ```

## Abrir o tabela de conteúdo

Por padrão, o tabela de conteúdo (ToC) está fechado. Para abri-lo por padrão, defina o parâmetro `tocOpen` como `true` no arquivo `hugo.toml`.

```toml
[params]
  tocOpen = true
```

Ou simplesmente adicione o parâmetro `tocOpen` à frente da postagem.

```yaml
---
title: Como habilitar o tabela de conteúdo
date: 2023-05-02
tocOpen: true
---
```
