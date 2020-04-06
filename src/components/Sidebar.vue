<template>
  <div class="sidebar">
    <template v-if="links" v-for="(group, i1) in links">
      <!-- group title -->
      <g-link v-if="group.link" class="menu-item" :to="group.link" :key="`link-${i1}`">
        <h3 class="menu-item" :key="`title-${i1}`" @mousedown="closeSidebar">
          {{ group.title }}
        </h3>
      </g-link>
      <h3 v-else class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>
      
      <!-- item title -->
      <template v-for="(item, i2) in group.items">
        <g-link :exact="item.link == '/docs/'" class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
          <span @mousedown="closeSidebar">{{ item.title }}</span>
        </g-link>
      </template>
    </template>
    <HeaderBtn class="show-for-small"/>
  </div>
</template>

<script>
import HeaderBtn from '@/components/HeaderBtn.vue'

export default {
  props: {
    links: { type: Array, default: () => [] }
  },
  components: {
    HeaderBtn
  },
  methods: {
    closeSidebar() {
      document.querySelector(".sidebar").classList.remove('open');
    }
  },
}
</script>