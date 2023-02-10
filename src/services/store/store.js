import cartItems from '../utils/data';
import { reactive } from 'vue'

const store = reactive({
    cartItems: cartItems.slice(0, 3),
    allItems: cartItems,
    setUp: false,

    getItemAmount(id) {
        return this.cartItems.find(el => el.id === id).amount;
    },

    setCartItems(id, amount) {
        const changedCartItems = this.cartItems.map(el => {
            if(el.id === id) {
                return {...el, amount: amount}
            } else {
                return el;
            }
        })
        this.cartItems = changedCartItems;
    },
    removeItemFromCart(id) {
        this.cartItems = this.cartItems.filter(el => el.id !== id); 
    },
    clearCartItems() {
        this.cartItems = [];
    }

});

export default store;
