# Table of Contents

<!-- TOC GFM -->

- [Table of Contents](#table-of-contents)
  - [Guidelines for contributing](#guidelines-for-contributing)
  - [Getting started](#getting-started)
    - [Using multiple versions of Node](#using-multiple-versions-of-node)
    - [Quick edits](#quick-edits)
    - [Cloning vs Forking](#cloning-vs-forking)
    - [Submitting a PR from a forked repo](#submitting-a-pr-from-a-forked-repo)
    - [Submitting a PR from a cloned repo](#submitting-a-pr-from-a-cloned-repo)
    - [Using the `develop` branch](#using-the-develop-branch)
    - [Branch Protection](#branch-protection)
    - [Using Conventional Commits](#using-conventional-commits)
      - [Use `chore`](#use-chore)
      - [Use `fix`](#use-fix)
      - [Use `feat`](#use-feat)
    - [Draft PRs](#draft-prs)
    - [Deploy previews with Gatsby Cloud](#deploy-previews-with-gatsby-cloud)
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
  - [Split testing and running experiments](#split-testing-and-running-experiments)
    - [Step 1](#step-1)
    - [Step 2](#step-2)
    - [Step 3](#step-3)
    - [Step 4](#step-4)
    - [Step 5](#step-5)
  - [Updating the SDK documentation bundle](#updating-the-sdk-documentation-bundle)
    - [Step 1: Update the release number in `gatsby-config`](#step-1-update-the-release-number-in-gatsby-config)
    - [Step 2: Add any new APIs or components to our constants list](#step-2-add-any-new-apis-or-components-to-our-constants-list)
      - [How to identify new components, APIs](#how-to-identify-new-components-apis)
      - [Adding new components](#adding-new-components)
    - [Step 3: Add any new APIs or components to the navigation](#step-3-add-any-new-apis-or-components-to-the-navigation)
  - [Updating Developer terms](#updating-developer-terms)
    - [Developer terms in New Relic](#developer-terms-in-new-relic-one)
    - [Developer terms tips](#developer-terms-tips)
    - [Developer terms testing](#developer-terms-testing)

<!-- /TOC -->

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
Developer Site is currently on Node v16. Therefore it's recommended you use Node Version Manager [NVM](https://github.com/nvm-sh/nvm) to manage Node versions.

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

To be able to [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository and contribute you will need to be given write access to the repository. This is reserved for New Relic Employees only. Contact the Developer Experience team (#help-deven-websites Slack channel) if you need write access.

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

### Using the `develop` branch

Use the `develop` branch when creating your working branch locally. `develop` will always contain the most
current source code. The `develop` branch will be merged into the `main` branch by the maintainers when a new release is ready to ship.

All pull requests should be made against the `develop` branch.

### Branch Protection

The `develop` and `main` branches have "Branch Protection" enabled in Github. In order to merge a pull request into `develop`, you must have (at least) one approval. Additionally a few of the "PR Checks" are required and must pass before the pull request can be merged in.

You can review full Branch Protection details [here](https://docs.google.com/document/d/1O1SGS0i3OmPfvPhylpFe1CTMkE20889iAOF_cMFJ344/edit#heading=h.cy3jfpnyvv5z), and check out a visual representation of the workflow below:

![](<src/images/Dev_site_branch_protection_workflow_(develop_main).png>)

### Using Conventional Commits

Please help the maintainers by leveraging the following [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
standards in your pull request title and commit messages.

#### Use `chore`

- for minor changes / additions / corrections to content.
- for minor changes / additions / corrections to images.
- for minor non-functional changes / additions to github actions, github templates, package or config updates, etc

```bash
git commit -m "chore: adjusting config and content"
```

#### Use `fix`

- for minor functional corrections to code.

```bash
git commit -m "fix: typo and prop error in the code of conduct"
```

#### Use `feat`

- for major functional changes or additions to code.

```bash
git commit -m "feat(media): creating a video landing page"
```

### Draft PRs

`Draft PRs` are ideal for in progress work or work you need others to contribute to.

To submit a [Draft PR](https://github.blog/2019-02-14-introducing-draft-pull-requests/):

1. Make your code changes and submit a `Pull Request`.
2. Select Create a draft pull request on the PR submission screen on Github.
   You can find this by clicking on the Create pull request button at the bottom of the
   `PR` you wish to submit.
3. Once you are ready to have the `PR` reviewed and merge, click the Ready for review button on the `PR`.

### Deploy previews with Gatsby Cloud

PRs that are opened from a branch in this repo (not forks) will generate preview links on Gatsby Cloud automatically. Gatsby Cloud preview links can be found as comments on your pull request once they finish building. Progress can be monitored via the `Gatsby Build Service` job under the `Checks` section.

## Style guide adherence

In order to drive consistency in our documentation New Relic has provided a detailed [Style Guide](STYLE_GUIDE.md)
for you to follow when making contributions. Refer to this guide prior to contributing.
When making documentation contributions follow these guidelines.

## Reusable components

In order to drive simplicity and ease of use New Relic has provided a set of reusable components you can leverage
when creating documentation. Refer to our [Component Guide](COMPONENT_GUIDE.md) for more information.

## Technical reference contribution guidelines

Technical reference pages are detailed technical specifications of the New Relic platform and its components.

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

Review the [style guide](/STYLE_GUIDE) prior to contributing.

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
3. In order to change navigation you will need to update the [nav.yml](/src/data/nav.yml) file.
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

## Split testing and running experiments

If you have access to [Split.io](https://split.io/) as a New Relic employee you can execute a split test
on the site to measure different scenarios if you are attempting to gather data to make
a product decision or conduct an experiment.

To execute a split test you'll need to be comfortable with Split.io as well as be able
to provide the different treatments (in code) of what you wish to test.

To understand how to use Split.io it's recommended to watch this [Introduction video](https://youtu.be/sUFM7dEet8A)

### Step 1

Decide what you want to test, what your hypothesis is and begin to define your
[experiment](https://youtu.be/BRXpPgedQlE).

- Why are you running the experiment, what is the goal?
- How will you measure to see if you reached the goal?
- What is your metrics for success?
- How long will it take to get to results you want?

### Step 2

Review the [Split.io documentation](https://help.split.io/hc/en-us/articles/360025334851-Step-2-Create-a-split-and-target-users) for creating a split test and targeting users.

### Step 3

Send [event data to Split.io](https://help.split.io/hc/en-us/articles/360025335031-Step-3-Send-event-data)

### Step 4

Measure results by [setting up a metric](https://help.split.io/hc/en-us/articles/360025335091-Step-4-Create-a-metric-monitor-and-measure-the-impact)

A good metric:

- is meaningful
- is directional
- has significance
- is fit for the test you are running

### Step 5

Run the experiment and pick a winner!

## Updating the SDK documentation bundle

Periodically we need to update the NR1 SDK bundle that we use to generate our
component documentation. In order to update the SDK, there are a few steps that
need to happen:

### Step 1: Update the release number in `gatsby-config`

- We use a [local Gatsby plugin `gatsby-source-newrelic-sdk`](https://github.com/newrelic/developer-website/tree/develop/plugins/gatsby-source-newrelic-sdk)
  to source our documentation into GraphQL. This plugin has some configuration that tells it what release number to use.

- [Update `gatsby-config.js`](https://github.com/newrelic/developer-website/blob/develop/gatsby-config.js#L198)
  with the new release number to update the bundle release version.

  ```json
  {
      resolve: 'gatsby-source-newrelic-sdk',
      options: {
        release: 'release-3250',
      },
  }
  ```

- To obtain the version release number visit the `one-core` repository on Github enterprise and look at the release version in `one-core/src/constants/sdk.js `. You can use the one-core docs site to confirm if any issues are developer site specific or occurring in the SDK.

### Step 2: Add any new APIs or components to our constants list

#### How to identify new components, APIs

At the moment, we don't have a rigorous or automatic process for identifying new components and APIs that we need to document. The goto manual process is to just eyeball the difference between the components we have on the site (or in `constants.js`), and what's displayed on the one-core site.

You can also check a file that resides in the wanda-ec-ui repository found in `/src/__snapshots__/index.spec.js.snap` that provides a visual check for SDK components and their levels of exposure.

It is possible to see a list of components from the SDK itself. If you run the site with the updated SDK version, you can enter `Object.entries(window.__NR1_SDK__.default).map(array => array[0])` into the dev console in the browser for the running site. That will show you an array containing component and API names. You can use this to try and compare differences, but some manual investigation is still necessary, since the SDK also contains pre-release and internal-only components.

If a component looks like it should be internal only, feel free to ask #help-one-core to confirm if it should have public documentation, or if it is internal only.

#### Adding new components

- We rely on the 1st party documentation bundle to power the developer docs. While the 1st party bundle provides many of the same components/APIs, there are a few minor differences between the 1st and 3rd party SDKs. To account for this, we white list the specific components we document on the site.
- If there are any new components or APIs, update the [constants
  list](https://github.com/newrelic/developer-website/blob/develop/plugins/gatsby-source-newrelic-sdk/src/constants.js) with the new components.
- Pages will be then automatically generated for each of the new components.

> Once we have a 3rd party bundle automatically built for us, we should no longer need this step as that will contain only 3rd party SDK documentation. That is an open request to the NR One Core Team.

### Step 3: Add any new APIs or components to the navigation

If there are new APIs or components, we will want to list them in the navigation
so that a user can easily discover them. [Add an entry to `nav.yml`](https://github.com/newrelic/developer-website/blob/develop/src/data/nav.yml)
to get the new API/component in the nav.

## Updating Developer terms

If you need to update the developer terms the following process can be used.
These terms only change when requested by New Relic Legal, and they should not be modified
unless requested by our legal team.

The Developers terms are found [here](./src/markdown-pages/terms.mdx)

1. Obtain the approved file from Legal, usually in the form of a `.docx` type.
2. Use a tool such as [Pandoc](https://pandoc.org/installing.html) to convert the file to markdown.
3. Run this command to convert the file:

```sh
pandoc devterms.docx -o devterms.md
```

4. Start the process of updating the terms.

### Developer terms in New Relic

The developer terms can be accepted in the [New Relic platform](https://one.newrelic.com) in the Developer Center which is accessible when a user clicks on
`Build your own app`.

- The Developer Center functionality is located in an internal Github Enterprise repository:  `wanda/developer-center`.
- As long as the terms file doesn't incorporate custom components within the markdown (*like JSX components that only exist within the developer-website repo*) These internal terms will now automatically update when the [terms source file](./src/markdown-pages/terms.mdx) changes.

### Developer terms tips

It's very important all formatting stays the same as this is a legal document, so when making your changes
look for the following issues that can occur when using Pandoc.

- `URL conversions` - many times a URL will be formatted incorrectly.
- `Spacing or tab issues` - can occur. Check the document is formatted correctly to align with legal standards.
- `Addition of / in place of commas or bolded text` - when converting a document this issue will occur.
- `Formatting of bullets` - sometimes bullets are formatted incorrectly.
- `Correct bolding of sub terms` - sub terms sometimes are combined into a single paragraph.

### Developer terms testing

1. Compare the original terms file to the changes you wish to make to look for issues and correct them as needed. Doing a split screen comparison can help you identify issues.
2. Review the terms on a preview branch after pushing your changes in a PR.
3. Have someone from the Legal team review the PR branch.
