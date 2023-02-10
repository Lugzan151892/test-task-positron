<template>
    <div class="item">
        <img :src="'/' + props.item.id + '.png'" alt="" class="item__image">
        <div class="item__description">
            <h2 class="item__description-title">Вытяжное устройство G2H</h2>
            <p class="item__description-info">12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия</p>
            <p class="item__description-article">Артикул: G2H1065</p>
        </div>
        <div class="item__amount">            
            <AmountButton @click="decrement" class="item__amount-element">-</AmountButton>
            <div class="item__amount-element">{{ counter }}</div>
            <AmountButton @click="increment" class="item__amount-element">+</AmountButton>
        </div>
        <p class="item__price">
            {{props.item.price * props.item.amount}} ₽
        </p>
    </div>
</template>
<script setup>   
    import { ref } from 'vue';
    import AmountButton from './ui/AmountButton.vue';
    import store from '../services/store/store';
    const props = defineProps({
        item: Object
    })
    const counter = ref(store.getItemAmount(props.item.id));
    function increment(){
        counter.value++
        store.setCartItems(props.item.id, counter.value);
    }
    function decrement(){
        if(counter.value === 1) return;
        counter.value--
        store.setCartItems(props.item.id, counter.value)
        
    }
</script>
<style lang="css">
    .item {
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #C4C4C4;
        margin-bottom: 25px;
    }
    .item__image {
        max-width: 100px;
        max-height: 100px;
        margin-left: 15px;
    }
    .item__description {
        margin-left: 31px;
        max-width: 263px;
    }
    .item__description-title {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
    }
    .item__description-info {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        margin: 6px 0 7px;
    }
    .item__description-article {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;   
        color: #797B86;
    }
    .item__amount {
        margin-left: 79px;
        display: flex;
        align-items: center;
    }
    .item__amount-element {
        width: 34px;
        text-align: center;
    }
    .item__price {
        margin-left: 84px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        text-align: right;
        color: #1F2432;
    }
</style>
