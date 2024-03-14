<script setup>
    const props = defineProps({
        card: Object
    })
</script>

<template>
    <div class="prdct">
        <div class="prdct__box">
            <NuxtLink to="/" class="prdct__img">
                <img src="/prdcts/prdc1.png" alt="Product Image">
            </NuxtLink>

            <div class="prdct__info">
                <div class="prdct__art">Артикул: <span>153789</span></div>

                <NuxtLink to="/" class="prdct__rating">
                    <div class="prdct__stars">
                        <img src="/prdcts/stars.png">
                    </div>
                    <div class="prdct__num">4.0 <span>(51)</span></div>
                </NuxtLink>
            </div>

            <NuxtLink to="/" class="prdct__title">Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное</NuxtLink>

            <div class="prdct__extra">
                <div class="prdct__price">2 334 ₽</div>
                
                <div class="prdct__discount">2 864 ₽</div>

                <button class="prdct__cart">
                    <img src="/logos/cart.svg" alt="Cart Logo">
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/card-prdct.scss';
</style>