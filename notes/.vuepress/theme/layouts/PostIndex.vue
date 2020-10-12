<template>
    <div class="theme-container" :class="pageClasses">
        <Navbar v-if="shouldShowNavbar" />
        <div class="title">
            <h1>Snippets</h1>
            <p style="opacity: .8">A space for storing these messy segments.</p>
        </div>
        <BlogList />
        <Footer class="footer" />
    </div>
</template>

<script>
import BlogList from '@theme/components/BlogList.vue'
import Navbar from '@theme/components/Navbar.vue'
import Footer from '@theme/components/Footer'

export default {
    name: 'PostIndex',

    components: {
        BlogList,
        Navbar,
        Footer
    },
    
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