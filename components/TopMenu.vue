<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title class="cursor-pointer" @click="navigateTo('/')">
        Интернет-магаз
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn to="/">main</v-btn>
        <v-btn
          v-for="category in categories"
          :key="category"
          :to="`/category/${category}`"
        >
          {{ category }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <CartIcon />
    </v-toolbar>
  </div>
</template>

<script setup lang="ts">
const { $productsStore } = useNuxtApp();
const categories = ref([]);
onMounted(async () => {
  categories.value = await $productsStore.getCategories();
});
</script>
