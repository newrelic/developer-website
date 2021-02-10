# Component Documentation

## Global Components

Refer to the [New Relic Gatsby Theme](https://github.com/newrelic/gatsby-theme-newrelic/blob/develop/packages/gatsby-theme-newrelic/README.md)
component documentation for details on all the components used on this site.

## Developer Site Components

Below are the components that are unique to the Developer Site. These components support patterns that are specific to the Developer Site and are not used by other sites.

## Intro

The `<Intro />` component provides formatting for the title and introduction of the markdown document.

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
yarn start
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