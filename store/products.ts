import { defineStore } from "pinia";
import type { categoryType, productType } from "~/types/productsType";

type productsStoreType = {
  categories: categoryType[];
  isCategoriesLoading: boolean;
  categoriesPromise: Promise<categoryType[]> | null;
  products: productType[];
  isProductsLoading: boolean;
  productsPromise: Promise<productType[]> | null;
};

export default defineStore("useProductsStore", {
  state: () =>
    <productsStoreType>{
      categories: [],
      isCategoriesLoading: false,
      categoriesPromise: null,
      products: [],
      isProductsLoading: false,
      productsPromise: null,
    },
  actions: {
    async getCategories(): Promise<categoryType[] | undefined> {
      if (this.categories.length) {
        return this.categories;
      }
      if (this.isCategoriesLoading && this.categoriesPromise) {
        return this.categoriesPromise;
      }
      this.isCategoriesLoading = true;
      const { $baseURL } = useNuxtApp();
      this.categoriesPromise = fetch($baseURL + "/products/categories/", {
        method: "GET",
      })
        .then(async (res) => {
          if (res.ok) {
            this.categories = await res.json();
            return this.categories;
          }
          return [];
        })
        .catch((err: any) => {
          console.error(err);
          return [];
        })
        .finally(() => {
          this.isCategoriesLoading = false;
          this.categoriesPromise = null;
        });
      return this.categoriesPromise;
    },
  },
});
