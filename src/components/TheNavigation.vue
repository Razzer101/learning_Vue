<script setup>
  import { RouterLink } from 'vue-router';
  import data from "../routes.json"

  const pages = data.pages
</script>

<template>
  <nav>
    <ul>
      <li v-for="page in pages" :key="page.id + `-` + page.name">
        <RouterLink :to="page.url">{{ page.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
    .router-link-active{
        color: white;
    }
</style>