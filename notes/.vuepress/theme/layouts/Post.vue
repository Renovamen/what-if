<template>
    <Common>
        <div class="post-container">
            <h1 class="title">{{ $page.title }}</h1>
            <Page />
        </div>
        <Footer class="footer" />
    </Common>
</template>

<script>
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common.vue'
import PageEdit from '@theme/components/PageEdit.vue'
import Page from '@theme/components/Page.vue'

export default {
    name: 'Post',
    components: {
        Footer,
        Common,
        PageEdit,
        Page
    },
}
</script>


<style lang="stylus">
.post-container {
    margin: $navbarHeight auto 0;
    word-wrap: break-word;
    word-break: normal;
    .title {
        text-align: center;
        margin-bottom: -50px;
        padding-top: 50px;
        max-width: 95%;
    }
}
</style>