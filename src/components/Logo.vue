<template>
  <div class="logo" @contextmenu="rightClick" oncontextmenu="return false;">
    <g-link class="logo__link flex" to="/" title="Back to home">
      <g-image class="logo__svg" src="~/assets/images/favicon.svg" alt="notebook.renovamen.ink" />
      <p class="logo__title hide-for-small">What if?</p>
    </g-link>
  </div>
</template>

<script>
export default {
  components: {

  },
  methods: {
    rightClick() {
      this.$router.push({ path: '/logo' })
      return false
    }
  }
}
</script>

<style lang="scss">
  .logo {
    &__link {
      text-decoration: none;
    }
    &__svg {
      max-width: 30px;
      height: auto;
      margin-right: 10px;
      margin-bottom: 5px;
    }
    &__title {
      font-size: 25px;
      font-weight: 500;
      color: var(--body-color);
    }
  }
</style>
