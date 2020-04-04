<template>
  <DocsLayout 
    :subtitles="subtitles" 
    :links="links" 
    :catalog="this.$page.doc.catalog" 
    :readme="this.$page.doc.readme">

    <div class="post-content post mb-x2">
      <div v-html="$page.doc.content"/>
    </div>
    
  </DocsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: notePage (id: $id) {
    title
    catagory
    catalog
    readme
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
    content
  }
}
</page-query>

<script>
import links from '@/data/sidebar-links.yaml'

export default {
  computed: {
    links () {
      var group = links.find(
        group => group.catagory === this.$page.doc.catagory
      );
      return group.sidebar
    },
    subtitles() {
      // Remove h1, h4, h5, h6 titles
      // let subtitles = this.$page.doc.subtitles.filter(function(value, index, arr){
      //   return [2,3].includes(value.depth)
      // })
      // return subtitles
      return this.$page.doc.subtitles
    },
  },
  metaInfo () {
    const { title, headings } = this.$page.doc

    return {
      title: title || (headings.length ? headings[0].value : undefined)
    }
  }
}
</script>
