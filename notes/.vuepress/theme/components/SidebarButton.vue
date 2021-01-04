<template>
  <div
    class="sidebar-button"
    @click="$emit('toggle-sidebar')"
  >
    <v-icon name="ri-menu-line" />
  </div>
</template>

<style lang="stylus">
.sidebar-button
  cursor pointer
  display none
  width 1.5rem
  height 1.5rem
  position absolute
  padding 0.6rem
  top 0.45rem
  left 0.8rem
  .v-icon
    display block
    width 1.5rem
    height 1.5rem

@media (max-width: $MQMobile)
  .sidebar-button
    display block
</style>
