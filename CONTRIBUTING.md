# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Guidelines for contributing](#guidelines-for-contributing)
  - [Getting started](#getting-started)
    - [Using multiple versions of Node](#using-multiple-versions-of-node)
    - [Quick edits](#quick-edits)
    - [Cloning vs Forking](#cloning-vs-forking)
    - [Submitting a PR from a forked repo](#submitting-a-pr-from-a-forked-repo)
    - [Submitting a PR from a cloned repo](#submitting-a-pr-from-a-cloned-repo)
    - [Draft PRs](#draft-prs)
    - [Deploy previews with Amplify](#deploy-previews-with-amplify)
  - [Style guide adherence](#style-guide-adherence)
  - [Reusable components](#reusable-components)
  - [Technical reference contribution guidelines](#technical-reference-contribution-guidelines)
  - [Editing existing pages](#editing-existing-pages)
  - [Creating new pages](#creating-new-pages)
  - [Deleting pages](#deleting-pages)
  - [New Relic guides](#new-relic-guides)
    - [Purpose](#purpose)
  - [Tips for writing guides](#tips-for-writing-guides)
    - [Check for existing content](#check-for-existing-content)
    - [Editing existing guides](#editing-existing-guides)
    - [Creating new guides](#creating-new-guides)
    - [Deleting guides](#deleting-guides)
  - [Related Pages](#related-pages)
  - [Updating navigation](#updating-navigation)
    - [Example navigation change](#example-navigation-change)
      - [EXISTING](#existing)
      - [UPDATED](#updated)

## Guidelines for contributing

The Developer Experience Team at New Relic welcomes contributions to this repository.
There are several ways you can contribute.

If you wish to make documentation edits, create guides, or add new
documentation, follow our documentation contribution guidelines below.

If you'd like to to make code contributions follow the code contribution
guidelines below.

## Getting started

### Using multiple versions of Node

If you intend to run multiple versions of Node please be aware that the New Relic
Developer Site is currently on Node v12. Therefore it's recommended you use Node Version Manager [NVM](https://github.com/nvm-sh/nvm) to manage Node versions.

Review [this article](https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b)
which clearly explains the setup and configuration of NVM.

### Quick edits

If you see a minor problem in our documentation that you want to quickly fix,
you can use the Github `Edit This File` button to submit a change.

0. Create a [Github](https://github.com/) account if you don't already have one.
1. View the file on Github.
2. In the file click on the pencil icon within the code block.
3. Provide a clear explanation of the change as a comment.
4. create a new branch.
5. Submit a `PR`.
6. And you are done!

### Cloning vs Forking

To be able to [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository and contribute you will need to be given write access to the repository. This is reserved for New Relic Employees only. Contact the Developer Experience team (developer-website-content Slack channel) if you need write access.

As a non New Relic employee you can [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repository and contribute as needed.

### Submitting a PR from a forked repo

0. Create a [Github](https://github.com/) account if you don't already have one.
1. `Fork` this this repository.
2. Make your changes.
3. Test your changes! Review the project's [READ ME](README.md) for instructions on how to build and run tests locally.
4. Submit a `Pull Request` to this project with your changes.
5. If/when your `PR` is accepted, the automation in this project will build the site and deploy a new version of the code to `developer.newrelic.com`.
6. And you are done!

### Submitting a PR from a cloned repo

0. Create a [Github](https://github.com/) account if you don't already have one.
1. `Clone` this repository.
2. Create a new branch locally.
3. Make your changes.
4. Test your changes! Review the project's [READ ME](README.md) for instructions on how to build and run tests locally.
5. Submit a `Pull Request` to this project with your changes.
6. If/when your `PR` is accepted, the automation in this project will build the site and deploy a new version of the code to `developer.newrelic.com`.
7. And you are done!

### Draft PRs

`Draft PRs` are ideal for in progress work or work you need others to contribute to.

To submit a [Draft PR](https://github.blog/2019-02-14-introducing-draft-pull-requests/):

1. Make your code changes and submit a `Pull Request`.
2. Select Create a draft pull request on the PR submission screen on Github.
   You can find this by clicking on the Create pull request button at the bottom of the
   `PR` you wish to submit.
3. Once you are ready to have the `PR` reviewed and merge, click the Ready for review button on the `PR`.

### Deploy previews with Amplify

PRs that are opened from a branch in this repo (not forks) will generate preview links on Amplify automatically. Amplify preview links can be found within the PR under the `Checks` Tab.

## Style guide adherence

In order to drive consistency in our documentation New Relic has provided a detailed [Style Guide](STYLE_GUIDE.md)
for you to follow when making contributions. Refer to this guide prior to contributing.
When making documentation contributions follow these guidelines.

## Reusable components

In order to drive simplicity and ease of use New Relic has provided a set of reusable components you can leverage
when creating documentation. Refer to our [Component Guide](COMPONENT_GUIDE.md) for more information.

## Technical reference contribution guidelines

Technical reference pages are detailed technical specifications of the New Relic One platform and it's components.

## Editing existing pages

1. To edit an existing page you can view the page's source code by clicking on the `Edit` icon in the upper right corner of the site.
2. Follow the instructions above to `Fork` or `Clone` the repo and make your edits.
3. Follow the instructions above to submit a `PR` for your change.

## Creating new pages

1. If you'd like to create an entirely new page of documentation file a [Documentation Request](https://github.com/newrelic/developer-website/issues/new/choose)
2. The Developer Experience Team will review the request to add a new documentation page.
3. If a new page is approved you may be asked to help write the page content.
4. If you are willing to assist in the process of creating a new page, then follow the instructions above to `Fork` or `Clone` the repo and make your edits.
5. Follow the instructions above to submit a `PR` for your change.

## Deleting pages

1. If you feel a page needs to be deleted file a [Documentation Request](https://github.com/newrelic/developer-website/issues/new/choose).
2. The Developer Experience Team will review the request to delete an existing documentation page.
3. If the deletion is approved, The Developer Experience Team will delete the page.

## New Relic guides

The New Relic guides are detailed product how-tos that are case driven. The guides provide steps for developing custom solutions for New Relic. This can mean custom ways of collecting and querying data, enhancing open source applications, or building new applications to meet specific needs. It can also mean automating processes to reduce toil.

### Purpose

The guides aim to help developers learn about New Relic programmability, and to solve problems. Some guides are short, focused on a single task, and other taking you through multiple tasks to complete an end-to-end process.

Guides should have actionable steps and enough information for a reader to follow along. Guides have roughly the following sections:

- Introduction - describe what problem the guide will solve or what skill it will teach.
- Video or screenshot - describe how to complete the steps, or show what the end result will be. The point is to provide a graphical representation.
- Before you begin - list prerequisites and necessary technology setups.
- Steps (repeat as needed):
  - high-level step
  - code example
  - additional information or sub-steps to help clarify the step
- Related information - provide links to any additional resources, examples, and reference docs

## Tips for writing guides

Review the[style guide](/STYLE_GUIDE) prior to contributing contributing.

### Check for existing content

New Relic has a rich set of documentation on our products so it's important you check for what is already may exist prior to starting to
create a guide. It's recommended you search the following resources before contributing.

- [docs.newrelic.com](https://docs.newrelic.com/)
- [developer.newrelic.com](https://developer.newrelic.com/)
- [discuss.newrelic.com](https://discuss.newrelic.com/)
- [opensource.newrelic.com](https://opensource.newrelic.com/)

### Editing existing guides

1. To edit an existing guide you can view the guide's source code by clicking on the `Edit` icon in the upper right corner of the site.
2. Follow the instructions above to `Fork` or `Clone` the repo and make your edits.
3. Follow the instructions above to submit a `PR` for your change.

### Creating new guides

1. If you'd like to create an entirely new guide file a [Documentation Request](https://github.com/newrelic/developer-website/issues/new/choose)
2. We will review the request to add a new guide.
3. If a new guide is approved you may be asked to help write the guide content.
4. If you are willing to assist in the process of creating a new guide, then follow the instructions above to `Fork` or `Clone` the repo and make your edits.
5. Follow the instructions above to submit a `PR` for your change.

### Deleting guides

1. If you feel a guide needs to be deleted file a [Documentation Request](https://github.com/newrelic/developer-website/issues/new/choose)
2. The Developer Experience Team will review the request to delete an existing guide.
3. If the deletion is approved, The Developer Experience Team will delete the guide.

## Related Pages

[related-pages.json](related-pages.json) is used to populate the related resources component with dynamic links.
This file automatically updated every 24 hours via a script that runs in a [GitHub action](https://github.com/newrelic/developer-website/blob/main/.github/workflows/fetch-related-content.yml)

That GH action fetches results for all pages from Swiftype, updates, commits, and pushes that related-pages.json file.

**You should never attempt to update this file manually.**

## Updating navigation

When a new guide is added or an existing guide path frontmatter slug is changed it is important that the site navigation is updated to reflect this change. To do so follow these steps.

1. Make your guide change and submit a PR.
2. Within that PR also make the navigation change.
3. In order to change navigation you will need to update the [sidenav.json](/src/data/sidenav.json) file.
4. Given the side navigation file is JSON, be sure to close all `[ ]` and `{ }` and use trailing `,` correctly.
5. Navigation `displayName` should always be sentence case.
6. Submit your PR and add the `navigation` label.

### Example navigation change

In the example below a new navigation element has been added called `New Nav Item`.

#### EXISTING

```json
[
  {
    "displayName": "Collect data",
    "url": "/collect-data",
    "children": [
      {
        "displayName": "Log with the Log API",
        "url": "/"
      },
      {
        "displayName": "OpenTelemetry Exporter",
        "url": "/"
      },
      {
        "displayName": "Extend New Relic agents",
        "url": "/"
      },
      {
        "displayName": "Create Flex integration",
        "url": "/"
      }
    ]
  }
]
```

#### UPDATED

```json
[
  {
    "displayName": "Collect data",
    "url": "/collect-data",
    "children": [
      {
        "displayName": "Log with the Log API",
        "url": "/"
      },
      {
        "displayName": "OpenTelemetry Exporter",
        "url": "/"
      },
      {
        "displayName": "Extend New Relic agents",
        "url": "/"
      },
      {
        "displayName": "Create Flex Integration",
        "url": "/"
      },
      {
        "displayName": "New nav item",
        "url": "/new-route"
      }
    ]
  }
]
```
