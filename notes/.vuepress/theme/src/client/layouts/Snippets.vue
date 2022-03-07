<script setup lang="ts">
import Common from "@theme/Common.vue";
import SnippetCard from "@theme/SnippetCard.vue";
import { useSnippets } from "../composables";

const snippets = useSnippets();
</script>

<template>
  <Common>
    <template #page>
      <div class="snippets-title">
        <h1>Snippets</h1>
        <p style="opacity: 0.8">A space for storing these messy segments.</p>
      </div>
      <div class="snippets">
        <SnippetCard v-for="item in snippets" :key="item.path" :item="item" />
      </div>
    </template>
  </Common>
</template>
