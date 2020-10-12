<template>
  <div class="error-container">
    <article class="error-content">
      <h1 class="error-emoji">{{ getEmoji() }}</h1>
      <h1>404 - Page Not Found</h1>
      <router-link to="/">
        <h1>$ cd /home/</h1>
      </router-link>
    </article>
  </div>
</template>

<script>
const emojiArray = [
  '\\(o_o)/', '(o^^)o', '(˚Δ˚)b', '(^-^*)', '(^_^)b', '(╯‵□′)╯',
  '(=\'X\'=)', '(>_<)', '\\(°ˊДˋ°)/', 'ㄟ(▔▽▔)ㄏ'
];

export default {
  methods: {
    getEmoji () {
      return emojiArray[Math.floor(Math.random() * emojiArray.length)];
    }
  }
}
</script>

<style lang="stylus">
.error-container {
  padding: 12rem 2rem;
  .error-content {
    text-align: center;
    h1 {
      font-size: 35px;
      margin-bottom: -15px;
    }
    .error-emoji {
      font-size: 50px;
      margin-bottom: 10px;
    }
    a {
      color: $textColor;
      :hover {
        color: $accentColor;
      }
    }
  }
}
</style>