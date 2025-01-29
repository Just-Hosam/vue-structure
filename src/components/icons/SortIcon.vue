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
    class="lucide lucide-arrow-down-up"
  >
    <path d="m3 16 4 4 4-4" />
    <path d="M7 20V4" />
    <path d="m21 8-4-4-4 4" />
    <path d="M17 4v16" />
  </svg>
</template>
