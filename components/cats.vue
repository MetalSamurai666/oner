<script setup>
    const list = ref([
        {
            img: 'brakes.svg',
            title: 'Оригинальные запчасти',
            num: '730'
        },
        {
            img: 'engine.svg',
            title: 'Неригинальные запчасти',
            num: '269'
        },
        {
            img: 'garage.svg',
            title: 'Запчасти ВАЗ, ГАЗ, КАМАЗ',
            num: '730'
        },
        {
            img: 'door.svg',
            title: 'Кузовные запчасти',
            num: '730'
        },
        {
            img: 'belt.svg',
            title: 'Запчасти для ТО',
            num: '730'
        },
        {
            img: 'washer.svg',
            title: 'Автостёкла',
            num: '730'
        },
        {
            img: 'gear.svg',
            title: 'Автомасла',
            num: '730'
        },
        {
            img: 'gear.svg',
            title: 'Автохимия',
            num: '730'
        },
        {
            img: 'wheel.svg',
            title: 'Диски',
            num: '730'
        },
        {
            img: 'battery.svg',
            title: 'Аккумуляторы',
            num: '730'
        },
        {
            img: 'light.svg',
            title: 'Автолампы',
            num: '730'
        },
    ])
</script>

<template>
    <div class="cats">
        <div class="container">
            <div class="box">
                <ul class="list">
                    <li class="item" v-for="item, idx of list" :key="idx">
                        <NuxtLink to="/" class="item__box">
                            <div class="item__img">
                                <img 
                                    :src="`/cats/`+item?.img" 
                                    :alt="item?.title"
                                >
                            </div>

                            <div class="item__text">
                                <div class="item__title">
                                    {{ item?.title }}
                                </div>

                                <div class="item__num">{{ item?.num }} товаров</div>
                            </div>
                        </NuxtLink>
                    </li>

                    <li class="item item_all">
                        <NuxtLink to="/" class="item__box">
                            <img src="/cats/chart.svg" class="item__img">

                            <div class="item__title">Поставщикам</div>

                            <img src="/logos/arrow-white-r.svg" class="item__arrow">
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import url('@/assets/styles/components/cats.scss');
</style>