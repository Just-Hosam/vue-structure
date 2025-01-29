import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isOpen: false,
    modalComponent: null,
    modalProps: {},
  }),
  actions: {
    openModal(component, props: { [key in string]: any }) {
      this.isOpen = true;
      this.modalComponent = component;
      this.modalProps = props;
    },
    closeModal() {
      this.isOpen = false;
      this.modalComponent = null;
      this.modalProps = {};
    },
  },
});
