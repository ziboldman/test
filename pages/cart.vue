<template>
  <v-table v-if="items.length">
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>${{ item.price }}</td>
        <td>{{ item.title }}</td>
        <td><v-btn @click="$cartStore.remove(item.id)">Удалить</v-btn></td>
      </tr>
      <tr>
        <td class="font-weight-bold">${{ $cartStore.totalPrice }}</td>
        <td colspan="2">
          <v-btn @click="checkout">Оформить заказ</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-container v-else>
    <v-row class="text-h5" justify="center">Корзина пуста</v-row>
  </v-container>
</template>
<script setup lang="ts">
const { $cartStore } = useNuxtApp();
const items = computed(() => $cartStore.items);
const checkout = () => {
  alert("Поздравляем с покупкой!");
  $cartStore.clear();
};
</script>
