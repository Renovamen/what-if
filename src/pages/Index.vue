<template>
  <Layout class="layout-homepage">

    <LazyHydrate when-idle>
      <home-intro-simple />
    </LazyHydrate>
    
  </Layout>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'

export default {
  components: {
    LazyHydrate,
    HomeIntroSimple,
  },
  
  metaInfo: {
    title: 'What if?'
  }
}
</script>

<style>
@media screen and (min-width: 850px) {
  .layout-homepage header{
    border-color: transparent;  
  }
}
</style>


