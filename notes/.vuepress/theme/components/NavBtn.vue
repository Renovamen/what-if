<template>
  <nav class="nav-buttons">
    <ToggleMode />

    <a
      v-if="authorLink"
      rel="noopener noreferrer"
      target="_blank"
      :href="authorLink"
    >
      <v-icon
        name="fa-share-alt"
        scale="1.05"
      />
    </a>

    <a
      v-if="repoLink"
      rel="noopener noreferrer"
      target="_blank"
      :href="repoLink"
    >
      <v-icon
        :name="repoLabel"
        scale="1.2"
      />
    </a>
  </nav>
</template>

<script>
import ToggleMode from '@theme/components/ToggleMode'

export default {
  components: {
    ToggleMode
  },

  computed: {
    authorLink () {
      return this.$site.themeConfig.authorLink
    },

    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
      return null
    },

    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }
      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platformIcons = ['gitlab', 'github', 'bitbucket']
      for (let i = 0; i < platformIcons.length; i++) {
        const icon = platformIcons[i]
        if (new RegExp(icon, 'i').test(repoHost)) {
          return `fa-${icon}`
        }
      }

      return 'Source'
    }
  }
}
</script>

<style lang="stylus">

.nav-buttons
  a
    width 25px
	.v-icon
    transition color .2s
    color var(--text-color)
    vertical-align middle
    background-color transparent
    border 0
    &:hover
      color var(--accent-color)
</style>