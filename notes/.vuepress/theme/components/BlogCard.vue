<template>
  <div class="blog-card" @click="$router.push(item.path)">
    <div class="blog-card__title">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </div>
    <div v-html="item.excerpt"></div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
.blog-card
  position relative
  margin 0 auto 20px
  padding 25px 45px
  width 100%
  overflow hidden
  border-radius $borderRadius
  border 1px solid var(--border-color)
  box-sizing border-box
  transition all .3s
  background-color var(--background-color)
  cursor pointer
  transition color .3s, box-shadow .3s, transform .3s, background-color .3s, border-color .3s
  > *
    pointer-events auto
  &:hover
    box-shadow var(--box-shadow-hover)
    transform translateY(-3px)
  &__title
    position relative
    line-height 46px
    display inline-block
    a
      color var(--text-color)
      font-weight 600
      font-size 1.4rem
    &:after
      content ""
      position absolute
      width 100%
      height 2px
      bottom 0
      left 0
      background-color var(--accent-color)
      visibility hidden
      -webkit-transform scaleX(0)
      transform scaleX(0)
      transition .3s ease-in-out
    // &:hover a
    //     color var(--accent-color)
    // &:hover:after
    //     visibility visible
    //     -webkit-transform scaleX(1)
    //     transform scaleX(1)

@media (max-width: $MQNarrow)
  .blog-card
    padding 30px 20px 10px
    &__title
      font-size 1.3rem
      line-height 28px
</style>
