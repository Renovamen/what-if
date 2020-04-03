<template>
  <Layout>
    <Section class="text-center">
      <h1 class="error-emoji">{{ errorEmoji }}</h1>
      <h1>404 - Page Not Found</h1>
      <g-link class="go-home" to="/" title="Back to home">
        <h1>$ cd /home/</h1>
      </g-link>
    </Section>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      errorEmoji: "",
    }
  },
  mounted () {
    var emojiArray = [
      '\\(o_o)/', '(o^^)o', '(˚Δ˚)b', '(^-^*)', '(^_^)b', '(╯‵□′)╯',
      '(=\'X\'=)', '(>_<)', '\\(°ˊДˋ°)/', 'ㄟ(▔▽▔)ㄏ'
    ];
    this.errorEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
  },
}
</script>

<style lang="scss">
.error-emoji {
  font-size: 50px;
  margin-top: 100px;
}
.go-home {
  color: var(--body-color);
  text-decoration: none;
  :hover {
    color: var(--primary-color-dark);
  }
}
</style>