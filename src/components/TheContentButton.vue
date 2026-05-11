<script setup>
    
</script> 

<template>
    <div>
        <button class="content-btn">
            <p class="content-btn__title">Content</p>
            <img class="content-btn__icon" src="/caret-right.svg" alt="caret right">
        </button>
        <div>
            <img src="" alt="">
            <article>
                <h3></h3>
                <p></p>
            </article>
        </div>
    </div>
</template>

<style scoped lang="sass">
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
</style>
