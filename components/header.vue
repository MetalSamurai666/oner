<script setup>

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="box">
                <div class="logo">
                    <NuxtLink to="/">
                        <img src="/logo.svg">
                    </NuxtLink>
                </div>

                <div class="search">
                    <input type="text" class="search__input" placeholder="Введите номер запчасти или VIN">
                    <button class="search__btn">
                        <img src="/logos/search.svg">
                    </button>
                </div>

                <div class="option">
                    <img src="/logos/geo.svg" alt="Geo Logo" class="option__logo">
                    <div class="option__title">Санкт-Петербург</div>
                </div>

                <div class="option option_bold">
                    <img src="/logos/call.svg" alt="Phone Logo" class="option__logo">
                    <div class="option__title">+7 (347) 229-46-45</div>
                </div>

                <div class="option">
                    <img src="/logos/user.svg" alt="User Logo" class="option__logo">
                    <div class="option__title">Вход  /  Регистрация</div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import '@/assets/styles/components/header.scss';
</style>