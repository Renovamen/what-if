<template>
  <a role="button" @click.prevent="toggleTheme()"  
      :aria-label="'Toggle ' + nextTheme" 
      :title="'Toggle ' + nextTheme"
      class="toggle-theme"
    >
    <font-awesome-icon :icon="['far', 'sun']" v-if="theme === 'light'" style="font-size: 20px" class="feather feather-sun" />
    <font-awesome-icon :icon="['far', 'moon']" v-else-if="theme === 'dark'" style="font-size: 18px" class="feather feather-moon" />
    <font-awesome-icon icon="coffee" v-else-if="theme === 'sepia'" style="font-size: 18px" class="feather feather-coffee" />
  </a>
</template>

<script>
let themes = ['light', 'dark', 'sepia']

export default {
  data() {
    return {
      theme: 'light',
    }
  },
  computed: {
    nextTheme() {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      return themes[nextIndex]
    }
  },
  methods: {
    toggleTheme() {
      const currentIndex = themes.indexOf(this.theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      window.__setPreferredTheme(themes[nextIndex])
      this.theme = themes[nextIndex]
    }
  },
  async mounted() {
    // set default
    if (typeof window.__theme !== 'undefined') this.theme = window.__theme
  }
}
</script>

<style lang="scss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  width: 40px;

  &:hover {
    opacity: .8
  }
  &:focus {
    outline: none;
  }
}
</style>