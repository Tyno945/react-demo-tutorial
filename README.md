# Getting Started with React - An Overview and Walkthrough

#### Prerequisites

- Basic familiarity with [HTML & CSS](https://internetingishard.com/).
- Basic knowledge of [JavaScript](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript) and programming.
- Basic understanding of [the DOM](https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model).
- Familiarity with [ES6 syntax and features](/es6-syntax-and-feature-overview/).
- [Node.js and npm](/how-to-install-and-use-node-js-and-npm-mac-and-windows/) installed globally.

#### Goals

- Learn about essential React concepts and related terms, such as Babel, Webpack, JSX, components, props, state, and lifecycle.
- Build a very simple React app that demonstrates the above concepts.

[View Source on GitHub](https://github.com/taniarascia/react-tutorial)

## What is React?

- React is a JavaScript library - one of the most popular ones, with [over 100,000 stars on GitHub](https://github.com/facebook/react).
- React is not a framework (unlike Angular, which is more opinionated).
- React is an open-source project created by Facebook.
- React is used to build user interfaces (UI) on the front end.
- React is the **view** layer of an MVC application (Model View Controller)

One of the most important aspects of React is the fact that you can create **components**, which are like custom, reusable HTML elements, to quickly and efficiently build user interfaces. React also streamlines how data is stored and handled, using **state** and **props**.

## Setup and Installation

### Static HTML File

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      // React code will go here
    </script>
  </body>
</html>
```

> commit-id 2f9d7dc

`git reset --hard 2f9d7dc`

### Create React App

```bash
npx create-react-app react-tutorial
cd react-tutorial
npm start
```

> commit-id fbf4a8

`git reset --hard fbf4a8`

### React Developer Tools

There is an extension called React Developer Tools that will make your life much easier when working with React. Download [React DevTools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), or whatever browser you prefer to work on.

## JSX: JavaScript + XML

JSX is actually closer to JavaScript, not HTML, so there are a few key differences to note when writing it.

- `className` is used instead of `class` for adding CSS classes, as `class` is a reserved keyword in JavaScript.
- Properties and methods in JSX are camelCase - `onclick` will become `onClick`.
- Self-closing tags _must_ end in a slash - e.g. `<img />`

JavaScript expressions can also be embedded inside JSX using curly braces, including variables, functions, and properties.

```jsx
const name = 'Tania'
const heading = <h1>Hello, {name}</h1>
```

## Components

### Class Components

```jsx
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

export default App
```

### Simple Components

```jsx
const SimpleComponent = () => {
  return <div>Example</div>
}
```

> commit-id d76bd3d

`git reset --hard d76bd3d`

## Props

Props are an effective way to pass existing data to a React component, however the component cannot change the props - they're read-only. 

> commit-id 5809b02

`git reset --hard 5809b02`

## State

You can think of state as any data that should be saved and modified without necessarily being added to a database - for example, adding and removing items from a shopping cart before confirming your purchase.

> commit-id c4effea

`git reset --hard c4effea`

## Submitting Form Data

Our goal for this form will be to update the state of `Form` every time a field is changed in the form, and when we submit, all that data will pass to the `App` state, which will then update the `Table`.

> commit-id cd18d4c

`git reset --hard cd18d4c`

## Pulling in API Data

One very common usage of React is pulling in data from an API. If you're not familiar with what an API is or how to connect to one, I would recommend reading [How to Connect to an API with JavaScript](/how-to-connect-to-an-api-with-javascript/), which will walk you through what APIs are and how to use them with vanilla JavaScript.

**Lifecycle** is the order in which methods are called in React. **Mounting** refers to an item being inserted into the DOM.

When we pull in API data, we want to use `componentDidMount`, because we want to make sure the component has rendered to the DOM before we bring in the data.

> commit-id 0bd1e47

`git reset --hard 0bd1e47`

## Building and Deploying a React App

Now, if you just want to compile all the React code and place it in the root of a directory somewhere, all you need to do is run the following line:

```bash
npm run build
```