<script setup lang="ts">
import { defineProps, type PropType } from "vue";

type ButtonVariant = "primary" | "secondary" | "none" | "icon";
type ButtonSize = "small" | "medium" | "large";

defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: "primary",
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: "medium",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="['btn', 'btn--' + variant, 'btn--' + size, disabled ? 'btn--disabled' : '']"
    :disabled="disabled"
  >
    <div class="btn__content">
      <slot />
    </div>
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: 16px;
  font-weight: 500;

  &--primary {
    background-color: var(--color-brand-primary);
    color: var(--color-item-light);

    &:hover {
      background-color: #344293;
    }
  }

  &--secondary {
    background-color: #f9f9fb;
    color: #000000de;

    &:hover {
      color: #605dec;
    }
  }

  &--none {
    background-color: transparent;
    color: #000000de;

    &:hover {
      color: #605dec;
    }
  }

  &--small {
    padding: 4px 8px;
    font-size: 12px;
  }

  &--medium {
    padding: 8px 16px;
    font-size: 14px;
  }

  &--large {
    padding: 12px 24px;
    font-size: 16px;
  }

  &--icon {
    background-color: transparent;
    color: #333;
    padding: 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #f9f9fb;
    }
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &:active {
    filter: brightness(0.85);
  }

  &:focus {
    outline: none;
  }

  &--disabled {
    cursor: not-allowed;
    background-color: #ccc;
    color: #666;

    &:hover {
      background-color: #ccc;
    }

    &:active {
      background-color: #ccc;
      filter: none;
    }

    &:focus {
      background-color: #ccc;
    }

    .btn__content {
      opacity: 0.5;
    }
  }
}
</style>
