<template>
  <div class="theme-code-group">
    <div class="theme-code-group__nav">
      <button
        v-for="(tab, i) in codeTabs"
        :key="tab.title"
        class="theme-code-group__nav-tab"
        :class="{
          'theme-code-group__nav-tab-active': i === activeCodeTabIndex
        }"
        @click="changeCodeTab(i)"
      >
        {{ tab.title }}
      </button>
    </div>
    <slot />
    <pre v-if="codeTabs.length < 1" class="pre-blank">
// Make sure to add code blocks to your code group</pre
    >
  </div>
</template>

<script>
export default {
  name: "CodeGroup",
  data() {
    return {
      codeTabs: [],
      activeCodeTabIndex: -1
    };
  },
  watch: {
    activeCodeTabIndex(index) {
      this.codeTabs.forEach((tab) => {
        tab.elm.classList.remove("theme-code-block__active");
      });
      this.codeTabs[index].elm.classList.add("theme-code-block__active");
    }
  },
  mounted() {
    this.codeTabs = (this.$slots.default || [])
      .filter((slot) => Boolean(slot.componentOptions))
      .map((slot, index) => {
        if (slot.componentOptions.propsData.active === "") {
          this.activeCodeTabIndex = index;
        }

        return {
          title: slot.componentOptions.propsData.title,
          elm: slot.elm
        };
      });

    if (this.activeCodeTabIndex === -1 && this.codeTabs.length > 0) {
      this.activeCodeTabIndex = 0;
    }
  },
  methods: {
    changeCodeTab(index) {
      this.activeCodeTabIndex = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme-code-group {}
.theme-code-group__nav {
  margin-bottom: -35px;
  background-color: $codeBgColor;
  padding-bottom: 22px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-left: 10px;
  padding-top: 10px;
}
.theme-code-group__nav-tab {
  border: 0;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  font-size: 0.85em;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}
.theme-code-group__nav-tab-active {
  border-bottom: #42b983 1px solid;
}
.pre-blank {
  color: #42b983;
}
</style>
