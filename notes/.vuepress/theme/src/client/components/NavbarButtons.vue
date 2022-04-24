<script setup lang="ts">
import ToggleDarkModeButton from "@theme/ToggleDarkModeButton.vue";
import { isLinkHttp } from "@vuepress/shared";
import { computed } from "vue";
import { useThemeLocaleData } from "../composables";
import { resolveRepoType } from "../utils";

const themeLocale = useThemeLocaleData();

const enableDarkMode = computed(() => themeLocale.value.darkMode);
const authorLink = computed(() => themeLocale.value.authorLink);

const ICON_MAP = {
  github: "ri-github-line",
  gitee: "si-gitee",
  gitlab: "si-gitlab",
  bitbucket: "si-bitbucket"
};

/**
 * Get navbar config of repository link
 */
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();

  const repo = computed(() => themeLocale.value.repo);
  const repoType = computed(() =>
    repo.value ? resolveRepoType(repo.value) : null
  );

  const repoLink = computed(() => {
    if (repo.value && !isLinkHttp(repo.value)) {
      return `https://github.com/${repo.value}`;
    }

    return repo.value;
  });

  const repoLabel = computed(() => {
    if (!repoLink.value) return null;
    if (themeLocale.value.repoLabel) return themeLocale.value.repoLabel;
    if (repoType.value === null) return "Source";
    return repoType.value;
  });

  const repoIcon = computed(() => {
    if (!repoLabel.value) return null;
    if (repoLabel.value === "Source") return ICON_MAP.github;
    return ICON_MAP[repoLabel.value.toLowerCase()];
  });

  return computed(() => {
    if (!repoLink.value || !repoLabel.value || !repoIcon.value) {
      return null;
    }

    return {
      text: repoLabel.value,
      icon: repoIcon.value,
      link: repoLink.value
    };
  });
};
const navbarRepo = useNavbarRepo();
</script>

<template>
  <div class="navbar-buttons">
    <a
      v-if="navbarRepo"
      rel="noopener noreferrer"
      target="_blank"
      :href="navbarRepo.link"
    >
      <VIcon :name="navbarRepo.icon" scale="1.05" />
    </a>
    <a
      v-if="authorLink"
      rel="noopener noreferrer"
      target="_blank"
      :href="authorLink"
    >
      <VIcon name="ri-share-line" />
    </a>
    <ToggleDarkModeButton v-if="enableDarkMode" />
  </div>
</template>
