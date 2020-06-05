# Table of Contents

- [Guidelines for contributing](#guidelines-for-contributing)
- [Getting started](#getting-started)
  * [Quick edits](#quick-edits)
  * [Cloning vs Forking](#cloning-vs-forking)
  * [Submitting a PR from a forked repo](#submitting-a-pr-from-a-forked-repo)
  * [Submitting a PR from a cloned repo](#submitting-a-pr-from-a-cloned-repo)
- [Deploy previews with Amplify](#deploy-previews-with-amplify)
- [Style guide adherence](#style-guide-adherence)
- [Technical reference contribution guidelines](#technical-reference-contribution-guidelines)
  * [Editing existing pages](#editing-existing-pages)
  * [Creating new pages](#creating-new-pages)
  * [Deleting pages](#deleting-pages)
- [New Relic guides](#new-relic-guides)
  * [Purpose](#purpose)
  * [Tips for writing guides](#tips-for-writing-guides)
  * [Check for existing content](#check-for-existing-content)
  * [Editing existing guides](#editing-existing-guides)
  * [Creating new guides](#creating-new-guides)
  * [Deleting guides](#deleting-guides)
  * [Updating navigation](#updating-navigation)

# Guidelines for contributing 

The Developer Experience Team at New Relic welcomes contributions to this repository. 
There are several ways you can contribute. 

If you wish to make documentation edits, create guides, or add new 
documentation, follow our documentation contribution guidelines below. 

If you'd like to to make code contributions follow the code contribution 
guidelines below. 

# Getting started 

## Quick edits 

If you see a minor problem in our documentation that you want to quickly fix, 
you can use the Github `Edit This File` button to submit a change. 

0. Create a [Github](https://github.com/) account if you don't already have one. 
1. View the file on Github.
2. In the file click on the pencil icon within the code block.
3. Provide a clear explanation of the change as a comment.
4. create a new branch. 
5. Submit a `PR`.
6. And you are done!

## Cloning vs Forking

To be able to [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository and contribute you will need to be given write access to the repository. This is reserved for New Relic Employees only. Contact the Developer Experience Team if you need write access.

As a non New Relic employee you can [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repository and contribute as needed. 

## Submitting a PR from a forked repo

0. Create a [Github](https://github.com/) account if you don't already have one. 
1. `Fork` this this repository.  
2. Make your changes. 
3. Test your changes! Review the project's [READ ME](README.md) for instructions on how to build and run tests locally.
3. Submit a `Pull Request` to this project with your changes.
4. If/when your `PR` is accepted, the automation in this project will build the site  and deploy a new version of the code to `developer.newrelic.com`. 
5. And you are done!

## Submitting a PR from a cloned repo

0. Create a [Github](https://github.com/) account if you don't already have one. 
1. `Clone` this this repository.
2. Create a new branch locally.  
3. Make your changes. 
4. Test your changes! Review the project's [READ ME](README.md) for instructions on how to build and run tests locally.
5. Submit a `Pull Request` to this project with your changes.
6. If/when your `PR` is accepted, the automation in this project will build the site  and deploy a new version of the code to `developer.newrelic.com`. 
7. And you are done!

 # Deploy previews with Amplify

 PRs that are opened from a branch in this repo (not forks) will generate preview links on Amplify automatically. Amplify preview links can be found within the PR under the `Checks` Tab.

# Style guide adherence 

In order to drive consistency in our documentation New Relic has provided a detailed [Style Guide](STYLE_GUIDE.md)
for you to follow when making contributions. Refer to this guide prior to contributing.
When making documentation contributions follow these guidelines. 

# Technical reference contribution guidelines

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

# New Relic guides 

The New Relic guides are detailed product how-tos that are case driven. The guides provide steps for developing custom solutions for New Relic. This can mean custom ways of collecting and querying data, enhancing open source applications, or building new applications to meet specific needs. It can also mean automating processes to reduce toil.

## Purpose

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

 
## Check for existing content
New Relic has a rich set of documentation on our products so it's important you check for what is already may exist prior to starting to 
create a guide. It's recommended you search the following resources before contributing. 

- [docs.newrelic.com](https://docs.newrelic.com/)
- [developer.newrelic.com](https://developer.newrelic.com/)
- [discuss.newrelic.com](https://discuss.newrelic.com/)
- [opensource.newrelic.com](https://opensource.newrelic.com/)

## Editing existing guides

1. To edit an existing guide you can view the guide's source code by clicking on the `Edit` icon in the upper right corner of the site. 
2. Follow the instructions above to `Fork` or `Clone` the repo and make your edits. 
3. Follow the instructions above to submit a `PR` for your change. 

## Creating new guides 

1. If you'd like to create an entirely new guide file a [Documentation Request](https://github.com/newrelic/developer-website/issues/new/choose)
2. We will review the request to add a new guide.
3. If a new guide is approved you may be asked to help write the guide content. 
4. If you are willing to assist in the process of creating a new guide, then follow the instructions above to `Fork` or `Clone` the repo and make your edits. 
5. Follow the instructions above to submit a `PR` for your change.

## Deleting guides

1. If you feel a guide needs to be deleted file a [Documentation Request](https://github.com/newrelic/developer-website/issues/new/choose)
2. The Developer Experience Team will review the request to delete an existing guide. 
3. If the deletion is approved, The Developer Experience Team will delete the guide. 

## Updating navigation

@TODO Need to add how to update navigation when adding new content.
