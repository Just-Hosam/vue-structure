<script setup lang="ts">
import { ref } from "vue";
import { useAppBreakpoints } from "@/composables/useAppBreakpoints";
import SideBar from "./SideBar.vue";
import MenuIcon from "../icons/MenuIcon.vue";
import CloseIcon from "../icons/CloseIcon.vue";
// import IconButton from "../ui/IconButton.vue";
import StormButton from "../ui/StormButton.vue";

const { isMobile } = useAppBreakpoints();
const isSidebarVisible = ref(true);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <div :class="['mobile-sidebar', { 'mobile-sidebar--open': isSidebarVisible }]">
    <SideBar :class="['sidebar', { 'sidebar--open': isSidebarVisible }]" />
    <StormButton class="close-btn" v-if="isSidebarVisible" @click="toggleSidebar">
      <CloseIcon :size="24" />
    </StormButton>
    <button class="menu-btn" v-if="isMobile && !isSidebarVisible" @click="toggleSidebar">
      <MenuIcon :size="24" :stroke-width="0.5" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.mobile-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(100%);
  background-color: white;
  height: 100%;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;

  &--open {
    transform: translate(0);
  }
}

.sidebar {
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &--open {
    opacity: 1;
  }
}

.menu-btn {
  position: absolute;
  top: 40px;
  left: -80px;
  background: none;
  border: none;
  display: flex;
  padding: 8px;
  cursor: pointer;
  opacity: 1;
}

.close-btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40px;
  right: 40px;
  border: none;
  cursor: pointer;
}
</style>
