<template>
  <v-container>
    <v-card>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-text>{{ product.description }}</v-card-text>
      <v-img :src="product.image" height="300"></v-img>
      <v-card-subtitle>{{ product.price }}$</v-card-subtitle>
      <v-card-actions>
        <v-btn @click="addToCart(product)">Купить</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
const route = useRoute();
const { $cartStore, $baseURL } = useNuxtApp();
const product = ref({});
onMounted(async () => {
  await fetch($baseURL + `/products/${route.params.product_id}`, {
    method: "GET",
  })
    .then(async (res) => {
      if (res.ok) {
        product.value = await res.json();
      }
      return [];
    })
    .catch((err: any) => {
      console.error(err);
      return [];
    });
});
const addToCart = (product) => {
  $cartStore.add(product);
};
</script>
