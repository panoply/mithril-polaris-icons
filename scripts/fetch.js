const { readdir, readFile, writeFile } = require('fs-extra')
const { parse } = require('svg-parser')
const { camelCase, upperFirst } = require('lodash')


const string = prop => JSON.stringify(prop)

function vnode({
  children: [
    {
      tagName,
      properties,
      children: [c]
    }
  ]
}) {

  return [
    'm("span", { class: "Polaris-Icon__Svg" + (i.color ? (" Polaris-Icon--" + i.color + " Polaris-Icon--isColored") : "") + (i.backdrop ? " Polaris-Icon--hasBackdrop"  : "") },',
    `m("${tagName}", ${string(properties)},`,
        'i.source === "placeholder" ?',
          'm(".Polaris-Icon__Placeholder") : ',
          `m("${c.tagName}", ${string(c.properties)})`,
      ')',
    ')'
  ].join('')

}

async function readIcon(path) {

  const file = await readFile(`node_modules/@shopify/polaris-icons/images/${path}`)
 // const icon = `export default () => m('')`
  const attrs = parse(file.toString())

 return `export const ${upperFirst(camelCase(path.replace('.svg', '')))} = (i = {}) => ${vnode(attrs)};`

}

async function getIcons () {

  const icons = await readdir('node_modules/@shopify/polaris-icons/images')
  const items = []

  for (const icon of icons) {
    const item = await readIcon(icon)
    items.push(item)
  }


  const content = 'import m from "mithril";' + '\n\n' + items.join('\n\n')

  await writeFile('index.js', content)


}

module.exports = getIcons()
