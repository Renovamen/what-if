<template>
  <div class="footer-wrapper">
    <span>
      Powered by
      <a target="blank" href="https://vuepress.vuejs.org">VuePress</a>, crafted
      by <a target="blank" href="https://zxh.io">Renovamen</a>.
    </span>
  </div>
</template>

<style lang="stylus" scoped>
.footer-wrapper
    padding 1.5rem 2.5rem
    border-top 1px solid var(--border-color)
    text-align center
    color var(--text-color-sub)
    a
        font-size 14px
    > span
        margin-left 1rem
        > i
            margin-right .5rem

@media (max-width: $MQMobile)
    .footer-wrapper
        padding .75rem
        a
            font-size 8px
        > span
            font-size 8px
            display block
            margin-left 0
            line-height 2rem
</style>
