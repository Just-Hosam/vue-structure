<script setup lang="ts">
import MenuIcon from "@/components/icons/MenuIcon.vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <RouterLink
        to="/"
        class="nav__link"
        :class="{ 'nav__link--active': route.path === '/products' || route.path === '/' }"
      >
        <MenuIcon :size="26" />
        <span class="nav__name">Products</span>
      </RouterLink>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 100vh;

  &__list {
    padding-top: 175px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__link {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px 32px;
    gap: 8px;
    font-size: 16px;
    border-radius: 0 2px 2px 0;

    color: var(--color-text-brand);
    border-right: 5px solid transparent;

    &:hover {
      background-color: var(--color-background-secondary);
    }

    &--active {
      background-color: var(--color-background-secondary);
      border-right: 5px solid var(--color-brand-primary);
    }
  }
}
</style>
