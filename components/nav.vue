<script setup>
    const nav = ref([
        {
            title: 'Запчасти для ТО',
            link: '/'
        },
        {
            title: 'Автомасла',
            link: '/'
        },
        {
            title: 'Оригинальные запчасти',
            link: '/'
        },
        {
            title: 'Неоригинальные запчасти',
            link: '/'
        },
        {
            title: 'Лампочки',
            link: '/'
        },
        {
            title: 'Аккумуляторы',
            link: '/'
        },
    ])
</script>

<template>
    <div class="nav">
        <div class="container">
            <div class="box">
                <ul class="list">

                    <li class="item item_purple">
                        <NuxtLink to="/" class="item__box">
                            <img src="/logos/menu.svg" alt="Menu Logo" class="item__logo">
                            <div class="item__title">Все категории</div>
                        </NuxtLink>
                    </li>

                    <div class="search">
                        <input type="text" class="search__input" placeholder="Введите номер запчасти или VIN">
                        <button class="search__btn">
                            <img src="/logos/search.svg">
                        </button>
                    </div>

                    <li class="item item_nav_pc" v-for="item, idx in nav" :key="idx">
                        <NuxtLink :to="item?.link" class="item__box">
                            <div class="item__title">{{ item?.title }}</div>
                        </NuxtLink>
                    </li>

                    <li class="item item_nav_mob" v-for="item, idx in nav.slice(0, 3)" :key="idx">
                        <NuxtLink :to="item?.link" class="item__box">
                            <div class="item__title">{{ item?.title }}</div>
                        </NuxtLink>
                    </li>

                    <li class="item item_gray item_cart">
                        <NuxtLink to="/" class="item__box">
                            <img src="/logos/cart.svg" alt="Menu Logo" class="item__logo">
                            <div class="item__title">Корзина</div>
                            <div class="item__label">5</div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/nav.scss';
</style>