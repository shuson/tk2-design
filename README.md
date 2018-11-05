# tk2-design

> tookitaki react ui components in common, based on [Ant Design](https://ant.design)

## Install

```bash
npm install --save tk2-design
```

## Usage

### before you go, setup the css from your app's entry

```js
import 'antd/dist/antd.css'
import 'tk2-design/dist/tk2-design.css'
```

### then you can do

```jsx
import React, { Component } from 'react'

import {MyComponent } from 'tk2-design'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## Example

Go inside example folder and run

```bash
yarn start
```

## Customization

There are two parts to be customized,
1. the sass files under theme directory, which control basic colors
2. the ant design customization by referring [Ant Design Theme](https://ant.design/docs/react/customize-theme)

## License

MIT
