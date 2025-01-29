<script setup lang="ts">
import { useAppBreakpoints } from "@/composables/useAppBreakpoints";
import { ref } from "vue";
import CloseIcon from "../icons/CloseIcon.vue";
import MenuIcon from "../icons/MenuIcon.vue";
import StormButton from "../ui/StormButton.vue";
import SideBar from "./SideBar.vue";

const { isMobile } = useAppBreakpoints();
const isSidebarVisible = ref(false);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <div :class="['mobile-sidebar', { 'mobile-sidebar--open': isSidebarVisible }]">
    <SideBar :class="['sidebar', { 'sidebar--open': isSidebarVisible }]" />
    <StormButton class="close-btn" variant="icon" v-if="isSidebarVisible" @click="toggleSidebar">
      <CloseIcon color="var(--color-text-secondary)" fill="var(--color-text-secondary)" />
    </StormButton>
    <StormButton
      class="menu-btn"
      variant="icon"
      v-if="isMobile && !isSidebarVisible"
      @click="toggleSidebar"
    >
      <MenuIcon :stroke-width="0.5" />
    </StormButton>
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
}

.close-btn {
  position: absolute;
  top: 40px;
  right: 40px;
}
</style>
