<template>
  <div class="sidebar" @click.stop>
    <!-- navbar, shows on mobile only -->
    <Nav class="mobile-nav show-for-small" />

    <!-- Sidebar -->
    <template v-if="links" v-for="(group, i1) in links">
      <!-- group title -->
      <g-link v-if="group.link" class="menu-item" :to="group.link" :key="`link-${i1}`">
        <h3 class="menu-item" :key="`title-${i1}`">
          {{ group.title }}
        </h3>
      </g-link>
      <h3 v-else class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>
      
      <!-- item title -->
      <template v-for="(item, i2) in group.items">
        <g-link :exact="item.link == '/docs/'" class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`" >
          {{ item.title }}
        </g-link>
        <Catalog v-if="currentRoute() == item.link" :subtitles="subtitles" />
      </template>
    </template>

    <!-- shows on mobile only -->
    <HeaderBtn class="show-for-small"/>
  </div>
</template>

<script>
import HeaderBtn from '@/components/HeaderBtn.vue'
import Nav from '@/components/Nav.vue'
import Catalog from '@/components/Catalog'

export default {
  props: {
    subtitles: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] }
  },
  components: {
    HeaderBtn,
    Nav,
    Catalog
  },
  /*
    an inelegant solution for a strange bug:
    errors(tocbot) will occur during building without performing 'querySelector' here
    and I don't not why, but it works...
  */
  watch: {
    $route() {
      var tmp = document.querySelector(".true-sidebar")
    }
  },
  mounted(){
    // click outside the sidebar to close sidebar
    document.body.addEventListener('click',()=>{
      this.closeSidebar();
    }, false);
  },
  methods: {
    // if the sidebar is open, close it
    closeSidebar() {
      var trueSidebar = document.querySelector(".true-sidebar")
      var vituralSidebar = document.querySelector(".vitural-sidebar")

      if(trueSidebar && trueSidebar.classList.contains('open')) {
        trueSidebar.classList.remove('open');
      }
      if(vituralSidebar && vituralSidebar.classList.contains('open')) {
        vituralSidebar.classList.remove('open');
      }
    },
    currentRoute() {
      return this.$route.path
    }
  }
}
</script>