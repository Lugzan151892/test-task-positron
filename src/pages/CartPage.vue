<template>
    <article class="cart-page">
        <BreadCrumbs/>
        <CartComponent/>
        <SliderComponent/>
    </article>
</template>
<script setup>
import BreadCrumbs from '../components/BreadCrumbs.vue';
import CartComponent from '../components/CartComponent.vue';
import SliderComponent from '../components/SliderComponent.vue';
</script>
<style scoped lang="css">
    .cart-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 80px;
    }
</style>
