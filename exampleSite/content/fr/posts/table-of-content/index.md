---
title: Les Sommaires
date: 2023-05-02
description:  Configuration de la table des matières dans le thème awesome de Hugo
---

## Sommaire

Ce thème prend en charge l'affichage d'un sommaire (Table of Contents - ToC) au sein des articles.

## Activer le sommaire dans tous les articles

Pour activer le sommaire dans tous les articles (globalement), il est nécessaire de définir le paramètre  `toc` a `true` dans `hugo.toml`.

```toml
[params]
  toc = true
```

Pour désactiver le sommaire globalement, il suffit de supprimer le paramètre `toc` ou de le définir `false`.
 
## Désactiver le sommaire uniquement dans certains articles

Pour désactiver le sommaire seulement dans certains articles sélectionnés, il faut suivre ces deux étapes.

1.  Définisser le paramètre `toc` a `true` dans `hugo.toml`.

    ```toml
    [params]
      toc = true
    ```

2.  Ajouter `toc = false`  dans le front matter de l'article où vous souhaitez désactiver le sommaire.

    ```yaml
    ---
    title: Comment activer le sommaire
    date: 2023-05-02
    toc: false
    ---
    ```
