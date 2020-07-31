# What if?

My messy notebook, built with [Gridsome](https://gridsome.org/) and [Vue.js](https://vuejs.org/). Maybe it is unsuitable for humans to read.

Check out this notebook [here](https://notebook.renovamen.ink).

&nbsp;
## Usage

```bash
# install dependencies
npm install

# serve with hot reload at http://localhost:8080/
npm run dev # gridsome develop

# build for production with minification
npm run build # gridsome build
```

&nbsp;
## Plugins

- Fonts: [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome)

- Search: [gridsome-plugin-flexsearch](https://github.com/thetre97/gridsome-plugin-flexsearch)

- Katex: [gridsome-remark-katex](https://github.com/pchorus/gridsome-remark-katex)

- Catalog: [tocbot](https://github.com/tscanlin/tocbot)

&nbsp;
## Fixes

### None-English Anchors

Follow [this pull request](https://github.com/gridsome/gridsome/pull/1293) (haven't been merged) to support non-English anchors (like Chinese, Japanese and Korean).

Modify `gridsome/app/entry.client.js`:

```js
const { route, location } = router.resolve({ 
   path: path + ($el.search || '') + ($el.hash || '') 
}) 
```

to 

```js
const { route, location } = router.resolve({ 
   path: path + ($el.search || '') + decodeURI($el.hash || '')
}) 
```