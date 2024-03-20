<script setup>
</script>

<template>
    <div class="catFilter">
        <div class="container">
            <div class="box">
                <NuxtLink to="/" class="title section-title">Каталоги оригинальных запчастей</NuxtLink>

                <div class="window">
                    <div class="half">
                        <div class="title">Поиск модели по VIN-номеру:</div>

                        <div class="search">
                            <input type="text" class="search__input" placeholder="Введите номер запчасти или VIN">
                            <button class="search__btn">
                                <img src="/logos/search.svg">
                            </button>
                        </div>

                        <div class="info">
                            Например: 
                            <span>WAUBH54B11N111054</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>