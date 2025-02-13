<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const route = useRoute();
const { $baseURL } = useNuxtApp();
const products = ref([]);
onMounted(async () => {
  await fetch($baseURL + `/products/category/${route.params.category_id}`, {
    method: "GET",
  })
    .then(async (res) => {
      if (res.ok) {
        products.value = await res.json();
      }
      return [];
    })
    .catch((err: any) => {
      console.error(err);
      return [];
    });
});
</script>
