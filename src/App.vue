<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import WebSideBar from "@/components/SideBar/WebSideBar.vue";
import MobileSideBar from "@/components/SideBar/MobileSideBar.vue";
import { useAppBreakpoints } from "@/composables/useAppBreakpoints";
import ModalContainer from "@/components/StormModal/ModalContainer.vue";

const { isMobile } = useAppBreakpoints();
</script>

<template>
  <WebSideBar v-if="!isMobile" />
  <div class="app">
    <NavBar class="navbar" />
    <div class="content">
      <RouterView />
    </div>
  </div>
  <MobileSideBar v-if="isMobile" />
  <ModalContainer />
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 1;
}

.content {
  flex: 1;
  padding: 0 40px 40px;
  background-color: var(--color-background-primary);
}

.navbar {
  padding: 40px;
  position: sticky;
  top: 0;
  background-color: var(--color-background-primary);
}
</style>
