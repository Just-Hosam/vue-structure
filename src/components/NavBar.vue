<script setup lang="ts">
import StormLogo from "@/assets/StormLogo.svg";
import AvatarIcon from "@/components/icons/AvatarIcon.vue";
import BellIcon from "@/components/icons/BellIcon.vue";
import StormButton from "@/components/ui/StormButton.vue";
import { useAppBreakpoints } from "@/composables/useAppBreakpoints";
import NotificationsModal from "@/features/notifications/components/NotificationsModal.vue";
import { useModalStore } from "@/stores/useModalStore";
import { RouterLink } from "vue-router";

const { isMobile } = useAppBreakpoints();
const modal = useModalStore();

const openNotificationsModal = () => {
  modal.openModal(NotificationsModal, {});
};
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
      <StormButton @click="openNotificationsModal" variant="icon">
        <BellIcon />
      </StormButton>
      <RouterLink to="/">
        <StormButton variant="icon">
          <AvatarIcon />
          <span class="icons__name" v-if="!isMobile">Adriana Arias</span>
        </StormButton>
      </RouterLink>
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

  &__name {
    margin-left: 8px;
    color: var(--color-text-brand);
    font-family: "Nunito Sans";
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
