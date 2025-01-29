<script setup lang="ts">
import StormPill from "@/components/ui/StormPill.vue";
import StormTable from "@/components/ui/StormTable/StormTable.vue";
import TableBody from "@/components/ui/StormTable/TableBody.vue";
import TableCell from "@/components/ui/StormTable/TableCell.vue";
import TableHead from "@/components/ui/StormTable/TableHead.vue";
import TableHeader from "@/components/ui/StormTable/TableHeader.vue";
import TableRow from "@/components/ui/StormTable/TableRow.vue";
import { useModalStore } from "@/stores/useModalStore";
import { onMounted } from "vue";
import type { Product } from "../classes/product";
import ProductModal from "../components/ProductModal.vue";
import { useProductsStore } from "../stores/ProductsStore";

const { products, fetchProducts } = useProductsStore();
const modal = useModalStore();

function openProductModal(product: Product) {
  modal.openModal(ProductModal, { product });
}

onMounted(() => {
  fetchProducts();
});

const statusColors = {
  Active: "var(--color-extra-blue)",
  Inactive: "var(--color-extra-green)",
  Pending: "var(--color-extra-yellow)",
  Blocked: "var(--color-extra-red)",
};
</script>

<template>
  <div class="title">
    Products <span class="subtext">11 of {{ products.length }} results</span>
  </div>
  <StormTable class="table">
    <TableHeader>
      <TableRow class="table__row">
        <TableHead>ID</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Product</TableHead>
        <TableHead class="table__last-column">Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="row of products"
        :key="row.id"
        class="table__row table__row--clickable"
        @click="openProductModal(row)"
      >
        <TableCell>{{ row.id ?? "-" }}</TableCell>
        <TableCell>
          <StormPill class="table__pill" :backgroundColor="statusColors?.[row?.status]">{{
            row.status ?? "-"
          }}</StormPill>
        </TableCell>
        <TableCell>{{ row.quantity ?? "-" }}</TableCell>
        <TableCell>{{ row.product ?? "-" }}</TableCell>
        <TableCell class="table__last-column">{{ row.total ?? "-" }}</TableCell>
      </TableRow>
    </TableBody>
  </StormTable>
</template>

<style scoped lang="scss">
.title {
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.subtext {
  font-size: 12px;
  line-height: 16px;
  margin-left: 8px;
  color: var(--color-text-secondary);
}

.table {
  width: 100%;
  height: 600px;

  &__row {
    grid-template-columns: 10% 15% 15% auto 15%;

    &--clickable {
      &:hover {
        background-color: var(--color-background-secondary);
        cursor: pointer;
      }

      &:active {
        filter: brightness(0.9);
      }
    }
  }

  &__pill {
    min-width: 76px;
  }

  &__last-column {
    border-left: 1px solid var(--color-item-border);
  }
}
</style>
