<template>    
    <section class="slider">
        <h2 class="slider__title">Просмотренные товары</h2>
        <swiper
            :slides-per-view="4"
            :space-between="50"
            navigation
            :modules="[Navigation, Pagination]"
            :pagination="{ clickable: true }"
        >
            <swiper-slide v-for="item in store.allItems">
                <SliderItem :key="item.id" :item="item"/>
            </swiper-slide>
        </swiper>
    </section>
</template>
<script setup>
import { Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination} from 'swiper';
import SliderItem from './SliderItem.vue'
import 'swiper/css';
import 'swiper/css/bundle'
import store from '../services/store/store';

</script>
<style lang="css">
    .slider {
        width: 100%;
        margin-top: 96px;
    }
    .slider__title {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
        color: #1F2432;
        margin-bottom: 60px;
    }
</style>
