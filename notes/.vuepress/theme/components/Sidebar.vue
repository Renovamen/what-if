<template>
  <aside class="sidebar">
    <NavLinks />

    <slot name="top" />

    <SidebarLinks :depth="0" :items="items" />
    <slot name="bottom" />

    <NavBtn />
  </aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";
import NavBtn from "@theme/components/NavBtn.vue";

export default {
  name: "Sidebar",

  components: {
    SidebarLinks,
    NavLinks,
    NavBtn
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="stylus">
.sidebar
  &&::-webkit-scrollbar
    width 0
    height 0
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid var(--border-color)
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1em
      padding 0.5rem 0 0.5rem 1.5rem
      button span
        font-size 1em
        color var(--text-color)
  .nav-buttons
    display none
    padding 0.5rem 0 0.75rem 0
    margin-left 0.4rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem
  .sidebar-group-items
    li.sidebar-header > a.sidebar-link.active
      background-color var(--background-color-secondary)

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    .nav-buttons
      display block
    & > .sidebar-links
      padding 1rem 0
</style>
