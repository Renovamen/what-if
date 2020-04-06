<template>
  <Layout class="has-sidebar docs-page" :footer="false">
    <div class="container flex flex-align-top">
      <!-- Sidebar -->
      <Sidebar :links="links" />

      <!-- Content -->
      <Section class="doc-content flex-fit" :container="containerType">
        <slot />
        <p>
          <a :href="editLink" target="_blank" class="github-edit-link">
            <font-awesome-icon icon="pencil-alt" />
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

      <!-- Catalog -->
      <Catalog v-if="catalog" :subtitles="subtitles" />
    </div>
  </Layout>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Catalog from '@/components/Catalog'

export default {
  components: {
    Sidebar,
    Catalog
  },
  props: {
    subtitles: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] },
    catalog: { type: Boolean, default: () => false },
    readme: { type: Boolean, default: () => false }
  },
  computed: {
    currentPath () {
      return this.$route.matched[0].path
    },
    editLink () {
      let path = this.currentPath
      if(this.readme) path = path + '/README'
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
    },
    containerType () {
      if(this.catalog) return "base"
      else return "doc-without-toc"
    }
  }
}
</script>