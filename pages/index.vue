<script setup>
    const oils = ref({
        title: 'Автомасла',
        link: '/',
        linkText: 'Все автомасла',
        slider: false,
        list: [
            {},
            {},
            {},
            {},
        ],
    })


    const recomemnd = ref({
        title: 'Рекомендуем',
        slider: true,
        list: [
            {},
            {},
            {},
            {},
            {},
            {},
        ],
    })


    const often = ref({
        title: 'Часто продаваемые',
        slider: true,
        list: [
            {},
            {},
            {},
            {},
            {},
            {},
        ],
    })
</script>

<template>
    <div class="page page_main">
        <Wrapper />
        <Cats />
        <Cards 
            :cards="oils"
        />
        <Bigs />
        <Cards 
            :cards="recomemnd"
        />
        <Cards 
            :cards="often"
        />
    </div>
</template>

<style>

</style>