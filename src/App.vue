<script setup>
  import { RouterView } from 'vue-router';
  import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <header class="header">
    <div>
      <img src="/vue.svg" alt="">
      <h1 class="header__title">Vue</h1>
    </div>
    <TheNavigation/>
  </header>
  <main class="main">
    <RouterView/>
  </main>
</template>

<style scoped lang="sass">
  .header
    display: flex
    justify-content: space-between
    padding: 10px
    border-bottom: 2px solid white
    &__title
      margin: 0
  
  .main
    padding: 20px
</style>