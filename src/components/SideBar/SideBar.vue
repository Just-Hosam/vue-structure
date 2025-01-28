<script setup lang="ts"></script>

<template>
  <nav class="sidebar__nav">
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <router-link to="/products" class="sidebar__link"> Products </router-link>
      </li>
      <li class="sidebar__item">
        <router-link to="/orders" class="sidebar__link"> Orders </router-link>
      </li>
      <li class="sidebar__item">
        <router-link to="/customers" class="sidebar__link"> Customers </router-link>
      </li>
      <li class="sidebar__item">
        <router-link to="/analytics" class="sidebar__link"> Analytics </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss"></style>
