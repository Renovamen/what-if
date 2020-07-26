<template>
  <nav v-if="links" class="main-nav flex gap-15">
    <template v-for="(group, i1) in links">

      <div v-if="group.submenu" :key="`group-${i1}`" class="has-dropdown">
        <g-link :to="group.link" :key="`link-${i1}`">
          <span class="main-nav__label">{{ group.title }}</span>
        </g-link>
        <div class="dropdown">
          <li v-for="(item, i2) in group.submenu" :key="`item-${i1}-${i2}`">
            <g-link :key="`link-${i1}-${i2}`" :to="item.link">{{ item.title }}</g-link>
          </li>
        </div>
      </div>

      <g-link v-else :to="group.link" :key="`link-${i1}`">
        <span class="main-nav__label">{{ group.title }}</span>
      </g-link>

    </template>
  </nav>
</template>


<script>
import links from '@/data/navbar-links.yaml'

export default {
  computed: {
    links () {
      console.log(links)
      return links
    },
  },
}
</script>


<style lang="scss">
.main-nav {
  flex-wrap: nowrap;
}
</style>
