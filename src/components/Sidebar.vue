<template>
    <div class="sidebar">
        <template v-if="links" v-for="(group, i1) in links">
          <!-- group title -->
          <h3 v-if="group.link" class="menu-item" :key="`title-${i1}`">
            <g-link class="menu-item" :to="group.link" :key="`link-${i1}`">
              {{ group.title }}
            </g-link>
          </h3>
          <h3 v-else class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>
          
          <!-- item title -->
          <template v-for="(item, i2) in group.items">
            <g-link :exact="item.link == '/docs/'" class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
              {{ item.title }}
            </g-link>
          </template>
        </template>
      </div>
</template>

<script>
export default {
  props: {
    links: { type: Array, default: () => [] }
  },
}
</script>