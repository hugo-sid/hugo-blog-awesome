# Welcome to contribution guidelines

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
