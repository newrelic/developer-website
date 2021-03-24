# Component Documentation

## Global Components

Refer to the [New Relic Gatsby Theme](https://github.com/newrelic/gatsby-theme-newrelic/blob/develop/packages/gatsby-theme-newrelic/README.md)
component documentation for details on all the components used on this site.

## Developer Site Components

Below are the components that are unique to the Developer Site. These components support patterns that are specific to the Developer Site and are not used by other sites.

## Intro

The `<Intro />` component provides formatting for the title and introduction of the markdown document.

### Usage

It takes the title provided in the front matter and accepts plain text for the description. An example of front matter that will have a title of **Example Guide**:

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

This is a description for the markdown guide.

```html
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

You can also use images in steps.

```md
<Step>

# Image example

A step description
<img src="../images/folder/great-img.png" alt="and here's an image to follow">

</Step>
```

> Note: keep in mind that a new line is necessary after an `img` tag to ensure proper rendering of subsequent text/markdown.

# Tutorial 

## Usage

The `<Tutorial/>` component can be used to help a user step through changes in code by highlighting the difference between each step. It utilizes children `<Steps>` and `<Step>` components to find codeblocks with new code based off of the starting code. You can set the starting code as the first child of the `<Tutorial>` with the `<Project>` component. In order to use the tutorial component, you must set a `fileName` for your codeblocks so that the parser can find the corresponding codeblocks with changes in them. 

````md
  <Tutorial>

  <Project>

  ```jsx fileName="myfile.js"
  const myCode = "here is my starting code" 
  ```

  </Project>

  ## Here is my tutorial! 

  <Steps>

  <Step>

  ```jsx fileName="myfile.js"
  const myCode = "here is my code" 
  const myNewCode = "here is my new code"
  ```

  </Step>

  <Step>

  ```jsx fileName="myfile.js"
  const myCode = "here is my code" 
  const myNewCode = "here is my new code"
  const evenMoreNewCode = "he is even more new code"
  ```

  </Step>

  </Tutorial>
````

In this example, for the first step the second line (`myNewCode`) will be highlighted, and for the second step, the third line (`evenMoreNewCode`) will be highlighted.

You can also pass in multiple codeblocks to the `<Project>` component and the parser will track all changes in each of the codeblocks. The multiple codeblocks will show up as tabs of the same editor, mimicking how a user might actually be editing these files in their IDE. For example: 

````md
  <Tutorial>

  <Project>

  ```jsx fileName="myfile.js"
  const myCode = "here is my starting code" 
  ```

  ```css fileName="mystyles.css"
  .myStyle {
    color: blue;
  } 
  ```

  </Project>

  ## Here is my tutorial! 

  <Steps>

  <Step>

  ```jsx fileName="myfile.js"
  const myCode = "here is my code" 
  const myNewCode = "here is my new code"
  ```

  </Step>

  <Step>

  ```css fileName="mystyles.css"
  .myStyle {
    color: blue;
    font-size: 1000px;
  } 
  ```

  </Step>

  </Tutorial>
````

In this example, in the first step, line 2 will be highlighted (`myNewCode`) and in the second step, line 3 will be highlighted (`font-size: 1000px`). Both steps will have both files, where as the default file shown will be `myfile.js` for the first step and `mystyles.css` for the second step. Users can toggle between the two files to see what the current state of the code is.