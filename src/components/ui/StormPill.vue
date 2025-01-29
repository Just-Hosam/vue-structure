<script setup lang="ts">
import type { PropType } from "vue";

type PillSize = "small" | "medium" | "large";

defineProps({
  size: {
    type: String as PropType<PillSize>,
    default: "medium",
  },
  backgroundColor: {
    type: String,
    default: "var(--color-brand-primary)",
  },
  textColor: {
    type: String,
    default: "var(--color-text-primary)",
  },
});
</script>

<template>
  <span
    class="pill"
    :class="['pill--' + size]"
    :style="{ backgroundColor: backgroundColor, color: textColor }"
  >
    <slot />
  </span>
</template>

<style scoped lang="scss">
.pill {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  border-radius: 999px;
  font-size: 12px;
}
</style>
