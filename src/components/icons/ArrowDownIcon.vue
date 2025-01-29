<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  color: {
    type: String,
    default: "var(--color-text-primary)",
  },
  size: {
    type: Number,
    default: 24,
  },
  strokeWidth: {
    type: Number,
    default: 1.5,
  },
  fill: {
    type: String,
    default: "transparent",
  },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :fill="fill"
    :stroke="color"
    :stroke-width="strokeWidth"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-arrow-down"
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
</template>
