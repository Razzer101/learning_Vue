<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const pageId = Number(route.params.id)
</script>

<template>
    <h2 class="title">Product</h2>
    <p>This is product nr. {{ pageId }}</p>
</template>

<style scoped lang="sass">
    .title
        text-align: center
        font-size: 2rem
        margin: 5px 0
</style>