<template>
    <main>
        <div class="flex flex-row justife-between px-20 pt-12 pb-16">
            <div class="flex flex-col justify-start z-50 pb-20">
                <p class="font-extrabold text-7xl tracking-wide text-white max-w-lg mb-12">Предоставляем адреса в США, странах Европы и Японии</p>
                <p class="font-bold text-2xl leading-8 max-w-md">Покупайте в онлайн-магазинах США, Европы и Японии и отправляйте на свой адрес в любой город России</p>
            </div>
            <div class="z-40 -ml-7 mr-8" >
                <img v-bind:src="require('@/static/img/info-delivery-1.png')" class="relative -mt-12 z-20"/>
                <img v-bind:src="require('@/static/img/info-delivery-2.png')" class="absolute -mt-16 -ml-9 z-30" />
            </div>
            <div class="flex flex-row pt-64 z-50">
                <img v-bind:src="require('@/static/img/info-country.svg')" />
                <div class="-mt-20 -ml-36">
                    <p class="font-extrabold text-4xl leading-10 tracking-wide text-white absolute pt-16 pl-7 z-50">США</p>
                    <img v-bind:src="require('@/static/img/info-country-USA.svg')" class="relative z-40" /> 
                </div>
            </div>
        </div>
        <div class="flex flex-col px-20 pt-12 pb-24">
            <div class="flex justify-between gap-10 items-center text-white pb-20 z-50">
                <p class="font-extrabold text-7xl tracking-wide w-min">Популярные магазины</p>
                <p class="font-bold text-2xl leading-8 max-w-md">Устройте шоппинг без границ в онлайн-магазинах СШA, Европы и Японии. Воспользуйтесь скидками, распродажами и выгодными предложениями от любимых брендов</p>
                <button class="text-center border rounded-full w-60 px-4 py-2 mt-28">
                    <span class="font-bold text-base text-center">Получить адрес за рубежом</span>
                </button>
            </div>
            <div class="flex flex-col items-center z-50">
                <LandingMainSlider />                    
                <button class="text-center rounded-full bg-lightgreen px-4 py-2">
                    <span class="font-bold text-base text-center text-white">Все магазины</span>
                </button>
            </div>
        </div>
        <div class="flex px-20 pt-12 pb-4">
            <img v-bind:src="require('@/static/img/info-forwarding-img.png')" class="z-50" />
            <div class="flex flex-col bg-white px-20 py-12 z-50">
                <p class="font-extrabold text-7xl tracking-wide max-w-xl mb-11">Как работает Mail Forwarding</p>
                <div v-for="(forwarding, index) in forwardings" :key="`forwarding-${index}`" class="flex gap-2 mb-14 pr-28">
                    <img :src="forwarding.img"/>
                    <span class="font-normal text-lg leading-7">{{ forwarding.description }}</span>
                </div>
                <button class="text-center border rounded-full border-greenbasic w-60 px-4 py-2">
                    <span class="font-bold text-base leading-6 text-greenbasic text-center">Получить адрес за рубежом</span>
                </button>
            </div>
        </div>
        <div class="flex flex-col text-white px-20 pt-12 pb-28">
            <p class="font-extrabold text-7xl tracking-wide max-w-3xl mb-9 z-50">Рассчитайте стоимость доставки</p>
            <div class="grid grid-cols-3 gap-6 z-50">
                <p class="grid-text">Страна отправления</p>
                <LandingMainDropdown :options-list="Departure" v-model:value="choiceDeparture" class="z-50" />
                <div class="flex justify-between grid-text border-b-2 border-lightgreen pb-2">
                    <button v-on:click="currentWeight -= 0.5">
                        <img v-bind:src="require('@/static/img/subtraction.svg')" />
                    </button>
                    <p> {{ currentWeight }} кг</p>
                    <button v-on:click="currentWeight += 0.5">
                        <img v-bind:src="require('@/static/img/sum.svg')" />
                    </button>
                </div>
                <p class="grid-text row-span-3">Адрес доставки</p>
                <LandingMainDropdown :options-list="Delivery" v-model="choiceDelivery" />
                <div class="flex justify-between grid-text border-b-2 border-lightgreen">
                    <input class="bg-transparent w-80" />
                    <img v-bind:src="require('@/static/img/akar-icons_pencil.svg')" />
                </div>
                <div class="flex justify-between items-center">
                    <p class="font-bold text-lg leading-5">Пункт выдачи</p>
                    <p class="font-bold text-lg leading-5"> {{ }} дней</p>
                    <p class="font-bold text-3xl leading-10"> {{ }} $</p>
                </div>
                <div class="flex justify-between items-center">
                    <p class="font-bold text-lg leading-5">До двери</p>
                    <p class="font-bold text-lg leading-5"> {{ }} дней</p>
                    <p class="font-bold text-3xl leading-10"> {{ }} $</p>
                </div>
                <button class="text-center rounded-full bg-lightgreen w-32 px-4 py-2">
                    <span class="font-bold text-base leading-6 text-center">Подробнее</span>
                </button>
                <p class="text-mass font-bold text-lg leading-5">Примерный объемный вес посылок</p>
            </div>
        </div>
        <div class="px-20 pb-12 ml-28 relative z-50">
            <VolumeWeights v-on:changeWeight="currentWeight = $event" class="z-50" />
        </div>
        <div class="flex px-20 pt-12">
            <div class="bg-white absolute z-50 max-w-3xl py-12 px-20 mt-8">
                <p class="font-extrabold text-7xl tracking-wide mb-11">Услуги Mail Forwarding</p>
                <p class="font-bold text-2xl leading-7 mb-5">Основные услуги</p>
                <div v-for="(service, index) in services" :key="`service-${index}`">
                    <div class="flex justify-between gap-4 border-t-2 py-5">
                        <div class="flex flex-col gap-2 font-normal">
                            <span class="text-lg leading-7">{{ service.title }}</span>
                            <span v-if="service.remark" class="text-xs leading-3 text-aluminum max-w-xs">{{ service.remark }}</span>
                        </div>
                        <div>
                            <span class="font-bold text-lg leading-7">{{ service.price }}</span>
                        </div>
                    </div>                                        
                </div>
                <button class="text-center font-bold border border-greenbasic rounded-full px-4 py-2 mt-5">
                    <span class="text-base text-center text-greenbasic">Получить адрес за рубежом</span>
                </button>
            </div>
            <img v-bind:src="require('@/static/img/mail-forwarding.png')" class="relative z-30 left-2/4 pl-8" />
        </div>
        <div class="forwarding-main-text flex gap-56 px-20 mb-40">
            <div>
                <img :src="require('@/static/img/main-forwarding-1.png')" class="relative z-20" />
                <img :src="require('@/static/img/main-forwarding-2.png')" class="absolute z-30 -mt-52 ml-32" />
            </div>
            <div class="flex flex-col w-1/2 z-50">
                <p class="font-extrabold text-7xl tracking-wide mb-11">Доставка из США, Европы и Японии с PONY EXPRESS</p>
                <div v-for="item in mainForwarding" :key="item.id">
                    <p v-html="item.title" class="forwarding-main-info font-normal text-xl leading-7 mb-6"></p>
                </div>
                <div class="mt-14">
                    <button class="text-center font-bold border border-greenbasic rounded-full px-4 py-2 mt-5">
                        <span class="text-base text-center text-greenbasic">Получить адрес за рубежом</span>
                    </button>
                </div>                
            </div>
        </div>
    </main>
</template>

<script>

import LandingMainDropDown from '~/components/LandingMain/LandingMainDropdown.vue';
import VolumeWeights from '~/components/LandingMain/VolumeWeights.vue';
import LandingMainSlide from './LandingMainSlider.vue';

export default {
    components: {
    LandingMainDropDown,
    VolumeWeights,
    LandingMainSlide
},
    data: () => ({         
        forwardings: [
            {description: 'Цена в России «кусается», а при заказе из другой страны товар не доставляют на Ваш домашний адрес?', 
            img: require('~/static/img/info-forwarding-1.svg')},
            {description: 'Предоставим бесплатно почтовый адрес за рубежом, на который онлайн-магазин сможет отправить Ваш товар', 
            img: require('~/static/img/info-forwarding-2.svg')},
            {description: 'Проверим и упакуем все ваши заказы, приходящие на этот адрес, в одну посылку.', 
            img: require('~/static/img/info-forwarding-3.svg')},
            {description: 'Отправим товары к вам домой или в пункт выдачи без переплат по выгодной цене', 
            img: require('~/static/img/info-forwarding-4.svg')},
        ],
        Departure: [
            {id: 1, title: 'Китай'},
            {id: 2, title: 'Япония'},
            {id: 3, title: 'Грузия'},
            {id: 4, title: 'Мексика'},
            {id: 5, title: 'США'},
        ],
        Delivery: [
            {id: 101, title: 'Китай'},
            {id: 102, title: 'Япония'},
            {id: 103, title: 'Грузия'},
            {id: 104, title: 'Мексика'},
            {id: 105, title: 'США'},
        ],
        choiceDeparture: '',
        choiceDelivery: '',
        services: [
            {title: 'Инспекция посылки + 5 фото', price: '5$', remark: ''},
            {title: 'Предоставление адреса доставки за рубежом', price: 'Бесплатно', remark: ''},
            {title: 'Приём и хранение товаров на складе до 30 дней', price: 'Бесплатно', remark: ''},
            {title: 'Хранение свыше 30 дней', price: '1$/день', remark: ''},
            {title: 'Удаление лишней упаковки с товара', price: 'Бесплатно', remark: 'Услуга предоставляется бесплатно, только при заказе услуги "Инспекция посылки + 5 фото" =5$'},
            {title: 'Разделение покупки на товары (до 10 шт.)', price: 'Бесплатно', remark: 'Услуга предоставляется бесплатно, только при заказе услуги "Инспекция посылки + 5 фото" =5$'},
            {title: 'Сравнить товар и инвойс (инспекция, до 5 фото)', price: '5$', remark: ''},
            {title: 'Дополнительные 10 фото товаров', price: '2$', remark: ''},
            {title: 'Упаковка посылки для отправки в Россию', price: 'Бесплатно', remark: ''},
            {title: 'Нестандартная упаковка', price: 'Индивидуально', remark: ''},
            {title: 'Добавление товара в исходящую посылку', price: 'Бесплатно', remark: ''},
            {title: 'Сканирование документов (до 10 страниц)', price: 'Бесплатно', remark: ''},
            {title: 'Индивидуальная упаковка', price: '10$', remark: ''},
            {title: 'Розыск MF-заказа', price: '10$', remark: ''},
        ],
        currentWeight: 1,
        mainForwarding: [
            {title: 'Доставка осуществляется компанией PONY EXPRESS'},
            {title: 'Посылки летят из США, Европы и Японии, проходят таможенное оформление и доставляются по всей России до пунктов выдачи или до двери курьером по Вашему желанию.'},
            {title: 'Сроки доставки от 5 дней. Отличные тарифы на экспресс-доставку'},
            {title: 'Отследить посылку после отправки по номеру заказа можно на сайте <a href="#" style="color: #00833E; text-decoration-line: underline;">PONY EXPRESS</a>'},
            {title: '<a href="#" style="color: #00833E; text-decoration-line: underline;">Условия доставки</a>'},
            {title: '<a href="#" style="color: #00833E; text-decoration-line: underline;">Ограничения по услуге</a>'},
            {title: '<a href="#" style="color: #00833E; text-decoration-line: underline;">Информация по лимитам беспошлинного ввоза</a>'},
            {title: '<a href="#" style="color: #00833E; text-decoration-line: underline;">Где находятся пункты выдачи</a>'},
        ]
    })
}
</script>


<style scoped>

.grid-text {
    @apply font-bold text-xl leading-7;
}

.text-mass {
    text-align: end;
}

.forwarding-main-text {
    padding-top: 650px;
}

.forwarding-main-info:before {
    content: url('static/img/forwarding-text.svg');
    padding-right: 12px;
}
	
</style>