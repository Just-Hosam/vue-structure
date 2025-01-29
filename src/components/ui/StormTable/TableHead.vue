<template>
  <th class="table-head">
    <slot></slot>
  </th>
</template>

<style scoped lang="scss">
.table-head {
  width: 100%;
  font-weight: 700;
  text-align: left;
  // color: red;
  padding: 16px;
  border-bottom: 1px solid var(--color-item-border);

  &:last-child {
    text-align: right;
  }
}
</style>
