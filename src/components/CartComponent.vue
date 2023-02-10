<template>
    <section class="cart">
        <div>
            <div class="cart__description">
                <div class="cart__description-container">
                    <h1 class="cart__description-title">Ваша корзина</h1>
                    <p class="cart__description-amount">{{ store.cartItems.length }} товара</p>
                </div>            
                <button @click="store.clearCartItems" class="cart__description-button">Очистить корзину</button>
            </div>
            <div class="cart__container">
                <div class="cart__container-list">
                    <div v-for="item in store.cartItems">
                        <ListItemComponent :key="item.id" :item="item"/>
                    </div>                    
                    <div class="cart__container-advanced">
                        <input v-model="store.setUp" type="checkbox" class="cart__container-checkbox">
                        <img src="../assets/images/setup.png" alt="Установка" class="cart__container-image">
                        <div class="cart__container-description">
                            <p class="cart__container-title">Установка</p>
                            <p class="cart__container-text">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        <CartTotalComponent/>        
    </section>
</template>
<script setup>   
    import ListItemComponent from './ListItemComponent.vue';
    import CartTotalComponent from './CartTotalComponent.vue';
    import store from '../services/store/store';


</script>
<style lang="css">
    .cart {
        margin-top: 60px; 
        width: 100%;
        display: flex;   
        justify-content: space-between;    
    }
    .cart__description {
        display: flex;
        max-width: 800px;
        align-items: center;
        justify-content: space-between;
    }    
    .cart__description-container {
        display: flex;
    }
    .cart__description-title {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 53px;     
        color: #1F2432;
    }
    .cart__description-amount {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #797B86;
        margin-left: 22px;
        align-self: flex-end;
    }
    .cart__description-button {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        text-align: right;
        text-decoration-line: underline;
        background: none;
        border: none;
        color: #797B86;
        cursor: pointer;
        align-self: flex-end;
    }
    .cart__container {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        width: 100%;
        align-items: center;
    }
    .cart__container-list {
        width: 100%;
        max-width: 800px;
    }
    .cart__container-advanced {
        display: flex;
        align-items: center;
        width: 100%;
        background: #F6F8FA;
        border-radius: 5px;
        height: 100px;
    }
    .cart__container-checkbox {  
        margin-left: 25px;      
        box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.08);
        border-radius: 2px;
    }
    .cart__container-image {
        margin-left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }
    .cart__container-description {
        margin-left: 20px;
    }
    .cart__container-title {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        color: #1F2432;
    }
    .cart__container-text {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #797B86;
    }

</style>
