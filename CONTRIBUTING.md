# Contribution guidelines

Thank you for taking time to contribute to Hugo blog awesome!

Following the contribution guidelines helps both owners and contributors. The guidelines save time and hassle caused by improperly created pull requests or issues that might have to be rejected and re-submitted.

## When to use issues?

We prefer to use issues for reporting real 'issues' or bugs. For feature requests you can visit the [feature request section](https://github.com/hugo-sid/hugo-blog-awesome/discussions/categories/feature-requests) of Discussions and start a new thread.
For questions you can visit [Q&A section](https://github.com/hugo-sid/hugo-blog-awesome/discussions/categories/q-a) of Discussions.

## Pull requests (PR)

- Please ensure that you have filled answers to as many questions as applicable, while creating a PR.
- We recommend you to create atomic PRs which focus on a single change.
- We do recommend PRs to not exceed 200 lines (includes additions and deletions) of code.
- Kindly ensure that you are **NOT** addressing multiple issues in one PR.

## Dependency version management

This project maintains a centralized version management system to ensure consistency across all configuration files.

### Overview

Versions for Node.js, Hugo, and Go are defined in a single `.mise.toml` file (the config format used by [mise](https://mise.jdx.dev/)). This eliminates duplication and ensures all build environments use consistent tool versions.

**Files affected by version management:**
- `.mise.toml` - Single source of truth for all tool versions
- `.devcontainer/Dockerfile` - Development container environment
- `netlify.toml` - Netlify build environment
- `.devcontainer/devcontainer.json` - VS Code dev container configuration

### How it works

1. **Single Source of Truth (`.mise.toml`)**: All version numbers are defined in one file:
   ```toml
   [tools]
   node = "24.16.0"
   hugo = "0.162.1"
   go = "1.26.3"
   ```

2. **Automated Synchronization**: A shell script (`.scripts/sync-versions.sh`) automatically propagates versions from `.mise.toml` to all configuration files:
   - Updates `ARG NODE_VERSION`, `ARG HUGO_VERSION`, `ARG GO_VERSION` in Dockerfile
   - Updates environment variables in `netlify.toml`
   - Updates Go version in `devcontainer.json`

3. **Renovate Integration**: [Renovate bot](https://www.mend.io/renovate/) has built-in support for `.mise.toml` (its `mise` manager), so no custom configuration is needed in `renovate.json` — it automatically detects new Node/Hugo/Go versions and creates a PR updating `.mise.toml`:
   - When a new version is released (e.g., Node v24.17.0), Renovate creates a PR updating `.mise.toml`
   - The PR triggers a GitHub Actions workflow that runs the sync script
   - All affected files are automatically updated and committed to the PR
   - One PR contains all version updates, keeping everything in sync

4. **GitHub Actions Workflow** (`.github/workflows/sync-versions.yml`):
   - Runs whenever `.mise.toml` is modified in a PR
   - Executes the sync script to update all configuration files
   - Auto-commits the synchronized changes back to the PR
   - Ensures consistency across all environments

### Updating versions

#### Manual update
To manually update versions:

1. Edit `.mise.toml` file with the new version numbers
2. Run the sync script:
   ```bash
   bash .scripts/sync-versions.sh
   ```
3. Commit the changes to all affected files

#### Automatic updates (via Renovate)
When a new version is available:

1. Renovate detects the new version and creates a PR
2. The PR automatically updates `.mise.toml`
3. GitHub Actions workflow triggers and syncs all files
4. Review and merge the PR - all files are already in sync!

### Adding new dependency

To add a new dependency to the management system:

1. Add the dependency to `.mise.toml`:
   ```toml
   [tools]
   python = "3.11.0"
   ```

2. Update `.scripts/sync-versions.sh` to handle the new dependency version

3. Update `.github/workflows/sync-versions.yml` configuration if needed (Renovate's `mise` manager picks up new tools in `.mise.toml` automatically, no `renovate.json` change required)

4. Run the sync script to update all affected configuration files

## Adding a new language

If you are adding support for a new language, you have to do the following:

1. Add language specific configuration and parameters in `exampleSite/hugo.toml`
2. Translate specific terms by creating a new language-specific file in the `i18n` directory
3. Add translated content in `exampleSite/content` directory

## Commits

This project adheres to [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

## Releases

We use [Semantic Versioning](https://semver.org/) for releases.

## Changelog

You don't have to edit the `CHANGELOG.md` file. The changelong is auto generated. A GitHub action workflow is in place, which:

- analyses the commits (from last release)
- determines the version to bump (it's doable since this project adheres to conventional commit specification)
- updates the changelog
- creates a git tag corresponding to the version

Finally it creates a PR with the above changes. So, there is no manual editing required.
