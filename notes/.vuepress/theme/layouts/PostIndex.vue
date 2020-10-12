<template>
    <Common>
        <div class="title">
            <h1>Snippets</h1>
            <p style="opacity: .8">A space for storing these messy segments.</p>
        </div>
        <BlogList />
        <Footer class="footer" />
    </Common>
</template>

<script>
import BlogList from '@theme/components/BlogList.vue'
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common.vue'

export default {
    name: 'PostIndex',

    components: {
        BlogList,
        Common,
        Footer
    },
}
</script>

<style lang="stylus" scoped>
.title {
    text-align: center;
    margin: $navbarHeight auto -50px;
    h1 {
       padding-top: 50px;
    }
    p {
        font-size: 1.1rem;
    }
}
</style>