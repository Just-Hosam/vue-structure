<template>
  <td class="table-cell">
    <slot></slot>
  </td>
</template>

<style scoped lang="scss">
.table-cell {
  width: 100%;
  padding: 16px;
  // border-bottom: 1px solid var(--color-item-border);
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
    text-align: right;
  }
}
</style>
