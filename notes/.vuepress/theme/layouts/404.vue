<template>
  <Common>
    <div class="error-container">
      <div class="error-content">
        <h1 class="error-emoji">{{ getEmoji() }}</h1>
        <h1>404 - Page Not Found</h1>
        <router-link to="/">
          <h1>$ cd /home/</h1>
        </router-link>
      </div>
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
  height calc(100vh - 74px)
  display flex
  flex-direction column
  align-items center
  justify-content center
  .error-content
    text-align center
    width max-content
    margin-top 65px
    h1
      font-size 35px
      margin-top 0
      line-height 1
    h1.error-emoji
      font-size 50px
    a
      color var(--text-color)
      :hover
        color var(--accent-color)

@media (max-width: $MQMobileNarrow)
  .error-container
    height calc(100vh - 57px)
    .error-content
      h1
        font-size 30px
      h1.error-emoji
        font-size 45px
</style>
