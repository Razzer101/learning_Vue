<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <header class="header">
    <RouterLink class="header__link" to="/">
      <img class="header__logo" src="/vue.svg" alt="logo">
      <h1 class="header__title">Vue</h1>
    </RouterLink>
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
    &__link
      display: flex
      text-decoration: none
    &__logo
      margin-right: 7px
    &__title
      margin: 0
  
  .main
    padding: 20px
</style>