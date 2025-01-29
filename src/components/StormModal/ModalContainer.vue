<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";

const modal = useModalStore();
</script>

<template>
  <div v-if="modal.isOpen" class="modal-overlay" @click="modal.closeModal">
    <div class="modal-container" @click.stop>
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
}

.modal-container {
  min-width: 350px;
  min-height: 200px;
  background: var(--color-background-primary);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
