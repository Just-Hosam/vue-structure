<script setup lang="ts">
import ModalLayout from "@/components/StormModal/ModalLayout.vue";
import type { Product } from "../classes/product";
import { useAppBreakpoints } from "@/composables/useAppBreakpoints";

const { isMobile } = useAppBreakpoints();

defineProps<{
  product: Product;
}>();
</script>

<template>
  <ModalLayout :title="product.product">
    <div :class="['content', { 'content--mobile': isMobile }]">
      <img
        :class="['image', { 'image--center': isMobile }]"
        :src="product.image ? product.image : 'https://placehold.co/200x300'"
        :alt="product.product"
      />
      <div class="description">
        <div class="description__title">Key Features</div>
        <div class="description__text">
          {{ product.description }}
        </div>
      </div>
    </div>
  </ModalLayout>
</template>

<style scoped lang="scss">
.content {
  width: 500px;
  min-height: 200px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;

  &--mobile {
    width: 100%;
    flex-direction: column;
  }
}

.image {
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;

  &--center {
    width: 100%;
  }
}

.description {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  &__title {
    font-size: 14px;
    font-weight: 700;
  }

  &__text {
    font-size: 12px;
    white-space: pre-line;
  }
}
</style>
