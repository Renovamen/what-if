<template>
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
</template>

<script>
import ToggleTheme from '@/components/ToggleTheme.vue'

export default {
  components: {
    ToggleTheme,
  }
}
</script>