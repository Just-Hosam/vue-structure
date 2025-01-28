<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import WebSideBar from "@/components/SideBar/WebSideBar.vue";
import MobileSideBar from "@/components/SideBar/MobileSideBar.vue";
import { useAppBreakpoints } from "@/composables/useAppBreakpoints";

const { isMobile } = useAppBreakpoints();
</script>

<template>
  <WebSideBar v-if="!isMobile" />
  <div class="app">
    <NavBar />
    <RouterView />
  </div>
  <MobileSideBar v-if="isMobile" />
</template>

<style scoped>
.app {
  height: 100vh;
  padding: 40px;
  flex: 1;
}
</style>
