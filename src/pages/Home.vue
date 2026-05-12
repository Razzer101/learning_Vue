<script setup>
    import TheContentButton from '../components/TheContentButton.vue';
</script>

<template>
    <h2 class="title">Home</h2>
    <section class="first-main-content">
        <img class="first-main-content__img" src="https://placehold.co/100?" alt="">
        <p class="first-main-content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae reiciendis, rem earum itaque nostrum ducimus maxime corrupti totam cupiditate culpa provident consequuntur nam dolorum illo. Labore alias, quasi, velit fugit quod assumenda totam expedita dolorem pariatur, beatae fuga voluptatem deserunt saepe inventore sint odio consectetur. Asperiores, eos nam sed corporis, magni quibusdam amet tempora debitis, libero quia beatae ut. Debitis asperiores cupiditate consequuntur inventore, soluta molestiae odit magni! Repellendus impedit harum repellat nostrum distinctio expedita ab sint facilis. Dignissimos molestiae ipsa, iure laborum ab iste quo dolore, omnis quos eius, recusandae dolorum aut sit et enim. A, delectus repellat!</p>
    </section>
    <TheContentButton title="Content button 1"/>
    <section class="second-main-content">
        <p class="first-main-content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae reiciendis, rem earum itaque nostrum ducimus maxime corrupti totam cupiditate culpa provident consequuntur nam dolorum illo. Labore alias, quasi, velit fugit quod assumenda totam expedita dolorem pariatur, beatae fuga voluptatem deserunt saepe inventore sint odio consectetur. Asperiores, eos nam sed corporis, magni quibusdam amet tempora debitis, libero quia beatae ut. Debitis asperiores cupiditate consequuntur inventore, soluta molestiae odit magni! Repellendus impedit harum repellat nostrum distinctio expedita ab sint facilis. Dignissimos molestiae ipsa, iure laborum ab iste quo dolore, omnis quos eius, recusandae dolorum aut sit et enim. A, delectus repellat!</p>
        <img class="first-main-content__img" src="https://placehold.co/100?" alt="">
    </section>
    <TheContentButton title="Content button 2"/>
</template>

<style scoped lang="sass">
    .title
        text-align: center
        font-size: 2rem
        margin: 0 0 20px 0

    .first-main-content
        display: grid
        gap: 15px
        margin-bottom: 10px
        grid-template-columns: 30% 1fr
        &__img
            width: 100%
        &__text
            font-size: 1.3rem

    .second-main-content
        display: grid
        gap: 15px
        margin-bottom: 10px
        grid-template-columns:1fr 30%
        &__img
            width: 100%
        &__text
            font-size: 1.3rem
</style>