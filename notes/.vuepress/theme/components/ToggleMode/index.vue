<template>
  <a
    role="button"
    :aria-label="'Toggle ' + nextMode"
    :title="'Toggle ' + nextMode"
    class="toggle-mode"
    @click.prevent="toggleMode()"
  >
    <v-icon v-if="currentMode === 'light'" name="ri-sun-line" />
    <v-icon v-else-if="currentMode === 'dark'" name="ri-moon-line" />
    <v-icon v-else-if="currentMode === 'auto'" name="fa-magic" />
  </a>
</template>

<script>
import applyMode from "./applyMode";

let modeOptions = ["light", "dark", "auto"];

export default {
  name: "UserSettings",
  data() {
    return {
      currentMode: "auto"
    };
  },
  computed: {
    nextMode() {
      const currentIndex = modeOptions.indexOf(this.currentMode);
      const nextIndex = (currentIndex + 1) % modeOptions.length;
      return modeOptions[nextIndex];
    }
  },
  mounted() {
    // modePicker 开启时默认使用用户主动设置的模式
    this.currentMode =
      localStorage.getItem("mode") || this.$themeConfig.mode || "auto";

    // Dark and Light autoswitches
    // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
    var that = this;
    window.matchMedia("(prefers-color-scheme: dark)").addListener(() => {
      that.$data.currentMode === "auto" && applyMode(that.$data.currentMode);
    });
    window.matchMedia("(prefers-color-scheme: light)").addListener(() => {
      that.$data.currentMode === "auto" && applyMode(that.$data.currentMode);
    });

    applyMode(this.currentMode);
  },
  methods: {
    // switch to the next mode
    toggleMode() {
      const currentIndex = modeOptions.indexOf(this.currentMode);
      const nextIndex = (currentIndex + 1) % modeOptions.length;

      applyMode(modeOptions[nextIndex]);
      localStorage.setItem("mode", modeOptions[nextIndex]);

      this.currentMode = modeOptions[nextIndex];
    }
  }
};
</script>

<style lang="stylus">
@require '../../styles/mode.styl'

.toggle-mode {
	margin-left: 1rem;
	cursor: pointer;
}
</style>
