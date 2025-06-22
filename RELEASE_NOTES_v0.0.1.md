# Hugo Blog Extended v0.0.1 - Initial Release 🎉

This is the first independent release of **Hugo Blog Extended**, an extended version of the popular Hugo Blog Awesome theme.

## 🚀 What's New

### Independence from Original Theme
- ✅ Complete separation from `hugo-blog-awesome`
- ✅ New theme name: `hugo-blog-extended`
- ✅ New module path: `github.com/BiosPlus/hugo-blog-extended`
- ✅ Updated all references and documentation
- ✅ Clean, independent codebase ready for future development

### Features Included
- 🌟 **All original hugo-blog-awesome features preserved**
- 🌙 Dark and light mode support
- 📱 Fully responsive design
- ⚡ Lightning fast with no external dependencies
- 🌍 Multi-language support (9 languages: EN, DE, FR, IT, JA, PT-BR, RU, ZH-CN)
- 🎨 Clean, minimal design
- 🔧 Highly configurable
- 📊 100/100 Google PageSpeed score
- 🔍 SEO optimized

## 📦 Installation

### Method 1: Hugo Module (Recommended)
```bash
# Initialize your site as a Hugo module
hugo mod init github.com/your-username/your-site

# Add the theme as a module
hugo mod get github.com/BiosPlus/hugo-blog-extended
```

Add to your `hugo.toml`:
```toml
[module]
  [[module.imports]]
    path = "github.com/BiosPlus/hugo-blog-extended"
```

### Method 2: Git Submodule
```bash
# Clone the theme into your themes directory
git clone https://github.com/BiosPlus/hugo-blog-extended.git themes/hugo-blog-extended
```

Add to your `hugo.toml`:
```toml
theme = "hugo-blog-extended"
```

### Method 3: Direct Download
Download the latest release and extract it to your `themes/hugo-blog-extended` directory.

## ⚙️ Configuration

Copy the example configuration from `exampleSite/hugo.toml` to get started quickly. The theme is highly configurable with support for:

- Social icons and links
- Custom navigation menus
- Site metadata and SEO settings
- Multi-language configurations
- Dark/light mode preferences
- Custom CSS and JavaScript

## 🌍 Multi-language Support

Supported languages out of the box:
- 🇺🇸 English (en-us, en-gb)
- 🇩🇪 German (de-de)
- 🇫🇷 French (fr-fr)
- 🇮🇹 Italian (it)
- 🇯🇵 Japanese (ja)
- 🇧🇷 Portuguese Brazil (pt-br)
- 🇷🇺 Russian (ru-ru)
- 🇨🇳 Chinese Simplified (zh-cn)

## 🔄 Migration from hugo-blog-awesome

If you're migrating from the original theme:

1. Update your `hugo.toml`:
   ```toml
   # Change this:
   theme = "hugo-blog-awesome"
   # To this:
   theme = "hugo-blog-extended"
   ```

2. For Hugo modules, update the import path:
   ```toml
   [[module.imports]]
     path = "github.com/BiosPlus/hugo-blog-extended"  # New path
   ```

3. Update any custom templates that reference the old theme name

## 🛠️ Requirements

- **Hugo Extended** v0.87.0 or later
- No external dependencies (CSS/JS frameworks)
- No build tools required

## 📚 Documentation

- [Demo Site](https://hba.sid.one/)
- [Example Configuration](exampleSite/hugo.toml)
- [Theme Documentation](README.md)

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 📄 License

This theme is released under the MIT License. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

This theme is based on the excellent work of the [hugo-blog-awesome](https://github.com/hugo-sid/hugo-blog-awesome) theme. Special thanks to the original maintainers and contributors.

---

**Happy blogging with Hugo Blog Extended!** 🚀

If you find this theme useful, please consider starring the repository ⭐
