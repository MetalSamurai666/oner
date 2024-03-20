<script setup>
    import CardPrdct from './cards/card-prdct.vue';
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    const props = defineProps({
        cards: Object
    })
</script>

<template>
    <div class="cards">
        <div class="container">
            <div class="box">
                <div class="head">
                    <div class="title">
                        {{ cards?.title }}
                    </div>

                    <NuxtLink class="link" to="/" v-if="cards?.link">
                        {{ cards?.linkText }}
                        <img src="/logos/arrow-purple-r.svg">
                    </NuxtLink>
                </div>

                <div class="slidey" v-if="cards?.slider">
                    <Splide 
                        :options="{ 
                            rewind: true,
                            perPage: 4,
                            gap: 20,
                            pagination: false,
                            classes: {
                                arrow : 'splide__arrow slider__arrow',
                                prev  : 'splide__arrow--prev slider__arrow--prev',
                                next  : 'splide__arrow--next slider__arrow--next',
                                page      : 'splide__pagination__page slider__page',
                                pagination: 'splide__pagination slider__pagination'
                            },
                            breakpoints: {
                                900: {
                                    arrows: false,
                                    perPage: 2.5,
                                    gap: 20,
                                    fixedWidth: 300,
                                    dragMinThreshold: 5,
                                }
                            }
                        }" 
                        class="slider splide"
                    >
                        <SplideSlide 
                            class="slider__slide splide__slide" 
                            v-for="item, idx of cards?.list" 
                            :key="idx"
                        >
                            <CardPrdct 
                                :card="item"
                            />
                        </SplideSlide>
                    </Splide>
                </div>

                <ul class="list" v-else>
                    <li class="item" v-for="item, idx of cards?.list" :key="idx">
                        <CardPrdct 
                            :card="item"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards.scss';
</style>``