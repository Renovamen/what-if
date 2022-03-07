<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true
  }
});

const getExcerpt = (excerpt: string): string => {
  return excerpt.replace(/<h1.*<\/h1>/, "");
};
</script>

<template>
  <div class="snippet-card" @click="$router.push(item.path)">
    <div class="title">
      <RouterLink :to="item.path">{{ item.title }}</RouterLink>
    </div>
    <div v-html="getExcerpt(item.excerpt)"></div>
  </div>
</template>
