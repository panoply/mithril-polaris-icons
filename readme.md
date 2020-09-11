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

Each icon is exported as a function returning as [vnode](#), for example:

```javascript
import { SomeIcon, AnotherIcon } from "mithril-polaris-icons";

export default {

  view:() => [
    m('div', [
      SomeIcon(),
      AnotherIcon({
        backdrop: false,
        accessibilityLabel: 'some label',
        color: 'colorSkyLighter',
        source: 'default'
      }),
    ])
  ]
}

```

Each icon function accepts and option `object{}` parameter where you can define the `Props` as you would in React. The above example would generate:

```html

<!-- Some Icon -->
<span class="Polaris-Icon">
  <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M15 11h-4v4H9v-4H5V9h4V5h2v4h4v2zm-5-9a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" fill-rule="evenodd" /></svg>
</span>

<!-- Another Icon -->
<span class="Polaris-Icon Polaris-Icon--colorSkyLighter Polaris-Icon--isColored">
  <svg
   aria-label="some label"
   viewBox="0 0 20 20"
   class="Polaris-Icon__Svg"
   focusable="false"
   aria-hidden="true"><path d="M15 11h-4v4H9v-4H5V9h4V5h2v4h4v2zm-5-9a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" fill-rule="evenodd" /></svg>
</span>
```

### TODO

- Provide Typings
- Allow for more extensible control
- Support custom icons

### License

Licensed under [MIT](#LICENCE)


