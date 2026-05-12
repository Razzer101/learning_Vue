<script setup>
    import { ref } from 'vue';

    defineProps({
        title: String
    })

    const show = ref(false)
</script> 

<template>
    <div class="button-container">
        <button class="content-btn" :class="{active: show}" @click="show = !show">
            <p class="content-btn__title">{{ title }}</p>
            <img class="content-btn__icon" src="/caret-right.svg" alt="caret right">
        </button>
        <Transition name="content">
            <div class="content" v-if="show">
                <img class="content__img" src="https://placehold.co/100?" alt="placeholder">
                <article class="content-info">
                    <h3 class="content-info__title">This content</h3>
                    <p class="content-info__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores quia, sequi officiis commodi sapiente tempora obcaecati id maiores quasi deleniti placeat quisquam numquam nostrum ullam iste culpa recusandae saepe ab et eaque molestiae dicta. Molestias nostrum velit natus cupiditate repellat id similique totam, architecto atque. Possimus recusandae eveniet dolorum!</p>
                </article>
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="sass">
    .content-enter-active,
    .content-leave-active 
        transition: all 0.3s ease
        transform: scaleY(1)
        max-height: 200px
        
    .content-enter-from,
    .content-leave-to 
        transform: scaleY(0)
        max-height: 0

    .button-container
        margin-bottom: 10px

    .content-btn
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
        border-radius: 5px
        border: none
        padding: 5px 15px
        &__title
            color: black
            font-size: 1.5rem
            margin: 0
            font-weight: bold
        &__icon
            width: 20px
            height: 50px
            object-fit: cover
            transition: transform 0.3s ease
        &.active 
            border-radius: 5px 5px 0 0
            .content-btn__icon
                transform: rotate(90deg)
    .content
        display: flex
        border: 2px solid white
        border-top: none
        padding: 10px
        gap: 10px
        border-radius: 0 0 5px 5px
        overflow: hidden
        transform-origin: top
        &__img
            width: 30%
            border-radius: 5px
            object-fit: cover
        &-info
            display: flex
            flex-direction: column
            &__title
                font-size: 1.6rem
                margin: 0 0 10px 0
            &__text
                font-size: 1.2rem
                margin: 0
</style>
