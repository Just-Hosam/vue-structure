<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  icon: {
    type: Object,
    default: null,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const inputValue = ref(props.modelValue);
const emit = defineEmits(["update:modelValue"]);

const updateValue = () => {
  emit("update:modelValue", inputValue.value);
};

const inputRef = ref<HTMLInputElement | null>(null);

const focusInput = () => {
  inputRef.value?.focus();
};
</script>

<template>
  <div class="input-wrapper" @click="focusInput">
    <component v-if="icon" :is="icon" class="input-icon" />
    <input ref="inputRef" v-model="inputValue" @input="updateValue" :placeholder="placeholder" />
  </div>
</template>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-item-border);
  color: var(--color-text-primary);
  border-radius: 4px;
  padding-left: 16px;

  &:hover {
    cursor: pointer;
  }
}

input {
  padding: 12px 16px;
  border: none;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
}
</style>
