<template>
  <tr class="table-row">
    <slot></slot>
  </tr>
</template>

<style scoped lang="scss">
.table-row {
  display: grid;
  align-items: center;
  align-items: stretch;
  border-bottom: 1px solid var(--color-item-border);
  grid-template-columns: 10% 20% 20% 20% 20% 10%;

  &:last-child {
    border-bottom: none;
  }
}
</style>
