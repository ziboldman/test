import { defineStore } from "pinia";
import type { cartType } from "~/types/cartTypes";

type cartStoreType = {
  items: cartType;
};

export default defineStore("useCartStore", {
  state: () =>
    <cartStoreType>{
      items: [],
    },
  getters: {
    totalPrice() {
      return this.items.reduce(
        (total: number, item: cartType) => total + item.price,
        0,
      );
    },
  },
  actions: {
    add(product: cartType) {
      this.items.push(product);
    },
    remove(id: number) {
      this.items = this.items.filter((item: cartType) => item.id !== id);
    },
    clear() {
      this.items = [];
    },
  },
});
