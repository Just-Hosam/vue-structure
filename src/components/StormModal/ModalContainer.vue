<script setup lang="ts">
import { useAppBreakpoints } from "@/composables/useAppBreakpoints";
import { useModalStore } from "@/stores/useModalStore";

const modal = useModalStore();
const { isMobile } = useAppBreakpoints();
</script>

<template>
  <div
    v-if="modal.isOpen"
    :class="['modal-overlay', { 'modal-overlay--mobile': isMobile }]"
    @click="modal.closeModal"
  >
    <div :class="['modal-container', { 'modal-container--mobile': isMobile }]" @click.stop>
      <component :is="modal.modalComponent" v-bind="modal.modalProps" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  animation: fade-in 0.3s forwards;

  &--mobile {
    background: var(--color-background-primary);
  }
}

.modal-container {
  min-width: 350px;
  min-height: 200px;
  background: var(--color-background-primary);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out;

  &--mobile {
    width: 100%;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    transform: translateY(100%);
    animation: slide-up 0.3s forwards;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
