<template>
  <nav class="nav-buttons">
    <ToggleMode />

    <a v-if="authorLink" :href="authorLink" rel="noopener noreferrer" target="_blank">
      <font-awesome-icon icon="share-alt" style="font-size: 18px" class="blog" />
    </a>

    <a v-if="repoLink" :href="repoLink" rel="noopener noreferrer" target="_blank">
      <font-awesome-icon :icon="['fab', repoLabel]" style="font-size: 20px" />
    </a>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faBitbucket } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import ToggleMode from '@theme/components/ToggleMode'

library.add(faShareAlt, faGithub, faGitlab, faBitbucket)

export default {
  components: {
    ToggleMode,
    FontAwesomeIcon
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
      const platformIcons = ['github', 'gitlab', 'bitbucket']
      for (let i = 0; i < platformIcons.length; i++) {
        const icon = platformIcons[i]
        if (new RegExp(icon, 'i').test(repoHost)) {
          return icon
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
	svg
    transition color .2s
    color var(--text-color)
    margin-top 7px
    background-color transparent
    border 0
    &:hover
      color var(--accent-color)
</style>