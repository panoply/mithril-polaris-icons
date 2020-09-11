## Mithril Polaris Icons

Shopify Polaris icons for [Mithril.js](#) returning each icon as a [vnode](#). You can see the full list of icons [here](https://polaris-icons.shopify.com/).

### Why?

Shopify [Polaris](https://polaris.shopify.com/) only supports React components and by doing so they help Facebook hold a monopoly on software tooling. I don't like that and I don't like React.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i mithril-polaris-icons
```

[npm](https://www.npmjs.com/)

```cli
npm install mithril-polaris-icons
```

### Usage

Each icon is returned as a [vnode](#).

```javascript
import { SomeIconName } from "polaris-icons-mithril";

export default {

  view:() => [
    m('div', [
      SomeIconName({
        backdrop: false,
        accessibilityLabel: '',
        color: 'default',
        source: ''
      })
    ])
  ]
}

```

### Related

### License

Licensed under [MIT](#LICENCE)


