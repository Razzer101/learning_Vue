<script setup>
  import { RouterLink } from 'vue-router';
  import data from "../routes.json"

  const pages = data.pages
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-list__item" v-for="page in pages" :key="page.id + `-` + page.name">
        <RouterLink class="nav-list__link" :to="page.url">{{ page.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="sass">
  .nav
    display: flex
    align-items: center

  .nav-list
    display: flex
    margin: 0
    padding: 0
    &__item
      margin: 0 10px
    &__link
      text-decoration: none
      font-size: 1.4rem
      font-weight: bold
    .router-link-active
      text-decoration: underline
</style>