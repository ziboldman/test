import useCartStore from "~/store/cart";
import useProductsStore from "~/store/products";

export default defineNuxtPlugin((nuxtApp) => {
  const cartStore = useCartStore();
  const productsStore = useProductsStore();

  return {
    provide: {
      cartStore,
      productsStore,
    },
  };
});
