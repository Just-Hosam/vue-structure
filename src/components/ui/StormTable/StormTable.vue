<script setup lang="ts"></script>

<template>
  <table class="table">
    <slot></slot>
  </table>
</template>

<style scoped lang="scss">
.table {
  border-radius: 10px;
  border: 1px solid var(--color-item-border);
  display: flex;
  flex-direction: column;
}
</style>
