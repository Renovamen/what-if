<template>
  <div class="blog-item" @click="$router.push(item.path)">
    <div class="title">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </div>
    <div class="abstract" v-html="item.excerpt"></div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
.blog-item
    position relative
    margin: 0 auto 20px;
    padding: 16px 20px;
    width 100%
    overflow: hidden;
    border-radius: $borderRadius
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
    transition all .3s
    background-color var(--background-color)
    cursor: pointer;
    > * {
        pointer-events: auto;
    }
    &:hover
        box-shadow: var(--box-shadow-hover)
    .title
        position: relative;
        font-size: 1.4rem;
        line-height: 46px;
        display: inline-block;
        a
            color: var(--text-color);
        &:after
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: $accentColor;
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            transition: .3s ease-in-out;
        &:hover a
            color $accentColor
        &:hover:after
            visibility visible
            -webkit-transform: scaleX(1);
            transform: scaleX(1);

@media (max-width: $MQNarrow) {
    .blog-item .title {
        font-size: 1.3rem;
        line-height: 28px;
    }
}
</style>