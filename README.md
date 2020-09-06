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

### Non-English Anchors

Non-English anchors (like Chinese, Japanese and Korean) have been supported in Gridsome [`v0.7.20`](https://github.com/gridsome/gridsome/blob/master/gridsome/CHANGELOG.md#0720-2020-08-20) by [pull request #1293](https://github.com/gridsome/gridsome/pull/1293). However, some bugs will appear if I use versions `>= 0.7.16` and I don't know why... 

So I use `v0.7.15` and have to modify `gridsome/app/entry.client.js` to support non-English anchors:

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