<template>
  <div id="app" dark>
    <Header />
    <!-- sidebar for pages with no sidebar on desktop -->
    <Sidebar class="virtual-sidebar show-for-small" />
    <slot />
    <Footer v-if="footer !== false" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default {
  props: ['footer', 'primary-bg'],
  components: {
    Header,
    Footer,
    Sidebar
  },
  computed: {
    mainClass() {
      let classes = []
      if(this.primaryBg) classes.push('main--bg-teritary')
      return classes
    },
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app main {
  flex: 1;
}
.main--bg-teritary {
  background-color: var(--bg-teritary);
}
</style>
