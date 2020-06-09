# Globally available components


## Video

`<Video />` component provides formatting for videos in markdown. 

### Usage 

The Video component expects two parameters: 
- `id`: the video ID
- `type`: the host of the video (currently only set up for  `wistia` or `youtube`)

```md
<Video id="zxunt1u1as" type="wistia"/>
```

## Intro

The `<Intro />` component provides formatting for the title and introduction of the markdown document. 

### Usage
It takes the title provided in the Frontmatter and accepts plain text for the description. It also accepts a `<Video />` component as a child, which it will place on the right side of the description. 

```md 
<Intro>
This is a description for the markdown guide.

<Video id="zxunt1u1as" type="youtube"/>
</Intro>
```

If there is a more than plain text and a `<Video />` (such as a code snippet or another component) the content will be posted on the right side below the description.


## Steps

The `<Steps />` is a container for the individual `<Step />` components and will autonumber from top to bottom. 

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

The individual `<Step />` expects an optional h2 as the title of the step. 

```md
<Step>

## Step Title
</Step>
```

A second h2 tag will render as a normal H2 tag and not as the step title. 

```md
<Step>

## Step Title 
## Normal h2 title
</Step>
```
There must be a line break before the h2 tag or the component will not render it correctly. For example, this will __not__ render correctly: 
```md
<Step>
## Step Title
</Step>
```

Step will also take plain text as a description and a code snippet in standard three back tick form. 
```md
<Step>

## Step Title
Step description

    ```shell
    finishstep
    ```
</Step>
```
The code snippet will always render to the right.

## Code Snippet

Code Snippets are automatically formatted by three backticks. 

### Usage

There are three props that can be supplied to a code snippet. 

- `language`: The first prop must be a code language. [Here] () is a list of accepted languages for syntax highlighting. 

    ```md
    ```jsx
    ```
- `lineNumbers`: `true` or `false`. Will show line numbers of the left side of the code, defaults to `true`. 
    ```md
    ```jsx lineNumbers=false
    ```
- `copy`: `true` or `false`. Will display or not display the copy button, defaults to `true`
    ```md
    ```jsx copy=false
    ```