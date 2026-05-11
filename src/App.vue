<script setup>
  import { RouterView } from 'vue-router';
  import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <TheNavigation/>
  <main>
    <RouterView/>
  </main>
</template>
