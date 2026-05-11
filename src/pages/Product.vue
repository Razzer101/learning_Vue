<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const pageId = Number(route.params.id)
</script>

<template>
    <h1>Product</h1>
    <p>This is product nr. {{ pageId }}</p>
</template>