# Table of Contents
- [Welcome!](#welcome)
- [GitHub & Gatsby](#github--gatsby)
- [What can I contribute?](#what-can-i-contribute)
  * [Technical references](#technical-references)
  * [Education guides](#education-guides)
  * [Content Pages](#content-pages)
- [Writing Process](#writing-process)
  * [Consider the New Relic "voice"](#consider-the-new-relic-voice)
  * [Think of your audience](#think-of-your-audience)
    + [For Educational guides](#for-educational-guides)
    + [For Technical references](#for-technical-references)
  * [Prepare to write](#prepare-to-write)
  * [Write drafts and get feedback](#write-drafts-and-get-feedback)
- [Word Choice](#word-choice)
  * [Use you as the pronoun](#use-you-as-the-pronoun)
  * [Avoid Gender specific pronouns](#avoid-gender-specific-pronouns)
  * [Avoid "easy" and "simple"](#avoid-easy-and-simple)
  * [Avoid emojis, slang, and metaphors](#avoid-emojis-slang-and-metaphors)
  * [Define jargon](#define-jargon)
- [Writing Style](#writing-style)
  * [Write concisely](#write-concisely)
  * [Use clear hyperlinks](#use-clear-hyperlinks)
  * [Use relative hyperlinks for local links](#use-relative-hyperlinks-for-local-links)
  * [Mark localhost URLs as code strings](#mark-localhost-urls-as-code-strings)
  * [Indicate when something is optional](#indicate-when-something-is-optional)
  * [Abbreviate terms](#abbreviate-terms)
  * [Use SEO optimized titles and descriptions](#use-seo-optimized-titles-and-descriptions)
  * [Using Gatsby templates](#using-gatsby-templates)
    + [Types of templates](#types-of-templates)
  * [Using Frontmatter](#using-frontmatter)
    + [Frontmatter slugs](#frontmatter-slugs)
    + [Frontmatter example](#frontmatter-example)
- [Grammar and formatting](#grammar-and-formatting)
  * [Format titles](#format-titles)
  * [Format headers](#format-headers)
  * [Format code blocks, inline code, videos, and images](#format-code-blocks-inline-code-videos-and-images)
    + [Inline code and code blocks](#inline-code-and-code-blocks)
    + [Adding images](#adding-images)
    + [Adding videos](#adding-videos)
  * [Capitalize proper nouns](#capitalize-proper-nouns)
  * [Use active voice](#use-active-voice)
  * [Make lists clear with the Oxford Comma](#make-lists-clear-with-the-oxford-comma)
  * [Prefer US English](#prefer-us-english)
  * [Recommended code editors](#recommended-code-editors)
- [References](#references)

# Welcome!

The New Relic Developer Site is an open source documentation repository where we encourage contributions from everyone, not just employees of New Relic.

If you’d like to contribute by writing an education guide, technical reference page, or content page please review this **Style Guide** and our [Contributors Guide](CONTRIBUTING.md)
before getting started.

# GitHub & Gatsby

The New Relic Developer Experience Team uses [Github](https://github.com/) and [Gatsby.JS](https://www.gatsbyjs.org/) to:

  - accurately maintain our technical reference docs and educational guides
  - iterate and publish quickly
  - support the Open Source community
  - maintain version control
  - gather feedback quickly

# What can I contribute?

## Technical references 

Technical reference pages are detailed technical specifications of the New Relic One platform and it's components. 

## Education guides 

New Relic educational guides are detailed product `how-tos` that are use case driven.  The purpose of these guides are to explain how to setup and configure a range of different New Relic products based on specific use cases you may have in your organization.

## Content Pages 

Content pages are overview pages of information, FAQs, product videos, etc of New Relic specific content.

# Writing Process

## Consider the New Relic "voice"

```
@TODO need some input from the docs team on the voice we've been using.

```
## Think of your audience 

Before you begin writing, answer these questions. 

### For Educational guides

- Who will read my writing?
- Is what I'm writing doable in less than 30 minutes?
- What do I hope my readers will know and/or be able to do after reading it? 
- What type of resources exist already that I can leverage?
- What type of new resources will I need to create to complete this?

### For Technical references

- Who will read my writing?
- What do I hope my readers will know and/or be able to do after reading it? 
- Am I repeating something that already exists somewhere else in other New Relic Documentation?


## Prepare to write

Once you answer those questions, create an outline of the topic and think about 
any coding examples you’ll use (if applicable). This helps to organize your thoughts and make the writing process easier.

If you need videos or code samples or clarification from other teams please start to consider 
who can assist you and reach out to them.

## Write drafts and get feedback

Get your outline or draft in front someone to get early feedback often as 
it's much easier to adjust earlier in the writing process.

# Word Choice 

## Use you as the pronoun 

Please use the second person (“you”) to provide a conversational tone in your documentation. 
This way, the text and instructions seem to speak directly to the person reading it. 
Avoid using the first person (“I”, “we”, “let’s”, and “us”).

## Avoid Gender specific pronouns

Please use `they / them` in place of `he / him` or `she / her`. 

## Avoid "easy" and "simple"

Avoid using words like “easy”, “simple” and “basic”. Avoid any language that 
assumes a reader's experience level.

## Avoid emojis, slang, and metaphors

Avoid using emojis or emoticons and idiomatic expressions / slang, or metaphors.

## Define jargon

Content should avoid the use of jargon. 

```
Jargon: (n.) special words or expressions that are used by a particular profession or group and are difficult for others to understand.
```
All jargon should be expressed in plain English. In other words, pretend like your readers have basic coding experience and have little knowledge of New Relic products and services. 

# Writing Style 

## Write concisely

Concise writing communicates the bare minimum without redundancy. Strive to make your writing as short as possible.

## Use clear hyperlinks

Hyperlinks should contain the clearest words to indicate where the link will lead you. 
The use of the title attribute on hyperlinks should be avoided for accessibility reasons.

```
<!-- Good -->
[New Relic Open Source](https://www.opensource.newrelic.com/)

<!-- Bad -->
[here](https://www.opensource.newrelic.com/ "New Relic Open Source")

```

In Educational Guides that are meant for beginners, use less hyperlinks to 
minimize distractions. In technical references, you may include as many hyperlinks as 
necessary to provide relevant and interesting information and resources.

## Use relative hyperlinks for local links

When referencing another page within the New Relic Developer Site hyperlinks should use relative paths 
(not include the full domain). This guarantees that all links function when running locally or in preview.

```md
<!-- Good -->
[README](/README.md)

<!-- Bad -->
[README](https://www.developers.newrelic.com/README.md)
```

## Mark localhost URLs as code strings
Unless you’re running `gatsby develop` or `gatsby build` locally, 
localhost links will not work. Therefore it’s recommended to list these URL 
references as code blocks so there aren’t invalid links throughout the docs.
`
```md
<!-- Good -->
open your site with `http://localhost:8000/`

<!-- Bad -->
open your site with [http://localhost:8000/](http://localhost:8000/)
```

## Indicate when something is optional

When a paragraph or sentence offers an optional path, the beginning of the first sentence should indicate that it’s optional. For example, “if you’d like to learn more about xyz, see our reference guide” is clearer than “Go to the reference guide if you’d like to learn more about xyz.”

This method allows people who would not like to learn more about xyz to stop reading the sentence as early as possible.  This method also allows people who would like to learn more about xyz to recognize the opportunity to learn quicker instead of accidentally skipping over the paragraph.

## Abbreviate terms

If you want to abbreviate a term, write it out fully first, then 
put the abbreviation in parentheses. you then can use the abbreviation going for the rest of the article. 
For example, “In computer science, an abstract syntax tree (AST) is …”

## Use SEO optimized titles and descriptions

When defining your titles and descriptions for your pages focus on Search Engine Optimization (SEO) best practices. use terms such as:

```
@TODO Need to obtain a list from NR marketing....
```

However if you need to make a choice between SEO and clarity, always go with a clear title and description over trying to "squeeze" in SEO terms that aren't relevant to the content of the page. 

## Using Gatsby templates

When creating pages you can use a predefined Gatsby template for your .md or .mdx files. Based on the type of page you want to create be sure to select the correct template and apply that to the Frontmatter slug key value pair for `template`. 

### Types of templates

**GuideTemplate**: Used to create education guides. 

**OtherTemplates**: will be provided in the future!

## Using Frontmatter 

When you create a Markdown file, you can include a set of key value pairs that can be used to 
provide additional data relevant to specific pages in the GraphQL data layer. 
This data is called [Frontmatter](https://www.gatsbyjs.org/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) and is denoted by the triple dashes at the start and end of the block. 

This block will be parsed by gatsby-transformer-remark as Frontmatter. 
The GraphQL API will provide the key value pairs as data in your React components.
The value that is assigned to the key slug is used in order to navigate to your post.

### Frontmatter slugs

- `path`: the relative path to the file
- `duration`: the estimated time to complete the exercise 
- `title`: the title of the page
- `template`: the Gatsby template used
- `description`: the description of the page

### Frontmatter example 

Be aware that all Frontmatter slugs are `required`.

```md
---
path: '/build-apps/add-time-picker-guide'
duration: '20 min' 
title: 'Add the time picker to a sample application'
template: 'GuideTemplate'
description: 'Example guide page'
---
```

# Grammar and formatting

## Format titles 

All titles and descriptions should be sentence case.

Titles should aim be brief and still convey a comprehensive meaning of the page. 
Because titles show up throughout the docs in navigation elements (like breadcrumbs, and sidebar navigation) use shorter names to mitigate visual clutter.

## Format headers

Avoid using `H1` header; that is reserved for the title of each page.

All headers should be sentence case. When using `H2`, `H3` and `H4` please ensure that you follow a logical hierarchy and properly use sub headers through out your pages. 


## Format code blocks, inline code, videos, and images

Please use the [Markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) as reference when creating and editing Markdown files.

### Inline code and code blocks

Please refer to the [formatting inline code and code blocks section](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) in the Markdown cheat sheet to learn how to format code in Markdown.   

### Adding images

Please refer to the [images section](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images) in the Markdown cheat sheet to learn how to use images in your Markdown. If the images aren’t already hosted somewhere, you’ll need host them in...tbd

 ### Adding videos
 Please refer to the [videos section](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#youtube-videos) in the Markdown cheat sheet to learn how use videos in your Markdown.  If the videos aren’t already hosted somewhere, you’ll need host them in...tbd

```
 @TODO where do we host images and videos? 
```

### Code Formatting: Type Tab

Each code snippet can include a tab indicating the language type the snippet contains.
 For example, the following YAML snippet will display a “YAML” tab.

```md
```yaml
- id: Joe Doe
  bio: Thinks documentation is the coolest.
```

```yaml
- id: Joe Doe
  bio: Thinks documentation is the coolest.
```

Please use the following language keywords where appropriate:

  - javascript or js
  - jsx
  - graphql
  - html
  - css
  - shell
  - yaml
  - markdown
  - diff
  - flow

If a language keyword is omitted, the type will show as TEXT (as shown above)

### Code formatting: Titles

Where appropriate, add code titles to your code blocks. Switching between multiple files in the course of the document can confuse some readers. It’s best to explicitly tell them where the code example should go just add `:title=your-path-name` to the code block.

```md
```javascript:title=src/util/alert.js
const s = "Test Alert!"
alert(s)
```

```javascript:title=src/util/alert.js
const s = "Test Alert!"
alert(s)
```

### Code formatting: Line Highlighting 

You can also include line highlighting in your code snippets, using the following 
keywords as comments inline in the snippet: 

`highlight-line`: highlights the current line

```md
```javascript:title=gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `New Relic Developers`, // highlight-line
    siteUrl: `https://www.developers.newrelic.com`,
  },
}
```

```javascript:title=gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `New Relic Developers`, // highlight-line
    siteUrl: `https://www.developers.newrelic.com`,
  },
}
```


`highlight-next-line`: highlights the next line

```md
```javascript:title=gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `New Relic Developers`, // highlight-next-line
    siteUrl: `https://www.developers.newrelic.com`,
  },
}
```

```javascript:title=gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `New Relic Developers`, // highlight-next-line
    siteUrl: `https://www.developers.newrelic.com`,
  },
}
```


`highlight-start` & `highlight-end`: highlights a range

```md
```javascript:title=gatsby-config.js
// highlight-start
module.exports = {
  siteMetadata: {
    title: `New Relic Developers`, 
    siteUrl: `https://www.developers.newrelic.com`,
  },
  // highlight-end
}
```

```javascript:title=gatsby-config.js
// highlight-start
module.exports = {
  siteMetadata: {
    title: `New Relic Developers`, 
    siteUrl: `https://www.developers.newrelic.com`,
  },
}
 // highlight-end
```

## Capitalize proper nouns

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in pages.

- New Relic One
- GraphQL
- NerdGraph
- Nerdpack
- Nerdlet
- NerdStorage
- NRQL
- CLI
- JavaScript (capital letters in “J” and “S” and no abbreviations)
- Markdown
- Node.js

```
@TODO there are probably more to add to this list?
```

## Use active voice

Use active voice instead of passive voice as it’s a more concise and straightforward way to 
communicate a subject

**passive**: *The for loop in JavaScript is used by programmers to…*

**active**: *Programmers use the for loop in JavaScript to…*

## Make lists clear with the Oxford Comma

Use the Oxford Comma except in titles. It is a comma used after the penultimate item in a 
list of three or more items, before ‘and’ or ‘or’ e.g. 

For Example: 

*The Jamstack is: JavaScript, APIs, and Markdown.*

## Prefer US English

For words that have multiple spellings, prefer the US English word over British or Canadian English. 

For example:

color over colour

behavior over behaviour

## Recommended code editors 

Choosing a code editor is a personal choice. Below are some recommended editors that make working with 
Markdown very easy.

- [Visual Studio](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- [Sublime](https://www.sublimetext.com/)


# References

This style guide was based on the [Gatsby Style Guide](https://www.gatsbyjs.org/contributing/gatsby-style-guide/#writing-process).