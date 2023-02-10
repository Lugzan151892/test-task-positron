<template>
    <div class="slide">
        <img :src="props.item.id + '.png'" alt="" class="slide__image">
        <h2 class="slide__title">{{ item.title.split(' ')[2] }}</h2>
        <p class="slide__description">{{ item.description }}</p>
        <p class="slide__price-rubles">{{ `${item.minPrice} ₽ - ${item.maxPrice} ₽` }}</p>
        <p class="slide__price-euro">{{ `${(item.minPrice / 70).toFixed(2)} € - ${(item.maxPrice / 70).toFixed(2)} €` }}</p>
        <button class="slide__button">Подробнее</button>
    </div>
</template>
<script setup>
    const props = defineProps({
        item: Object
    });
</script>
<style lang="css">
    .slide {
        padding: 25px;
        display: flex;
        flex-direction: column;
        max-width: 305px;
        align-items: center;
        background-color: #EEF1F4;
    }
    .slide__image {
        width: 245px;
        height: 245px;
        margin-bottom: 5px;
    }
    .slide__title {
        text-align: center;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        color: #1F2432;
        margin-bottom: 10px;
    }
    .slide__description {
        text-align: center;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #1F2432;
        margin-bottom: 60px;
    }
    .slide__price-rubles {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 29px;
        letter-spacing: 0.005em;
        color: #1F2432;
    }
    .slide__price-euro {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: #797B86;
        margin-bottom: 20px;
    }
    .slide__button {
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
        background: #0069B4;
        color: #FFFFFF;
    }
</style>
