<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  color: {
    type: String,
    default: "#5D5FEF",
  },
  size: {
    type: Number,
    default: 18,
  },
  strokeWidth: {
    type: Number,
    default: 2,
  },
  fill: {
    type: String,
    default: "#5D5FEF",
  },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :fill="fill"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 7V5H3.023V7H21ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
      :stroke="color"
      :stroke-width="strokeWidth"
    />
  </svg>
</template>
