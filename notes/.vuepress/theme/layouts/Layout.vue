<template>
  <Common :sidebarItems="sidebarItems">
    <Home v-if="$page.frontmatter.home" />
    
    <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
    
    <Footer
      v-if="$page.frontmatter.home"
      class="footer"
    />
  </Common>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Page from '@theme/components/Page.vue'
import Common from '@theme/components/Common.vue'
import Footer from '@theme/components/Footer'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Common,
    Footer
  },
  
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
  },
}
</script>