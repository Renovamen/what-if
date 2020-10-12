<template>
    <div class="theme-container">
        <Navbar v-if="shouldShowNavbar" />
        <div class="post-wrapper">
            <h1 class="title">{{ $page.title }}</h1>
            <Content/>
        </div>
        <Footer class="footer" />
    </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Footer from '@theme/components/Footer'

export default {
    name: 'Post',

    components: {
        Navbar,
        Footer
    },
    // $homePageWidth
    computed: {
        shouldShowNavbar () {
            const { themeConfig } = this.$site
            const { frontmatter } = this.$page
            if (frontmatter.navbar === false || themeConfig.navbar === false) {
                return false
            }
            return (
                this.$title
                || themeConfig.logo
                || themeConfig.repo
                || themeConfig.nav
                || this.$themeLocaleConfig.nav
            )
        },
        pageClasses () {
            const userPageClass = this.$page.frontmatter.pageClass
            return [
                {
                    'no-navbar': !this.shouldShowNavbar
                },
                userPageClass
            ]
        }
    }
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