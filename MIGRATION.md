# Migration Guide: Hugo v0.146.0 → v0.160.0

This guide covers the breaking changes and required updates when upgrading Hugo from v0.146.0 to v0.160.0, with specific callouts for users of the **hugo-blog-awesome** theme.

---

## 1. New Template System (v0.146.0)

Hugo v0.146.0 introduced a full re-implementation of the Go template system with a restructured `layouts` folder. While Hugo maps old paths to new ones where possible, custom overrides in your site's own `layouts/` directory will need manual updates.

### Layout folder restructuring

| What changed | Required action |
|---|---|
| `layouts/_default/` folder is removed | Move all files from `layouts/_default/` up to `layouts/` |
| `layouts/partials/` renamed | Rename to `layouts/_partials/` |
| `layouts/shortcodes/` renamed | Rename to `layouts/_shortcodes/` |
| `layouts/taxonomy/` and `layouts/section/` top-level folders removed | Move templates to `layouts/` with the appropriate page kind as the base name (e.g. `section.html`, `taxonomy.html`, `term.html`) |
| `index.html` no longer used for the home page | Rename `layouts/index.html` → `layouts/home.html` |
| Base template naming changed | Rename e.g. `list-baseof.html` → `baseof.list.html` (identifier moves after the first dot) |
| `_internal` templates removed | Replace `{{ template "_internal/opengraph.html" . }}` with `{{ partial "opengraph.html" . }}` |
| `taxonomy.html` now only applies to the `taxonomy` kind | Create separate `term.html` for term pages, or use `list.html` as a catch-all |

### Example: before and after

```
# Before (old structure)
layouts/
├── _default/
│   ├── baseof.html
│   ├── list.html
│   └── single.html
├── partials/
│   └── head.html
└── shortcodes/
    └── youtube.html

# After (new structure)
layouts/
├── baseof.html
├── list.html
├── single.html
├── _partials/
│   └── head.html
└── _shortcodes/
    └── youtube.html
```

> **Note:** If you have not overridden any theme templates in your own `layouts/` folder, no action may be required — the theme itself handles its own layout structure.

---

## 2. Deprecated Site Methods (v0.156.0)

Hugo v0.156.0 deprecated several `.Site.*` methods to better align with the new multidimensional content model (which distinguishes between a *site* — a single language/version/role instance — and the *project* as a whole).

These are currently **deprecation warnings** (not errors). They will be elevated to errors approximately 12 months after v0.156.0.

### Deprecated method replacements

| Deprecated | Replacement | Reason |
|---|---|---|
| `.Site.Data` | `hugo.Data` | Data belongs to the project, not a single site |
| `.Site.Sites` | `hugo.Sites` | Sites belong to the project |
| `.Page.Sites` | `hugo.Sites` | Sites belong to the project, not a page |
| `.Site.AllPages` | `range hugo.Sites` → `range .Pages` | Returns all pages across all languages — use nested range instead |
| `.Site.BuildDrafts` | `page.Draft` | Use page-level draft status instead |
| `.Site.Languages` | See language selector pattern below | Use page-based translations instead |

### Checking for deprecated usage

Run the following to surface any deprecation warnings in your project:

```bash
hugo build --logLevel info
```

### Replacing `.Site.AllPages`

```html
{{ range hugo.Sites }}
  {{ range .Pages }}
    ...
  {{ end }}
{{ end }}
```

### Replacing `.Site.Languages` (language selector)

Use `.Rotate "language"` to iterate over translations of the current page:

```html
{{ with .Rotate "language" }}
  <nav class="language-switcher">
    <ul>
      {{ range . }}
        {{ if eq .Site.Language $.Site.Language }}
          <li class="active">
            <a aria-current="page" href="{{ .Permalink }}">{{ .Site.Language.LanguageName }}</a>
          </li>
        {{ else }}
          <li><a href="{{ .Permalink }}">{{ .Site.Language.LanguageName }}</a></li>
        {{ end }}
      {{ end }}
    </ul>
  </nav>
{{ end }}
```

If you need a project-wide language list (including languages where no translation exists for the current page), range over `hugo.Sites` instead:

```html
{{ range hugo.Sites }}
  <a href="{{ .Home.Permalink }}">{{ .Language.LanguageName }}</a>
{{ end }}
```

For the `hreflang x-default` pattern, use `.Language.IsDefault` rather than `(index .Site.Languages 0).Lang`:

```html
{{ if .IsTranslated }}
  {{ range .AllTranslations }}
    <link rel="alternate" hreflang="{{ .Language.Lang }}" href="{{ .Permalink }}">
    {{ if .Language.IsDefault }}
      <link rel="alternate" hreflang="x-default" href="{{ .Permalink }}">
    {{ end }}
  {{ end }}
{{ end }}
```

---

## 3. RSS Template Updates

The `layouts/_default/rss.xml` template (or your override) must replace `.Site.Author.*` references with `site.Params.Author.*` and `.Site.Copyright` with `site.Params.Copyright`.

### Before

```xml
<language>{{ site.Language.LanguageCode }}</language>
{{ with .Site.Author.email }}
<managingEditor>{{.}}{{ with $.Site.Author.name }} ({{.}}){{ end }}</managingEditor>
{{ end }}
{{ with .Site.Author.email }}
<webMaster>{{.}}{{ with $.Site.Author.name }} ({{.}}){{ end }}</webMaster>
{{ end }}
{{ with .Site.Copyright }}<copyright>{{.}}</copyright>{{ end }}
```

### After

```xml
<language>{{ site.Language.LanguageCode }}</language>
{{ with site.Params.Author.email }}
<managingEditor>{{.}}{{ with site.Params.Author.name }} ({{.}}){{ end }}</managingEditor>
{{ end }}
{{ with site.Params.Author.email }}
<webMaster>{{.}}{{ with site.Params.Author.name }} ({{.}}){{ end }}</webMaster>
{{ end }}
{{ with site.Params.Copyright }}<copyright>{{.}}</copyright>{{ end }}
```

Per-item author fields follow the same pattern:

```xml
<!-- Before -->
{{ with .Site.Author.email }}<author>{{.}}{{ with $.Site.Author.name }} ({{.}}){{ end }}</author>{{ end }}

<!-- After -->
{{ with site.Params.Author.email }}<author>{{.}}{{ with site.Params.Author.name }} ({{.}}){{ end }}</author>{{ end }}
```

---

## 4. Shortcode: `twitter_simple` → `x`

The built-in `twitter_simple` shortcode has been removed. Replace all usages with the `x` shortcode. The parameters are identical.

```markdown
<!-- Before -->
{{< twitter_simple user="DesignReviewed" id="1085870671291310081" >}}

<!-- After -->
{{< x user="DesignReviewed" id="1085870671291310081" >}}
```

This applies to any content files across all language directories (e.g. `content/en/`, `content/de/`, `content/fr/`, etc.).

---

## 5. Build Environment Updates (Netlify)

If deploying on Netlify, update your `netlify.toml` build environment versions:

```toml
# Before
[build.environment]
HUGO_VERSION = "0.123.8"
GO_VERSION = "1.22.1"
NODE_VERSION = "20"

# After
[build.environment]
HUGO_VERSION = "0.162.1"
GO_VERSION = "1.26.3"
NODE_VERSION = "22"
```

---

## Summary checklist

- [ ] Restructure `layouts/` folder: rename `_default` → root, `partials` → `_partials`, `shortcodes` → `_shortcodes`
- [ ] Rename `layouts/index.html` → `layouts/home.html` if it exists
- [ ] Replace `{{ template "_internal/..." . }}` with `{{ partial "..." . }}`
- [ ] Replace `.Site.Author.*` with `site.Params.Author.*` in RSS template
- [ ] Replace `.Site.Copyright` with `site.Params.Copyright` in RSS template
- [ ] Replace `{{< twitter_simple >}}` shortcode with `{{< x >}}` in all content files
- [ ] Replace deprecated `.Site.Data`, `.Site.Sites`, `.Site.AllPages`, `.Site.Languages`, `.Site.BuildDrafts` in any custom templates
- [ ] Run `hugo build --logLevel info` and resolve any remaining deprecation warnings
- [ ] Update `netlify.toml` Hugo/Go/Node versions if using Netlify

---

## References

- [Hugo v0.146.0 new template system overview](https://gohugo.io/templates/new-templatesystem-overview/)
- [Hugo v0.156.0 deprecations — Hugo Discourse](https://discourse.gohugo.io/t/deprecations-in-v0-156-0/56732)
- [hugo-blog-awesome PR #344 — fix removed Hugo methods](https://github.com/hugo-sid/hugo-blog-awesome/pull/344)
