<template>
  <v-card @click="$router.push(`/product/${product.id}`)">
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-subtitle>{{ product.price }}$</v-card-subtitle>
    <v-img :src="product.image" height="200"></v-img>
    <v-card-actions>
      <v-btn @click.stop="addToCart(product)">Купить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const { $cartStore } = useNuxtApp();
defineProps(["product"]);
const addToCart = (product) => {
  $cartStore.add(product);
};
</script>
