<script setup lang="ts">
import { usePageFrontmatter, useSiteLocaleData } from "@vuepress/client";
import { computed } from "vue";
import type { DefaultThemeHomePageFrontmatter } from "../../shared";

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>();
const siteLocale = useSiteLocaleData();

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null;
  }
  return frontmatter.value.heroText || siteLocale.value.title || "Hello";
});
</script>

<template>
  <main class="home">
    <h1 v-if="heroText" class="hero-title">
      {{ heroText }}
    </h1>

    <div class="theme-default-content custom hero-content">
      <Content />
    </div>
  </main>
</template>
