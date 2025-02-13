<template>
  <v-btn @click="navigateTo('/cart')">
    <v-icon icon="mdi-cart-variant" start></v-icon>
    {{ $cartStore.items.length }}
  </v-btn>
</template>

<script setup lang="ts">
const { $cartStore } = useNuxtApp();
</script>
