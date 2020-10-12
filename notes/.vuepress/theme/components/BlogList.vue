<template>
    <div class="blog-list-wrapper">
        <div class="blog-list">
            <BlogCard v-for="(item) in getBlogs()" :key="item.path" :item="item" />
        </div>
    </div>
</template>

<script>
import BlogCard from './BlogCard'

export default {
  components: {
    BlogCard
  },
  methods: {
    getBlogs() {
      return this.$pagination.pages
    }
  },
};
</script>

<style lang="stylus">
.blog-list-wrapper {
  display: flex;
  align-items: flex-start;
  margin: $navbarHeight auto 100px;
  padding: 0;
  max-width: 55%;

  .blog-list {
    flex: auto;
    margin-top: 50px;
  }
}

@media (max-width: $MQNarrow) {
  .blog-list-wrapper {
    max-width: 85%;
    margin-bottom: 50px;
  }
}
</style>