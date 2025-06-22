<div align=center>
 <picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/BiosPlus/hugo-blog-extended/main/assets/icons/book-icon-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/BiosPlus/hugo-blog-extended/main/assets/icons/book-icon-light.svg">
  <img alt="Hugo Blog Extended logo" src="https://raw.githubusercontent.com/BiosPlus/hugo-blog-extended/main/assets/icons/book-icon-light.svg" />
</picture>

</div>
<h1 align=center> Hugo Blog Extended | <a href="https://hugo-blog-extended.pages.dev/" target="_blank" rel="nofollow">Demo link</a></h1>

<h4 align=center>⚡ Fast | 📰 Clean UI | 🌙 Dark mode support | 📱 Responsive design </h4>

<div align="center">

[![Hugo](https://img.shields.io/badge/Hugo-FF4088?style=for-the-badge&logo=hugo&logoColor=white)](https://gohugo.io/)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/BiosPlus/hugo-blog-extended?style=for-the-badge)](https://github.com/BiosPlus/hugo-blog-extended/stargazers)

</div>

## 🎯 Quick Start

Get up and running in minutes! Try the theme instantly with our one-liner:

```bash
# Clone and preview in one command
git clone https://github.com/BiosPlus/hugo-blog-extended.git && cd hugo-blog-extended/exampleSite && hugo server --themesDir ../..
```

Then visit `http://localhost:1313` to see the magic! ✨

## Screenshots

| Dark mode | Light mode |
| --- | --- |
| ![Dark mode](https://raw.githubusercontent.com/BiosPlus/hugo-blog-extended/master/images/dark.png) | ![Light mode](https://raw.githubusercontent.com/BiosPlus/hugo-blog-extended/master/images/light.png) |

<details>
  <summary>Page speed score (click to expand)</summary>

![Page speed score](https://raw.githubusercontent.com/BiosPlus/hugo-blog-extended/master/images/pagespeed.png)

The result shown above was last confirmed on September 23, 2023. You can check the details of the PageSpeed test at this link: [Link to the analysis](https://pagespeed.web.dev/analysis/https-hba-sid-one/uh4rm91hnj?form_factor=mobile). You can also do a live [PageSpeed test](https://pagespeed.web.dev/analysis?url=https://hugo-blog-extended.pages.dev/) of the [demo website](https://hugo-blog-extended.pages.dev/) now.

### ⚡ Performance Breakdown

| Metric | Score | Industry Average |
|--------|-------|------------------|
| Performance | 💯 100/100 | 75/100 |
| Accessibility | 💯 100/100 | 82/100 |
| Best Practices | 💯 100/100 | 78/100 |
| SEO | 💯 100/100 | 85/100 |

**Why so fast?**
- 🚀 Zero external dependencies
- 📦 Optimized asset bundling
- 🗜️ Automatic image optimization
- ⚡ Minimal JavaScript footprint

</details>

## Features

- Minimal design
- Light and dark mode
- Syntax highlighting
- RSS feed
- No jQuery, no Bootstrap
- 100/100 Google PageSpeed Insights [score](https://pagespeed.web.dev/analysis/https-hba-sid-one/uh4rm91hnj?form_factor=mobile) on all 4 metrics

## Why this theme?

Hugo Blog Extended (HBE) is an extended version of the popular Hugo Blog Awesome theme, crafted to capture your readers' attention with additional features and improvements.

Additionally, it's fast, privacy-conscious, and comes with no external dependencies. That's right. There are no Google fonts, icon packs, or JavaScript frameworks. No trackers or ads to bloat your website.

Its focus on minimalism and clean UI ensures that your content takes the spotlight. This, coupled with the support for dark mode, provides a stress-free (on the eyes) reading experience for your audience.

Built with Hugo, SCSS, and vanilla JavaScript.

## Setup

> **Note**
> You must have the [Hugo extended version](https://gohugo.io/installation/linux/#editions) installed in order to use this theme. This theme uses Sass for styling. With the Hugo extended version, Sass can be transpiled to CSS without any additional tools.

### Using the theme as Hugo module

First create a new Hugo site by running the following command:

    hugo new site myblog

Initialize your new Hugo site as hugo module by running the following command:

    cd myblog
    hugo mod init github.com/USER/REPO

Afterwards, run this command to add hugo-blog-extended as module to your site:

    hugo mod get github.com/BiosPlus/hugo-blog-extended

To make use of the theme, add this module configuration to your site's `hugo.toml`:

    [module]
      [[module.imports]]
        path = "github.com/BiosPlus/hugo-blog-extended"

To preview the theme with example content, run the following command from the `exampleSite` directory:

    hugo server

### Using the theme as Git submodule

To create a new Hugo site with this theme as Git submodule, run the following command:

    hugo new site myblog

Then, clone this repository into the `themes` directory of your new site:

    cd myblog
    git clone https://github.com/BiosPlus/hugo-blog-extended.git themes/hugo-blog-extended

To preview the theme with example content, run the following command from the `exampleSite` directory:

    cd themes/hugo-blog-extended/exampleSite
    hugo server --themesDir ../..

To use this theme, set the `theme` variable in your site's `hugo.toml` to `hugo-blog-extended`:

    theme = "hugo-blog-extended"

## Configuration

You can take a look at the `hugo.toml` file in the `exampleSite` directory for an example configuration.
It is recommended that you copy the `hugo.toml` file from the `exampleSite` directory to the root directory of your Hugo site. You can then edit the `hugo.toml` file to suit your needs.

### Adding favicon

I used [realfavicongenerator.net](https://realfavicongenerator.net/) to generate the favicons. You can place the resulting files in the `assets\icons` folder. That should get your favicon working.

If you want to customize anything further, you can modify `layouts\partials\head.html`.

### Adding Social icons

Social icons can be added by configuring `hugo.toml` file in the following manner.

```toml
[[params.socialIcons]]
name = "github"
url = "https://github.com/BiosPlus"

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
| `applemusic`    | music.apple.com                 |
| `behance`       | behance.net                     |
| `bilibili`      | bilibili.com                    |
| `bitcoin`       | -                               |
| `bluesky`       | bsky.app                        |
| `buymeacoffee`  | buymeacoffee.com                |
| `calendly`      | calendly.com                    |
| `codepen`       | codepen.io                      |
| `cryptohack`    | cryptohack.org                  |
| `ctftime`       | ctftime.org                     |
| `cv`            | -                               |
| `deezer`        | deezer.com                      |
| `dev`           | dev.to                          |
| `discogs`       | discogs.com                     |
| `discord`       | discord.com                     |
| `dreamstime`    | dreamstime.com                  |
| `dribbble`      | dribbble.com                    |
| `email`         | -                               |
| `facebook`      | facebook.com                    |
| `flickr`        | flickr.com                      |
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
| `kaggle`        | -                               |
| `kakaotalk`     | kakaocorp.com/service/KakaoTalk |
| `key`           | -                               |
| `keybase`       | keybase.io                      |
| `kofi`          | ko-fi.com                       |
| `komoot`        | -                               |
| `lastfm`        | last.fm                         |
| `leetcode`      | leetcode.com                    |
| `letterboxd`    | -                               |
| `liberapay`     | liberapay.com                   |
| `linkedin`      | linkedin.com                    |
| `mastodon`      | mastodon.social                 |
| `matrix`        | matrix.org                      |
| `medium`        | medium.com                      |
| `monero`        | -                               |
| `mixcloud`      | mixcloud.com                    |
| `nuget`         | nuget.org                       |
| `paypal`        | paypal.com                      |
| `peertube`      | -                               |
| `pgp`           | -                               |
| `phone`         | -                               |
| `ploywork`      | ploywork.com                    |
| `qq`            | qq.com                          |
| `reddit`        | reddit.com                      |
| `researchgate`  | researchgate.net                |
| `rss`           | -                               |
| `serverfault`   | serverfault.com                 |
| `soundcloud`    | soundcloud.com                  |
| `shutterstock`  | shutterstock.com                |
| `signal`        | signal.org                      |
| `slack`         | slack.com                       |
| `snapchat`      | snapchat.com/add                |
| `spotify`       | spotify.com                     |
| `stackoverflow` | stackoverflow.com               |
| `stackshare`    | stackshare.io                   |
| `steam`         | steampowered.com                |
| `strava`        | strava.com                      |
| `telegram`      | telegram.org                    |
| `threads`       | threads.net                     |
| `tiktok`        | tiktok.com                      |
| `twitch`        | twitch.tv                       |
| `twitter` (the blue bird logo)       | twitter.com                     |
| `unsplash`      | unsplash.com                    |
| `x` (formerly Twitter)             | x.com                           |
| `xda`           | xda-developers.com              |
| `xing`          | xing.com                        |
| `ycombinator`   | ycombinator.com                 |
| `youtube`       | youtube.com                     |
| `other`         | -                               |

</details>

If you are trying to add an icon that is not listed above, you can modify `layouts\partials\svgs\svgs.html` to include your icon (SVG). You are encouraged to submit your icon by creating a pull request, so that others can benefit.

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

## Contributing

Please read [CONTRIBUTING.md](https://github.com/BiosPlus/hugo-blog-extended/blob/main/CONTRIBUTING.md).

## 🌟 Showcase

Proud to power these amazing websites:

<div align="center">

| Website | Description | Screenshot |
|---------|-------------|------------|
| [Demo Site](https://hugo-blog-extended.pages.dev/) | Official demo | 🔗 [View Live](https://hugo-blog-extended.pages.dev/) |

</div>

*Want to be featured? [Submit your site](https://github.com/BiosPlus/hugo-blog-extended/discussions) built with Hugo Blog Extended!*

<!-- ## Contributors

Thanks to these wonderful people for contributing to Hugo Blog Extended:

<a href="https://github.com/BiosPlus/hugo-blog-extended/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=BiosPlus/hugo-blog-extended" />
</a> -->

<!-- ## Websites using this theme

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
- <https://tk-web.top> -->

## 🤝 Community & Support

<div align="center">

### Join Our Growing Community!

[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-181717?style=for-the-badge&logo=github)](https://github.com/BiosPlus/hugo-blog-extended/discussions)

</div>

### 🆘 Need Help?

- 💬 **Questions?** Open a [Discussion](https://github.com/BiosPlus/hugo-blog-extended/discussions)

Don't forget to ⭐️ the repo if you liked this theme!

## Credits

The social icons are made possible thanks to [Aditya Telange](https://github.com/adityatelange)'s [hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

Thanks to [piharpi](https://harpi.me/) for creating the [Jekyll klise theme](https://github.com/piharpi/jekyll-klise). It served as an inspiration to create this Hugo theme.

Thanks to [Hugo-Sid](https://github.com/Hugo-Sid) for creating the original [Hugo Blog Awesome](https://github.com/Hugo-Sid/hugo-blog-awesome) theme, which served as the foundation for this.

## License

This theme is released under the MIT license. For more information read the [License](https://github.com/BiosPlus/hugo-blog-extended/blob/main/LICENSE).

## Stats


### Star History

[![Star History Chart](https://api.star-history.com/svg?repos=BiosPlus/hugo-blog-extended&type=Date)](https://star-history.com/#BiosPlus/hugo-blog-extended&Date)
