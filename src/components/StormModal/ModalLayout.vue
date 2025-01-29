<script setup lang="ts">
import CloseIcon from "../icons/CloseIcon.vue";
import StormButton from "../ui/StormButton.vue";
import { useModalStore } from "@/stores/useModalStore";

const modal = useModalStore();

defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="header">
    <div class="header__title">{{ title }}</div>

    <StormButton class="header__btn" @click="modal.closeModal" variant="icon">
      <CloseIcon />
    </StormButton>
  </div>

  <div class="content">
    <slot></slot>
  </div>

  <div class="footer">
    <StormButton variant="secondary" @click="modal.closeModal" size="large">Close</StormButton>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 24px 40px;

  &__title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }

  &__btn {
    justify-self: flex-end;
    fill: var(--color-text-secondary);
    stroke: var(--color-text-secondary);
  }
}

.content {
  padding: 0 40px;
}

.footer {
  display: flex;
  justify-content: flex-end;
  padding: 24px 40px 40px;
}
</style>
