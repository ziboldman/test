<template>
  <v-card @click="$router.push(`/category/${category}`)">
    <v-card-title class="text-h4 text-uppercase font-weight-medium">{{
      category
    }}</v-card-title>
  </v-card>
</template>

<script setup lang="ts">
defineProps(["category"]);
</script>
