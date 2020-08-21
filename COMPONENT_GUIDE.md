# Globally available components

## Video

`<Video />` component provides formatting for videos in markdown.

### Usage

The Video component requires two props:

- `id`: the video ID
- `type`: the host of the video. Accepted values are:
  - `wistia`
  - `youtube`

```md
<Video id="zxunt1u1as" type="wistia"/>
```

## Intro

The `<Intro />` component provides formatting for the title and introduction of the markdown document.

### Usage

It takes the title provided in the Frontmatter and accepts plain text for the description. An example of Frontmatter that will have a title of **Example Guide**:

```
---
path: '/example'
duration: '30 min'
title: 'Example Guide'
template: 'GuideTemplate'
description: 'Example guide page'
---
```

It also accepts a `<Video />` component as a child, which it will place on the left side of the description.

```md
<Intro>
This is a description for the markdown guide.

<Video id="zxunt1u1as" type="youtube"/>
</Intro>
```

If there is a more than plain text and a `<Video />` (such as a code snippet or another component) the content will be posted on the left side below the description.

## Steps

The `<Steps />` is a required container for the individual `<Step />` components and will autonumber from top to bottom.

### Usage

The Steps component accepts `<Step/>` components as its children and will increment by the number of child components.

```md
<Steps>

<Step>

## Step 1

Step 1 description.
</Step>

<Step>

## Step 2

Step 2 description
</Step>

</Steps>
```

If there is markdown content not wrapped by a `<Step />` component, it will still auto-increment for that content, so be sure to wrap all content with the Step component. For example:

```md
<Steps>

<Step>
This will read as Step 1 of 3.
</Step>

This will display as is with no step counter.

<Step>
This will read as Step 3 of 3.
</Step>

</Steps>
```

## Step

### Usage

The `<Step />` component renders a single step in the series of steps. This is
meant to use in conjunction with `<Steps />`, so this component **MUST** be
wrapped by `<Steps />` to work properly. The following example will contain 2
steps:

```md
<Steps>
  <Step>Some information about step 1</Step>
  <Step>Some information about step 2</Step>
</Steps>
```

The previous example will interpret the text inside of the `<Step />` as plain
text. If you would like the `<Step />` component to interpret the text as
markdown content, include a line break after the opening tag:

```md
<Step>

# This is a title for the step.

This is some information about this step.
</Step>
```

You can intersperse code blocks inside of the step. Code snippets will always
render in a right column next to the description.

````md
<Step>

# A code example

Run the following command in your terminal:

```shell
npm start
```

</Step>
````

You can include multiple code blocks in a single step. Code blocks will always
be rendered to the right of the text that precedes it.

````md
<Step>

# Another code example

Run the following in your terminal:

```shell
npm start
```

When that is running, edit index.js and replace the component with the following
code:

```js
return <div>Hello, {props.name}</div>;
```

</Step>
````

You can also use images in steps. To get an image to appear on the right side as with code blocks, you must use an HTML `img` tag, traditional markdown will not align the image to the right.

```md
<Step>

# Image example

A step description
<img src="../images/folder/great-img.png" alt="and here's an image to follow">

</Step>
```

> Note: keep in mind that a new line is necesary after an `img` tag to ensure proper rendering of subsequent text/markdown.

## Code blocks

Code blocks are automatically formatted by three backticks. This is our preferred method to delineate code snippets, but it's worth noting that markdown will also consider any text that is indented 4 spaces (or 1 tab) to be a code block.

### Usage

There are four props that can be supplied to a code snippet.

- `language`: The first prop must be a code language. [Here](https://prismjs.com/#supported-languages) is a list of accepted languages for syntax highlighting.

  ````md
  ```jsx
  ```
  ````

- `lineNumbers`: `true` or `false`. Will show line numbers of the left side of the code, defaults to `false`.

  ````md
  ```jsx lineNumbers=true
  ```
  ````

- `lineHighlight`: Will highlight lines of code in the snippet. You can supply individual line numbers separted by commas, or ranges by using a hyphen. Be sure not to use any spaces.

  ````md
  ```jsx lineHighlight=1,3,6-8,10
  ```
  ````

- `copy`: `true` or `false`. Will display or not display the copy button, defaults to `true`
  ````md
  ```jsx copy=false
  ```
  ````

## Callouts

Callouts direct your attention to information of special importance or to information that doesn't fit smoothly into the main text.

- Caution: Screams at you that this could cause a crash or cost you data loss beyond the task at hand.
- Important: Urges awareness that this could impair the task at hand or cost you time if you ignore the text.
- Tip: Whispers to you that this is nice to know, like a shortcut, best practice, or reminder.

### Usage

```md
<Caution>

Text with `markdown`.

</Caution>

<Important>

Text with `markdown`.

</Important>

<Tip>

Text with `markdown`.

</Tip>
```

All callouts have default titles that can be overridden like this:

```md
<Caution title="A custom title">

Text

</Caution>
```

## Related Resources

The related resources component is controlled by specific Frontmatter slugs that
are defined on a page.

By setting the Frontmatter for `resources` and `tags` you can control what is populated
in this component. Please review the [Style Guide](STYLE_GUIDE.md) for further details
on these slugs.

### Maximum references

This component allows a maximum of 5 resources.

### Resource population logic

If no resources or tags are available in the page Frontmatter the component will fallback
to using the page title as the search query term but you will
always have 5 results, assuming Swiftype can return 5 results for that query.

### Order of priority

The order of priority for populating content in this component is driven by:

1. Any resources defined in the page Frontmatter.
2. Any tags defined in the the page Frontmatter will send a search query term and return results from Swiftype.
   2b. Any Swifttype results that match the page title.

### Resource site tags

Resource site tags control the labels that appears below each resource URL. These
can be found in the [Resources.js](./src/components/RelatedContentModules/Resources.js).
If you are adding a resource that doesn't currently have a defined site tag, you will need to
modify this file an add a new site tag accordingly.

When naming the site tag the site domain name should be used for the site tag name.
