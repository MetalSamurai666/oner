<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    const slider = ref([
        {
            title: 'Оригинальные автомасла со скидкой <span>15%</span>',
            info: 'Акция действует с 1 по 30 июня 2021',
            img: 'wrapper/oil.png',
            imgAlt: 'Oil Pic'
        },
        {
            title: 'Запчасти для всех видов транспорта',
            info: 'Акция действует с 1 по 30 июня 2021',
            img: 'wrapper/oil.png',
            imgAlt: 'Oil Pic'
        },
    ])
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="box">
                <Splide 
                    :options="{ 
                        rewind: true,
                        fixedHeight: 420,
                        type: 'fade',
                        classes: {
                            arrow : 'splide__arrow slider__arrow',
                            prev  : 'splide__arrow--prev slider__arrow--prev',
                            next  : 'splide__arrow--next slider__arrow--next',
                            page      : 'splide__pagination__page slider__page',
                            pagination: 'splide__pagination slider__pagination'
                        },
                        breakpoints: {
                            1024: {
                                fixedHeight: 350
                            },
                            768: {
                                fixedHeight: 230
                            },
                            600: {
                                fixedHeight: 200
                            }
                        }
                    }" 
                    class="slider splide"
                >
                    <SplideSlide 
                        class="slider__slide splide__slide" 
                        v-for="item, idx of slider" 
                        :key="idx"
                    >
                        <div class="slider__box" >
                            <!-- <div class="slider__ball"></div> -->
                            <div class="slider__title" v-html="item?.title"></div>

                            <div class="slider__info">{{ item?.info }}</div>

                            <img :src="`/`+item?.img" :alt="item?.imgAlt" class="slider__img">
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/wrapper.scss';
</style>