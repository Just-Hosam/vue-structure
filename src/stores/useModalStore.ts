import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isOpen: false,
    modalComponent: null,
    modalProps: {},
  }),
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    openModal(component: any, props: { [key in string]: any }) {
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
