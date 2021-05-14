<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <div class="hero">
      <h1 v-if="data.heroText !== null" id="main-title">
        {{ data.heroText || $title || "Hello" }}
      </h1>

      <p class="description">
        Renovamen's messy notebook, maybe it is unsuitable for humans to read...
        This notebook is powered by
        <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a>,
        hosted by
        <a href="https://pages.github.com/" target="_blank">Github Pages</a> and
        <a href="https://vercel.com/" target="_blank">Vercel</a>.
      </p>
    </div>

    <!-- <Content class="theme-default-content custom" /> -->
  </main>
</template>

<script>
export default {
  name: "Home",

  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
.home
  height calc(100vh - 74px)
  max-width $homePageWidth
  margin 0 auto
  display flex
  flex-direction column
  align-items center
  justify-content center
  .hero
    text-align center
    max-width 610px
    margin-top 65px
    h1
      font-size 3.3rem
      margin-top 0
      margin-bottom 1.8rem
    .description
      line-height 1.5
      font-size 1.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    height calc(100vh - 57px)
    .hero
      h1
        font-size 2rem
        margin-bottom 1.2rem
      .description
        font-size 1.2rem
</style>
