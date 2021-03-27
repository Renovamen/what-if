<template>
  <Common>
    <div class="error-container">
      <article class="error-content">
        <h1 class="error-emoji">{{ getEmoji() }}</h1>
        <h1>404 - Page Not Found</h1>
        <router-link to="/">
          <h1>$ cd /home/</h1>
        </router-link>
      </article>
    </div>
    <Footer class="footer" />
  </Common>
</template>

<script>
import Common from "@theme/components/Common.vue";
import Footer from "@theme/components/Footer";

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

export default {
  components: {
    Footer,
    Common
  },

  methods: {
    getEmoji() {
      return emojiArray[Math.floor(Math.random() * emojiArray.length)];
    }
  }
};
</script>

<style lang="stylus">
.error-container
  padding $navbarHeight 2rem 0
  height 100vh - $navbarHeight - 15.5rem
  .error-content
    text-align center
    margin-top 12rem
    h1
      font-size 35px
      margin-bottom -15px
    .error-emoji
      font-size 50px
      margin-bottom 10px
    a
      color var(--text-color)
      :hover
        color var(--accent-color)
</style>
