<template>
  <header>
    <div class="header-bar"></div>
    <div class="header-inner container flex gap-30">

      <Logo/>

      <Nav class="flex-fit"/>

      <SearchForm />

      <nav class="header-actions flex">
        <ToggleTheme />

        <a
          aria-label="Blog"
          href="//renovamen.ink"
          rel="noopener noreferrer"
          target="_blank"
          title="My blog"
        >
          <font-awesome-icon icon="share-alt" />
        </a>

        <a
          aria-label="github"
          href="//github.com/Renovamen/what-if"
          rel="noopener noreferrer"
          target="_blank"
          title="Renovamen/what-if @ GitHub"
        >
          <font-awesome-icon :icon="['fab', 'github']" style="font-size: 20px" />
          <!-- <span
            class="hide-for-small"
            style="margin-left:5px;"
          >v{{ $static.metadata.gridsomeVersion }}</span> -->
        </a>
      </nav>
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
import ToggleTheme from '@/components/ToggleTheme.vue'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    Logo,
    ToggleTheme,
    SearchForm,
    Nav,
    LazyHydrate
  }
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
  }

  @media screen and (min-width: 992px) and (max-resolution: 1) {
    backdrop-filter: blur(4px);
  }

  @media screen and (min-width: 992px) and (-webkit-max-device-pixel-ratio: 1) {
    backdrop-filter: blur(4px);
  }
}
</style>
