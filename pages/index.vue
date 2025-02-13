<template>
  <v-container>
    <v-row>
      <v-col v-for="category in categories" :key="category" cols="12" md="6">
        <CategoryCard :category="category" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const { $productsStore } = useNuxtApp();
const categories = ref([]);
onMounted(async () => {
  categories.value = await $productsStore.getCategories();
});
</script>
