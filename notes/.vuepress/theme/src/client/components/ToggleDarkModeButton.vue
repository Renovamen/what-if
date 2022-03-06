<script setup lang="ts">
import { useDarkMode, useThemeLocaleData } from "../composables";

const themeLocale = useThemeLocaleData();
const isDarkMode = useDarkMode();

const toggleDarkMode = (): void => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<template>
  <button
    class="toggle-dark-button"
    :title="themeLocale.toggleDarkMode"
    @click="toggleDarkMode"
  >
    <VIcon v-show="!isDarkMode" focusable="false" name="sun" />
    <VIcon v-show="isDarkMode" focusable="false" name="moon" />
  </button>
</template>
