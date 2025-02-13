<template>
  <v-app>
    <v-container>
      <TopMenu />
      <slot />
    </v-container>
  </v-app>
</template>
<script setup lang="ts">
import TopMenu from "~/components/TopMenu.vue";
</script>
