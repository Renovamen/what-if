<template>
  <header>
    <div class="header-bar"></div>
    <div class="header-inner container flex gap-30">
      <font-awesome-icon icon="bars" class="header-toggle show-for-small" @click="toggleSidebar" />
      <Logo/>
      <Nav class="flex-fit hide-for-small"/>
      <SearchForm />
      <HeaderBtn class="hide-for-small" />
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    gridsomeVersion
  }
}
</static-query>

<script>
import Logo from './Logo'
import Nav from './Nav'
import SearchForm from '@/components/SearchForm.vue'
import HeaderBtn from '@/components/HeaderBtn.vue'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    Logo,
    SearchForm,
    Nav,
    LazyHydrate,
    HeaderBtn
  },
  methods: {
    toggleSidebar() {
      if(document.querySelector(".true-sidebar")) {
        document.querySelector(".true-sidebar").classList.toggle('open');
      }
      else document.querySelector(".virtual-sidebar").classList.toggle('open');
    }
  },
}
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top: 0;
  background-color: var(--bg-transparent);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: nowrap;
  position: sticky;
  transition: background-color .3s, border-color, .3s;


  .header-bar {
    background: linear-gradient(90deg, var(--primary-color) 0%,  #8ED6FB 50%, #D32E9D 100%);
    padding: 2px;
    text-align: center;
    color:#FFF;
    font-size: 1rem;

    a {
      color: currentColor;
    }
  }

  .header-inner {
    padding: 0 var(--space);
    min-height: var(--header-height);

    @media screen and (max-width: 1024px) {
      padding: 10px var(--space) 10px;
      
      .header-toggle {
        font-size: 25px;
        margin-right: 20px;
      }
      .logo__svg {
        margin-left: -5px;
      }
    }
  }

  @media screen and (min-width: 992px) and (max-resolution: 1) {
    backdrop-filter: blur(4px);
  }

  @media screen and (min-width: 992px) and (-webkit-max-device-pixel-ratio: 1) {
    backdrop-filter: blur(4px);
  }
}
</style>
