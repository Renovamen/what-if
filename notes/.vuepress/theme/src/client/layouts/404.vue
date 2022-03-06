<script setup lang="ts">
import Common from "@theme/Common.vue";
import { useRouteLocale } from "@vuepress/client";
import { useThemeLocaleData } from "../composables";

const routeLocale = useRouteLocale();
const themeLocale = useThemeLocaleData();

const messages = themeLocale.value.notFound ?? ["Not Found"];
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)];
const homeLink = themeLocale.value.home ?? routeLocale.value;
const homeText = themeLocale.value.backToHome ?? "Back to home";

const emojiArray = [
  "\\(o_o)/",
  "(o^^)o",
  "(˚Δ˚)b",
  "(^-^*)",
  "(^_^)b",
  "(╯‵□′)╯",
  "(='X'=)",
  "(>_<)",
  "\\(°ˊДˋ°)/",
  "ㄟ(▔▽▔)ㄏ"
];

const getEmoji = (): string =>
  emojiArray[Math.floor(Math.random() * emojiArray.length)];
</script>

<template>
  <Common>
    <template #page>
      <div class="theme-container">
        <div class="not-found">
          <p class="emoji">{{ getEmoji() }}</p>

          <h1>404 - {{ getMsg() }}</h1>

          <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
        </div>
      </div>
    </template>
  </Common>
</template>

<style lang="scss">
@import "../styles/_variables";

.not-found {
  height: 100%;
  padding: 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a,
  h1 {
    font-size: 30px;
    font-weight: bold;
    line-height: 1;
  }

  .emoji {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  a {
    color: var(--c-text);
    &:hover {
      color: var(--c-text-accent);
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .not-found {
    a,
    h1 {
      font-size: 25px;
    }

    .emoji {
      font-size: 45px;
    }
  }
}
</style>
