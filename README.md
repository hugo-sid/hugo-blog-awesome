<div align=center>
 <picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/hugo-sid/hugo-blog-awesome/main/assets/icons/book-icon-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/hugo-sid/hugo-blog-awesome/main/assets/icons/book-icon-light.svg">
  <img alt="Hugo blog awesome logo" src="https://raw.githubusercontent.com/hugo-sid/hugo-blog-awesome/feat/logo-change/assets/icons/book-icon-light.svg" />
</picture>

</div>
<h1 align=center> Hugo Blog Awesome | <a href="https://hba.sid.one" target="_blank" rel="nofollow">Demo link</a></h1>

<h4 align=center>⚡ Fast | 📰 Clean UI | 🌙 Dark mode support | 📱 Responsive design </h4>

## Screenshots

| Dark mode | Light mode |
| --- | --- |
| ![Dark mode](https://raw.githubusercontent.com/hugo-sid/hugo-blog-awesome/master/images/dark.png) | ![Light mode](https://raw.githubusercontent.com/hugo-sid/hugo-blog-awesome/master/images/light.png) |

### Pagespeed score

![Page speed score](https://raw.githubusercontent.com/hugo-sid/hugo-blog-awesome/main/images/image.png)

> [!IMPORTANT]
> This template requires Hugo extended version **v0.160.0 or later**.
> New users can dive right in. If you're coming from an older version, check out the [Migration Guide](/MIGRATION.md) before upgrading.


## Features

- Minimal design
- Light and dark mode
- Syntax highlighting
- RSS feed
- No jQuery, no Bootstrap
- 100/100 Google PageSpeed Insights [score](https://pagespeed.web.dev/analysis/https-hba-sid-one/uh4rm91hnj?form_factor=mobile) on all 4 metrics

## Why this theme?

Hugo Blog Awesome (HBA) is a theme crafted to capture your readers' attention.

Additionally, it's fast, [privacy-conscious](https://themarkup.org/blacklight?url=hba.sid.one), and comes with no external dependencies. That's right. There are no Google fonts, icon packs, or JavaScript frameworks. No trackers or ads to bloat your website.

Its focus on minimalism and clean UI ensures that your content takes the spotlight. This, coupled with the support for dark mode, provides a stress-free (on the eyes) reading experience for your audience.

Built with Hugo, SCSS, and vanilla JavaScript.

## Setup

### Using the theme as Git submodule

To create a new Hugo site with this theme as a Git submodule, run the following command:

```bash
hugo new site myblog
cd myblog
git clone https://github.com/hugo-sid/hugo-blog-awesome.git themes/hugo-blog-awesome
```

To preview the theme with example content, run the following command from the `exampleSite` directory:

```bash
cd themes/hugo-blog-awesome/exampleSite
hugo server --themesDir ../..
```

To use this theme, set the `theme` variable in your site's `hugo.toml`:

```toml
theme = "hugo-blog-awesome"
```

### Using the theme as Hugo module

**Step 1:** Create a new Hugo site

```bash
hugo new site myblog
cd myblog
```

**Step 2:** Initialize your site as a Hugo module

```bash
hugo mod init github.com/USER/REPO
```

Replace `github.com/USER/REPO` with your repository address (or any module path you prefer).

**Step 3:** Add hugo-blog-awesome/v2 as a module dependency

```bash
hugo mod get github.com/hugo-sid/hugo-blog-awesome/v2
```

**Step 4:** Configure the module in your site's `hugo.toml`

Add the following to your `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/hugo-sid/hugo-blog-awesome/v2"
```

**Step 5:** Verify your module dependencies are resolved

```bash
hugo mod tidy
```

You're all set! You can now start creating content. The theme will be automatically included from the module.

**Step 6:** Preview your site

```bash
hugo server
```

Visit `http://localhost:1313` to see your site with the theme applied.


## Configuration

You can take a look at the `hugo.toml` file in the `exampleSite` directory for an example configuration.
It is recommended that you copy the `hugo.toml` file from the `exampleSite` directory to the root directory of your Hugo site. You can then edit the `hugo.toml` file to suit your needs.

### Adding favicon

I used [realfavicongenerator.net](https://realfavicongenerator.net/) to generate the favicons. You can place the resulting files in the `assets\icons` folder. That should get your favicon working.

If you want to customize anything further, you can modify `layouts\_partials\head.html`.

### Adding Social icons

Social icons can be added by configuring `hugo.toml` file in the following manner.

```toml
[[params.socialIcons]]
name = "github"
url = "https://github.com/hugo-sid"

[[params.socialIcons]]
name = "twitter"
url = "https://twitter.com"

[[params.socialIcons]]
name = "Rss"
url = "/index.xml"
```

<details>
  <summary>List of available icons (click to expand)</summary>

| Name            | Platform                        |
| --------------- | ------------------------------- |
| `123rf`         | 123rf.com                       |
| `adobestock`    | stock.adobe.com                 |
| `anilist`       | anilist.co                      |
| `applemusic`    | music.apple.com                 |
| `applepodcasts` | podcasts.apple.com              |
| `behance`       | behance.net                     |
| `bilibili`      | bilibili.com                    |
| `bitcoin`       | -                               |
| `bluesky`       | bsky.app                        |
| `buymeacoffee`  | buymeacoffee.com                |
| `calendly`      | calendly.com                    |
| `codeforces`    | codeforces.com                  |
| codeberg        | codeberg.org                    |
| `codepen`       | codepen.io                      |
| `cryptohack`    | cryptohack.org                  |
| `ctftime`       | ctftime.org                     |
| `cv`            | -                               |
| `deezer`        | deezer.com                      |
| `dev`           | dev.to                          |
| `deviantart`    | deviantart.com                  |
| `discogs`       | discogs.com                     |
| `discord`       | discord.com                     |
| `dreamstime`    | dreamstime.com                  |
| `dribbble`      | dribbble.com                    |
| `douban`        | douban.com                      |
| `email`         | -                               |
| `facebook`      | facebook.com                    |
| `flickr`        | flickr.com                      |
| `forgejo`       | forgejo.org/                    |
| `freepik`       | freepik.com                     |
| `gitea`         | gitea.io                        |
| `github`        | github.com                      |
| `gitlab`        | gitlab.com                      |
| `goodreads`     | goodreads.com                   |
| `googlescholar` | scholar.google.com              |
| `guruShots`     | gurushots.com                   |
| `hackerone`     | hackerone.com                   |
| `hackerrank`    | hackerrank.com                  |
| `hackthebox`    | hackthebox.eu                   |
| `instagram`     | instagram.com                   |
| `itchio`        | itch.io                         |
| `kaggle`        | kaggle.com                      |
| `kakaotalk`     | kakaocorp.com/service/KakaoTalk |
| `key`           | -                               |
| `keybase`       | keybase.io                      |
| `kofi`          | ko-fi.com                       |
| `komoot`        | komoot.com                      |
| `lastfm`        | last.fm                         |
| `leetcode`      | leetcode.com                    |
| `letterboxd`    | letterboxd.com                  |
| `liberapay`     | liberapay.com                   |
| `linkedin`      | linkedin.com                    |
| `mastodon`      | mastodon.social                 |
| `matrix`        | matrix.org                      |
| `medium`        | medium.com                      |
| `microblog`     | micro.blog                      |
| `monero`        | -                               |
| `mixcloud`      | mixcloud.com                    |
| `nuget`         | nuget.org                       |
| `paypal`        | paypal.com                      |
| `peertube`      | -                               |
| `pgp`           | -                               |
| `phone`         | -                               |
| `ploywork`      | ploywork.com                    |
| `qq`            | qq.com                          |
| `radicle`       | radicle.xyz                     |
| `reddit`        | reddit.com                      |
| `researchgate`  | researchgate.net                |
| `rss`           | -                               |
| `serverfault`   | serverfault.com                 |
| `soundcloud`    | soundcloud.com                  |
| `shutterstock`  | shutterstock.com                |
| `signal`        | signal.org                      |
| `slack`         | slack.com                       |
| `snapchat`      | snapchat.com/add                |
| `speakerdeck`   | speakerdeck.com                 |
| `spotify`       | spotify.com                     |
| `stackoverflow` | stackoverflow.com               |
| `stackshare`    | stackshare.io                   |
| `steam`         | steampowered.com                |
| `strava`        | strava.com                      |
| `telegram`      | telegram.org                    |
| `threads`       | threads.net                     |
| `tiktok`        | tiktok.com                      |
| `twitch`        | twitch.tv                       |
| `twitter` (the blue bird logo) | twitter.com      |
| `unsplash`      | unsplash.com                    |
| `x` (formerly Twitter) | x.com                    |
| `xda`           | xda-developers.com              |
| `xing`          | xing.com                        |
| `ycombinator`   | ycombinator.com                 |
| `youtube`       | youtube.com                     |
| `zhihu`         | zhihu.com                       |
| `zulip`         | zulip.com                       |
| `other`         | -                               |

</details>

If you are trying to add an icon that is not listed above, you can modify `layouts\partials\svgs\svgs.html` to include your icon (SVG). You are encouraged to submit your icon by creating a pull request.

### Enable go to top button

To enable go to top button on blog posts, set `goToTop` to `true` in `hugo.toml` file.

```toml
[params]
  goToTop = true
```

### Add custom HTML to `<head>` section

To add custom HTML to the `<head>` section, create a partial named `custom-head.html`.
The contents of this partial will be inserted at the end of the `<head>` section.

## Content

### Posts

To create a new post, run the following command:

    hugo new posts/my-first-post.md

Then, edit the `my-first-post.md` file to suit your needs.

### Comments

To enable Disqus comments, set `services.disqus.shortname` in your site's `hugo.toml`.

To use another comments system, provide your own `comments.html` partial in `layouts\partials\comments.html`.

## Updating the Theme

To keep your Hugo Blog Awesome theme up-to-date, follow the instructions based on your installation method.

### Updating via Hugo Modules

If you installed the theme using Hugo modules, use the steps below to update your theme.

**Step 1:** Update to the latest version

```bash
hugo mod get -u github.com/hugo-sid/hugo-blog-awesome/v2
```

This command fetches the latest version of the theme.

**Step 2:** Tidy up your module dependencies

```bash
hugo mod tidy
```

This ensures your `go.mod` and `go.sum` files are clean and up-to-date.

**Step 3:** Verify the update

```bash
hugo server
```

Run your site locally to confirm everything works with the updated theme.

### Updating via Git Submodule

If you installed the theme as a Git submodule, follow these steps to update.

**Step 1:** Navigate to the theme directory

```bash
cd themes/hugo-blog-awesome
```

**Step 2:** Fetch and merge the latest changes

```bash
git pull origin main
```

This pulls the latest version from the remote repository.

**Step 3:** Navigate back to your site root

```bash
cd ../..
```

**Step 4:** Verify the update

```bash
hugo server
```

Run your site locally to confirm everything works with the updated theme.

### Handling Breaking Changes

When updating between major versions (e.g., v1 to v2), there may be breaking changes. Always check the [Migration Guide](/MIGRATION.md) for instructions before updating.

### Staying Updated

- **Hugo Modules:** New versions are fetched on demand when you run `hugo mod get -u`
- **Git Submodule:** You control when to update by running `git pull`

## Contributing

Please read [CONTRIBUTING.md](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/CONTRIBUTING.md).

## Contributors

Thanks to these wonderful people for contributing to Hugo blog awesome:

<a href="https://github.com/hugo-sid/hugo-blog-awesome/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hugo-sid/hugo-blog-awesome" />
</a>

## Websites using this theme

If you are using this theme for any website, feel free to list the website here. You can submit a pull request (PR) to include your website.

- <https://krisnova.net/>
- <https://paddy-exe.github.io/>
- <https://www.siggijons.net/>
- <https://debanwita27.github.io/>
- <https://mrizkimaulidan.vercel.app/>
- <https://www.yukizr.com/>
- <http://liamdalg.co.uk/>
- <https://codewithzichen.bine.me/>
- <https://chriscodes.net/>
- <https://journeytolunar.com/>
- <https://ruiper.es/>
- <https://josephscottcampbell.com/>
- <https://heckintosh.github.io/>
- <https://dieter.plaetinck.be/>
- <https://www.boniface.me/>
- <https://meanii.dev/>
- <https://unixsec.io/>
- <https://blog.crisweb.com/>
- <https://jonblack.gg/>
- <https://viazure.cc/>
- <https://spikethedragon40k.github.io/>
- <https://tk-web.top>
- <https://xayan.nu/>
- <https://danielecer.com/>
- <https://mabslabs.com/>

## Support

Don't forget to ⭐️ the repo if you liked this theme!

<a href='https://ko-fi.com/sidharth' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Credits

The social icons are made possible thanks to [Aditya Telange](https://github.com/adityatelange)'s [hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

Thanks to [piharpi](https://harpi.me/) for creating the [Jekyll klise theme](https://github.com/piharpi/jekyll-klise). It served as an inspiration to create this Hugo theme.

## License

This theme is released under the MIT license. For more information read the [License](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/LICENSE).

## Stats

### Visitors

[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fhugo-sid%2Fhugo-blog-awesome&countColor=%2337d67a&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fhugo-sid%2Fhugo-blog-awesome)

### Star History

[![Star History Chart](https://api.star-history.com/svg?repos=hugo-sid/hugo-blog-awesome&type=Date)](https://star-history.com/#hugo-sid/hugo-blog-awesome&Date)
