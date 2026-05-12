<script setup>
    import { ref } from 'vue';
  
    const inputName = ref("")
    const inputEmail = ref("")
    const inputPhone = ref("")

    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

    function handleSumbit(){
        if(
            inputName.value.length >= 2 &&
            regex.test(inputEmail.value) &&
            inputPhone.value.length === 8
        ){
            alert("Thank you for contacting us")
        } else {
            alert("The form is incorrect")
        }
    }
</script>

<template>
    <form class="form" @submit.prevent="handleSumbit">
        <fieldset class="form-field">
            <legend class="form-field__title">Contact us</legend>
            <label class="form-field-label" for="name">
                <span class="form-field-label__title">Name:</span>
                <input v-model="inputName" class="form-field-label__input" id="name" type="text">
                <p v-if="inputName && inputName.length < 2">(Name has to be more than one letter)</p>
            </label>
            <label class="form-field-label" for="email">
                <span class="form-field-label__title">Email:</span>
                <input v-model="inputEmail" class="form-field-label__input" id="email" type="email">
                <p v-if="inputEmail && !regex.test(inputEmail)">(Email is incorrect)</p>
            </label>
            <label class="form-field-label" for="phone">
                <span class="form-field-label__title">Phone:</span>
                <input v-model="inputPhone" class="form-field-label__input" id="phone" type="tel">
                <p v-if="inputPhone && inputPhone.length !== 8">(Name has to be more than one letter)</p>
            </label>
            <label class="form-field-label" for="options">
                <select id="options" class="form-field-label-select">
                    <option class="form-field-label-select__option" disabled value="">Choose an option</option>
                    <option class="form-field-label-select__option" value="option 1">Option 1</option>
                    <option class="form-field-label-select__option" value="option 2">Option 2</option>
                </select>
            </label>
            <label class="form-field-descript-label" for="description">
                <span class="form-field-descript-label__title">Description:</span>
                <textarea class="form-field-descript-label__area" id="description" placeholder="Write a description"></textarea>
            </label>
        </fieldset>
        <button class="form__submit" type="submit">Contact</button>
    </form>
</template>

<style scoped lang="sass">
    .form
        display: flex
        flex-direction: column
        gap: 10px
        &__submit
            color: black
            padding: 5px 0
            font-size: 1.5rem
            font-weight: bold
            border-radius: 5px
        &-field
            display: flex
            flex-direction: column
            gap: 15px
            padding: 10px 15px
            border-radius: 5px
            &__title
                font-size: 1.4rem
                font-weight: bold
            &-descript-label
                display: flex
                flex-direction: column
                gap: 10px
                font-size: 1.3rem
                &__area
                    font-size: 1.5rem
                    color: black
            &-label
                display: flex
                gap: 10px
                font-size: 1.3rem
                align-items: center
                &__input
                    color: black
                    font-size: 1.5rem
                    border-radius: 5px
                &-select
                    font-size: 1.5rem
                    color: black
                    &__option
                        color: black
</style>