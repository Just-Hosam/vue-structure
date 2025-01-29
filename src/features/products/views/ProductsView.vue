<script setup lang="ts">
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon.vue";
import SortIcon from "@/components/icons/SortIcon.vue";
import StormPill from "@/components/ui/StormPill.vue";
import StormTable from "@/components/ui/StormTable/StormTable.vue";
import TableBody from "@/components/ui/StormTable/TableBody.vue";
import TableCell from "@/components/ui/StormTable/TableCell.vue";
import TableHead from "@/components/ui/StormTable/TableHead.vue";
import TableHeader from "@/components/ui/StormTable/TableHeader.vue";
import TableRow from "@/components/ui/StormTable/TableRow.vue";
import { useModalStore } from "@/stores/useModalStore";
import { onMounted, ref } from "vue";
import type { Product } from "../classes/product";
import ProductModal from "../components/ProductModal.vue";

const products = ref<Product[]>([]);
const searchQuery = ref("");
const sortState = ref({
  field: "" as "quantity" | "product" | "total",
  order: "" as "asc" | "desc",
});
const loading = ref(false);
const modal = useModalStore();

function openProductModal(product: Product) {
  modal.openModal(ProductModal, { product });
}

onMounted(async () => {
  await fetchProducts();
});

async function getProducts(params?: {
  page?: number;
  limit?: number;
  search?: string;
  sortField?: "total" | "quantity" | "product";
  sortOrder?: "asc" | "desc";
}): Promise<Product[]> {
  let url = "http://localhost:3000/products";
  const queryParams = new URLSearchParams();

  if (params) {
    const { page, limit, search, sortField, sortOrder } = params;

    if (page) queryParams.append("page", page.toString());
    if (limit) queryParams.append("limit", limit.toString());
    if (search) queryParams.append("search", search);
    if (sortField) queryParams.append("sortField", sortField);
    if (sortOrder) queryParams.append("sortOrder", sortOrder);
  }

  url += `?${queryParams.toString()}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.data;
}

async function fetchProducts() {
  loading.value = true;
  products.value = await getProducts();
  loading.value = false;
}

const searchProducts = async () => {
  loading.value = true;
  products.value = await getProducts({
    search: searchQuery.value,
    sortField: sortState.value.field,
    sortOrder: sortState.value.order,
  });
  loading.value = false;
};

const toggleSort = async (field: "total" | "quantity" | "product") => {
  loading.value = true;
  if (sortState.value.field === field) {
    sortState.value.order = sortState.value.order === "asc" ? "desc" : "asc";
  } else {
    sortState.value.field = field;
    sortState.value.order = "asc";
  }
  products.value = await getProducts({
    sortField: sortState.value.field,
    sortOrder: sortState.value.order,
    search: searchQuery.value,
  });
  loading.value = false;
};

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
  <div class="search">
    <input type="text" v-model="searchQuery" placeholder="Search" />
    <button type="submit" @click="searchProducts">Search</button>
  </div>
  <StormTable class="table">
    <TableHeader>
      <TableRow class="table__row">
        <TableHead>ID</TableHead>
        <TableHead>Status</TableHead>
        <TableHead class="table__cell--clickable" @click="toggleSort('quantity')">
          Quantity
          <ArrowDownIcon
            :size="20"
            v-if="sortState.field === 'quantity' && sortState.order === 'asc'"
          />
          <ArrowUpIcon
            :size="20"
            v-else-if="sortState.field === 'quantity' && sortState.order === 'desc'"
          />
          <SortIcon color="var(--color-text-secondary)" :size="20" v-else />
        </TableHead>
        <TableHead class="table__cell--clickable" @click="toggleSort('product')">
          Product
          <ArrowDownIcon
            :size="20"
            v-if="sortState.field === 'product' && sortState.order === 'asc'"
          />
          <ArrowUpIcon
            :size="20"
            v-else-if="sortState.field === 'product' && sortState.order === 'desc'"
          />
          <SortIcon color="var(--color-text-secondary)" :size="20" v-else />
        </TableHead>
        <TableHead @click="toggleSort('total')" class="table__last-column table__cell--clickable">
          Price
          <ArrowDownIcon
            :size="20"
            v-if="sortState.field === 'total' && sortState.order === 'asc'"
          />
          <ArrowUpIcon
            :size="20"
            v-else-if="sortState.field === 'total' && sortState.order === 'desc'"
          />
          <SortIcon color="var(--color-text-secondary)" :size="20" v-else />
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody v-if="loading">
      <!-- <TableRow class="table__row">
        <TableCell></TableCell>
      </TableRow> -->
      <div class="table__loading">Loading...</div>
    </TableBody>
    <TableBody v-else>
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

  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 100%;
    margin-top: 50px;
  }

  &__cell {
    &--clickable {
      display: flex;
      align-items: center;
      gap: 4px;

      &:hover {
        background-color: var(--color-background-secondary);
        cursor: pointer;
      }
    }
  }

  &__pill {
    min-width: 76px;
  }

  &__last-column {
    border-left: 1px solid var(--color-item-border);
    justify-content: flex-end;
  }
}
</style>
