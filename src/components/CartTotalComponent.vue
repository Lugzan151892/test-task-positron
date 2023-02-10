<template>
    <div class="total">
        <h2 class="total__title">Итого</h2>
        <div class="total__item">
            <span class="total__item-text">Сумма заказа</span>
            <span class="total__item-text">{{ store.cartItems.reduce((prev, curr) => prev + (curr.price * curr.amount), 0) }} ₽</span>
        </div>
        <div class="total__item">
            <span class="total__item-text">Количество</span>
            <span class="total__item-text">{{ store.cartItems.reduce((prev, curr) => prev + curr.amount , 0) }} шт</span>
        </div>
        <div class="total__item">
            <span class="total__item-text">Установка</span>
            <span class="total__item-text">{{ store.setUp ? 'Да' : 'Нет' }}</span>
        </div>
        <div class="total__price">
            <span class="total__price-text">Стоимость товаров</span>
            <span class="total__price-amount">{{ store.cartItems.reduce((prev, curr) => prev + (curr.price * curr.amount), 0) }} ₽</span>
        </div>
        <button @click="finishOrder" class="total__button total__button-form">Оформить заказ</button>
        <button @click="finishOrder" class="total__button total__button-click">Купить в 1 клик</button>
    </div>
</template>
<script setup>
import store from '../services/store/store';

function finishOrder() {
    const currentAmount = store.cartItems.reduce((prev, curr) => prev + curr.amount , 0)
    alert(`Заказ на ${currentAmount} товара создан! ${store.setUp ? 'Установка включена в заказ!' : ''}`);
    store.clearCartItems();
}
</script>
<style lang="css">
    .total {
        margin-left: 55px;
        padding: 35px 30px;
        width: 425px;
        height: 458px;
        background: #F6F8FA;
        border-radius: 5px;
        margin-top: 85px;
    }
    .total__title {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 31px;
        color: #1F2432;
    }
    .total__item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 17px;
    }
    .total__item-text {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        color: #1F2432;
    }
    .total__item:nth-child(4) {
        margin-bottom: 29px;
    }
    .total__price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
        border-top: 1px solid #AEB0B6;
    }
    .total__price-text {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        color: #1F2432;
    }
    .total__price-amount {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 34px;
        text-align: right;
        letter-spacing: 0.005em;
        color: #1F2432;
    }
    .total__button {
        padding: 14px 0;
        width: 100%;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        border: 1px solid #0069B4;
        border-radius: 4px;
        cursor: pointer;
    }
    .total__button-form {
        margin-top: 30px;
        background: #0069B4;
        color: #FFFFFF;
    }
    .total__button-click {
        background: #FFFFFF;
        color: #0069B4;
        margin-top: 12px;
    }
</style>
