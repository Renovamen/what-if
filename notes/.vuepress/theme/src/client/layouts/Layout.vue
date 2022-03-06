<script setup lang="ts">
import Common from "@theme/Common.vue";
import Page from "@theme/Page.vue";
import { pageData } from "@vuepress/client";
import { useScrollPromise } from "../composables";

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;
</script>

<template>
  <Common>
    <template #page>
      <Transition
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="pageData.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </template>
  </Common>
</template>
