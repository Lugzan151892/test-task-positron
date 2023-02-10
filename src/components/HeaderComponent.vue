<template>
    <header class="header">
        <div class="header__bin">
            <img :src="'' + 'header_bin.svg'" alt="Корзина" class="header__bin-icon">
            <div class="header__bin-data">
                <p class="header__bin-title">Ваша корзина</p>
                <p class="header__bin-amount">{{ store.cartItems.reduce((prev, curr) => prev + curr.amount , 0) }} товаров</p>
                <p class="header__bin-total">{{ store.cartItems.reduce((prev, curr) => prev + (curr.price * curr.amount), 0) }} ₽</p>
            </div>
        </div>
    </header>
</template>
<script setup>
import store from '../services/store/store';
</script>
<style lang="css">
    .header {
        padding: 0 80px;
        height: 150px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .header__bin {
        display: flex;
        align-items: center;
        align-self: flex-end;
        height: 100%;
    }
    .header__bin-data {
        margin-left: 12px;
    }
    .header__bin-icon {
        height: 25px;
        width: 25px;
    }
    .header__bin-title {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #1F2432;
    }
    .header__bin-amount {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #797B86;
    }
    .header__bin-total {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #1F2432;
    }
</style>
