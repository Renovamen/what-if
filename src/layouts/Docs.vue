<template>
  <Layout class="has-sidebar docs-page" :footer="false">
    <div class="container flex flex-align-top">
      <div class="sidebar">
        <template v-if="links" v-for="(group, i1) in links">
          <g-link class="menu-item" :to="group.link" :key="`link-${i1}`">
            <h3 class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>
          </g-link>
          <template v-for="(item, i2) in group.items">
            <g-link :exact="item.link == '/docs/'" class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
              {{ item.title }}
            </g-link>
          </template>
        </template>
      </div>
      <Section class="doc-content flex-fit" container="doc-without-toc">
        <slot />
        <p>
          <a :href="editLink" target="_blank" class="github-edit-link">
            <font-awesome-icon :icon="['fab', 'github']" />
            <span>Edit this page on GitHub</span>
          </a>
        </p>
        <nav class="docs-nav">
          <div class="docs-nav__previous">
            <g-link v-if="previousPage" exact class="button  button--small docs-nav__link" :to="previousPage.link">
              &larr; {{ previousPage.title }}
            </g-link>
          </div>
          <div class="docs-nav__next">
            <g-link v-if="nextPage" exact class="button  button--small docs-nav__link" :to="nextPage.link">
              {{ nextPage.title }} &rarr;
            </g-link>
          </div>
        </nav>
      </Section>
    </div>
  </Layout>
</template>

<script>

export default {
  props: {
    subtitles: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] }
  },
  computed: {
    currentPath () {
      return this.$route.matched[0].path
    },
    editLink () {
      let path = this.currentPath
      if((path.match(new RegExp("/", "g")) || []).length == 1) path = path + '/README'
      return `https://github.com/Renovamen/what-if/blob/master${path}.md`
    },
    items () {
      return this.links.reduce((acc, group) => (acc.push(...group.items), acc), [])
    },
    currentIndex () {
      return this.items.findIndex(item => {
        return item.link.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '')
      })
    },
    nextPage () {
      return this.items[this.currentIndex + 1]
    },
    previousPage () {
      return this.items[this.currentIndex - 1]
    }
  }
}
</script>
