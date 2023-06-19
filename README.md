<div align=center> 
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM11.5 17.25C11.5 17.61 11.14 17.85 10.81 17.71C9.6 17.19 8.02 16.71 6.92 16.57L6.73 16.55C6.12 16.47 5.62 15.9 5.62 15.28V7.58C5.62 6.81 6.24 6.24 7 6.3C8.25 6.4 10.1 7 11.26 7.66C11.42 7.75 11.5 7.92 11.5 8.09V17.25ZM18.38 15.27C18.38 15.89 17.88 16.46 17.27 16.54L17.06 16.56C15.97 16.71 14.4 17.18 13.19 17.69C12.86 17.83 12.5 17.59 12.5 17.23V8.08C12.5 7.9 12.59 7.73 12.75 7.64C13.91 6.99 15.72 6.41 16.95 6.3H16.99C17.76 6.3 18.38 6.92 18.38 7.69V15.27Z" fill="#292D32"/>
</svg> 
</div>
<h1 align=center> Hugo Blog Awesome | <a href="https://hba.sid.one" target="_blank" rel="nofollow">Demo</a></h1>

<h4 align=center>⚡ Fast | 📰 Clean UI | 🌙 Dark mode support | 📱 Responsive design </h4>

## Screenshots

| Dark mode | Light mode |
| --- | --- |
| ![Dark mode](https://raw.githubusercontent.com/hugo-sid/hugo-blog-awesome/master/images/dark.png) | ![Light mode](https://raw.githubusercontent.com/hugo-sid/hugo-blog-awesome/master/images/light.png) |

<details>
  <summary>Page speed score (click to expand)</summary>

![Page speed score](https://raw.githubusercontent.com/hugo-sid/hugo-blog-awesome/master/images/pagespeed.png)

Google PageSpeed Insights [test link](https://pagespeed.web.dev/report?url=https%3A%2F%2Fhugo-blog-awesome.netlify.app%2F).

</details>

## Why this theme?

Hugo Blog Awesome is a theme crafted to capture your readers' attention.

Additionally, it's fast, [privacy-conscious](https://themarkup.org/blacklight?url=hba.sid.one), and comes with no external dependencies. That's right. There are no Google fonts, icon packs, or JavaScript frameworks. No trackers or ads to bloat your website.

Its focus on minimalism and clean UI ensures that your content takes the spotlight. This, coupled with the support for dark mode, provides a stress-free (on the eyes) reading experience for your audience.

Built with Hugo, SCSS, and vanilla JavaScript.

## Features

- Minimal design
- Responsive design
- Light and dark modes
- Syntax highlighting
- RSS feed
- No jQuery, Bootstrap
- 100/100 Google PageSpeed Insights [score](https://pagespeed.web.dev/report?url=https%3A%2F%2Fhugo-blog-awesome.netlify.app%2F) on all 4 metrics

## Setup

> **Note**: You need to have the Hugo extended version installed in order to use this theme. This theme uses SCSS for styling. With the Hugo extended version, SCSS can be compiled to CSS without any additional tools.

To create a new Hugo site with this theme, run the following command:

    hugo new site myblog

Then, clone this repository into the `themes` directory of your new site:

    cd myblog
    git clone https://github.com/hugo-sid/hugo-blog-awesome.git themes/hugo-blog-awesome

To preview the theme with example content, run the following command from the `exampleSite` directory:

    hugo server --themesDir ../..

## Usage

To use this theme, set the `theme` variable in your site's `config.toml` to `hugo-blog-awesome`:

    theme = "hugo-blog-awesome"

## Configuration

You can take a look at the `config.toml` file in the `exampleSite` directory for an example configuration.
It is recommended that you copy the `config.toml` file from the `exampleSite` directory to the root directory of your Hugo site. You can then edit the `config.toml` file to suit your needs.

### Adding favicon

I used [realfavicongenerator.net](https://realfavicongenerator.net/) to generate the favicons. You can place the resulting files in the `assets\icons` folder. That should get your favicon working.

If you want to customize anything further, you can modify `layouts\partials\head.html`.

### Adding Social icons

Social icons can be added by congifuring `config.toml` file in the following manner.

```toml
[[params.socialIcons]]
name = "github"
url = "https://github.com/hugo-sid"

[[params.socialIcons]]
name = "twitter"
url = "https://twitter.com"

[[params.socialIcons]]
name = "Rss"
url = "index.xml"
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
| `buymeacoffee`  | buymeacoffee.com                |
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
| `slack`         | slack.com                       |
| `snapchat`      | snapchat.com/add                |
| `spotify`       | spotify.com                     |
| `stackoverflow` | stackoverflow.com               |
| `steam`         | steampowered.com                |
| `strava`        | strava.com                      |
| `telegram`      | telegram.org                    |
| `tiktok`        | tiktok.com                      |
| `twitch`        | twitch.tv                       |
| `twitter`       | twitter.com                     |
| `unsplash`      | unsplash.com                    |
| `xda`           | xda-developers.com              |
| `xing`          | xing.com                        |
| `ycombinator`   | ycombinator.com                 |
| `youtube`       | youtube.com                     |
| `other`         | -                               |

</details>

If you are trying to add an icon that is not listed above, you can modify `layouts\partials\svgs\svgs.html` to include your icon (SVG). You are encouraged to submit your icon by creating a pull request, so that others can benefit.

### Enable go to top button

To enable go to top button on blog posts, set `goToTop` to `true` in `config.toml` file.

```toml
[params]
  goToTop = true
```

## Content

### Posts

To create a new post, run the following command:

    hugo new posts/my-first-post.md

Then, edit the `my-first-post.md` file to suit your needs.

### Comments

To enable Disqus comments, set `disqusShortname` in your site's `config.toml`.

To use another comments system, provide your own `comments.html` partial in `layouts\partials\comments.html`.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/CONTRIBUTING.md).

## Websites using this theme

If you are using this theme for any website, feel free to list the website here. You can submit a pull request (PR) to include your website.

- <https://krisnova.net/>
- <https://paddy-exe.github.io/>
- <https://www.siggijons.net/>
- <https://debanwita27.github.io/>
- <https://mrizkimaulidan.vercel.app/>
- <https://www.ariesnine.cn/>
- <https://www.yukizr.com/>
- <http://liamdalg.co.uk/>
- <http://pratham-mishra.in/>
- <https://chriscodes.net/>
- <https://ruiper.es/>
- <https://www.magicplace.de/>

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
