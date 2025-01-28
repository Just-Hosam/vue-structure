<script setup lang="ts">
import StormLogo from "@/assets/StormLogo.svg";
import AvatarIcon from "@/components/icons/AvatarIcon.vue";
import BellIcon from "@/components/icons/BellIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import { useAppBreakpoints } from "@/composables/useAppBreakpoints";
import { RouterLink } from "vue-router";

const { isMobile } = useAppBreakpoints();
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" :class="`logo ${isMobile && 'logo--mobile'}`">
      <img
        :src="StormLogo"
        alt="Storm Logo"
        :class="`logo__svg ${isMobile && 'logo__svg--mobile'}`"
      />
      <span>STORM</span>
    </RouterLink>

    <div :class="['icons', isMobile && 'icons--mobile']">
      <RouterLink class="icons__link" to="/products">
        <BellIcon class="icons__icon" :size="24" />
      </RouterLink>
      <RouterLink class="icons__link" to="/products">
        <AvatarIcon class="icons__icon" :size="24" />
        <span v-if="!isMobile">Adriana Arias</span>
      </RouterLink>
      <!-- <RouterLink v-if="isMobile" class="icons__link" to="/products">
        <MenuIcon class="icons__icon" :size="24" :stroke-width="0.5" />
      </RouterLink> -->
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 32px;
  color: #333;

  &--mobile {
    font-size: 20px;
  }

  &__svg {
    width: 40px;
    height: 40px;

    &--mobile {
      width: 32px;
      height: 32px;
    }
  }
}

.icons {
  display: flex;
  gap: 4px;
  align-items: center;

  &--mobile {
    margin-right: 44px;
  }

  &__icon {
    display: flex;
    align-items: center;
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
    color: #5e5ced;
    font-family: "Nunito Sans";
  }
}
</style>
