<script setup>
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="box">
                <div class="head">
                    <ul class="list">
                        <li class="item">
                            <div class="item__title">
                                Меню компании
                            </div>

                            <ul class="item__list">
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Реквизиты и информация
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Новости
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Вакансии
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Поставщикам
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Контакты
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="item">
                            <div class="item__title">
                                Каталоги
                            </div>

                            <ul class="item__list">
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Реквизиты и информация
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Новости
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Вакансии
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Поставщикам
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Контакты
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="item">
                            <div class="item__title">
                                Помощь
                            </div>

                            <ul class="item__list">
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Реквизиты и информация
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Новости
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Вакансии
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Поставщикам
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Контакты
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="item">
                            <div class="item__title">
                                Товары и бренды
                            </div>

                            <ul class="item__list">
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Список брендов
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Популярные товары
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/" class="item__link">
                                        Наличие на складах
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>

                        <li class="item">
                            <NuxtLink to="/" class="message">
                                <img src="/logos/msg.svg" class="message__img">

                                <div class="message__text">
                                    <div class="message__title">Консультация Online</div>

                                    <div class="message__info">Задавайте вопросы</div>
                                </div>
                            </NuxtLink>

                            <div class="status">
                                
                                <div class="status__logo"></div>

                                <div class="status__title">
                                    Сервис работает в обычном режиме
                                </div>
                            </div>

                            <div class="conf">
                                <NuxtLink to="/" class="text">Оферта</NuxtLink>
                                <NuxtLink to="/" class="text">Конфиденциальность</NuxtLink>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="foot">
                    <div class="text">
                        Copyright © ООО «Oner.ru» 2021. All rights reserved.
                    </div>

                    <div class="payment">
                        <div class="text">Принимаем к оплате</div>

                        <a href="#" class="btn">
                            <img src="/logos/visa.svg" alt="Visa Logo">
                        </a>
                        <a href="#" class="btn">
                            <img src="/logos/mastercard.svg" alt="MasterCard Logo">
                        </a>
                        <a href="#" class="btn">
                            <img src="/logos/mir.svg" alt="MIR Logo">
                        </a>
                    </div>

                    <div class="conf">
                        <NuxtLink to="/" class="text">Оферта</NuxtLink>
                        <NuxtLink to="/" class="text">Конфиденциальность</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    @import '@/assets/styles/components/footer.scss';
</style>