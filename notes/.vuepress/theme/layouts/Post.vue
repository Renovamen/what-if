<template>
    <Common>
        <div class="post-wrapper">
            <h1 class="title">{{ $page.title }}</h1>
            <Content/>
        </div>
        <Footer class="footer" />
    </Common>
</template>

<script>
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common.vue'

export default {
    name: 'Post',
    components: {
        Footer,
        Common
    },
}
</script>


<style lang="stylus">
.post-wrapper {
    width: 60%;
    margin: $navbarHeight auto 100px;
    font-size: 1.15rem;
    word-wrap: break-word;
    word-break: normal;
    .title {
        text-align: center;
        margin-bottom: 50px;
        padding-top: 50px;
    }
    code {
        font-size: .95rem;
    }
}

@media (max-width: $MQNarrow) {
    .post-wrapper {
        width: 90%;
    }
}
</style>