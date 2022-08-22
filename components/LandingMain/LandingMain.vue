<template>
    <main>
        <div class="flex flex-row justife-between px-20 pt-12 pb-16">
            <div class="flex flex-col justify-start z-50 pb-20">
                <p class="title-text text-white max-w-lg mb-12">Предоставляем адреса в США, странах Европы и Японии</p>
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
                <p class="title-text w-min">Популярные магазины</p>
                <p class="font-bold text-2xl leading-8 max-w-md">Устройте шоппинг без границ в онлайн-магазинах СШA, Европы и Японии. Воспользуйтесь скидками, распродажами и выгодными предложениями от любимых брендов</p>
                <button class="btn border w-60 mt-28">Получить адрес за рубежом</button>
            </div>
            <div class="flex flex-col items-center z-50">
                <LandingMainSlider />                    
                <button class="btn text-white bg-lightgreen">Все магазины</button>
            </div>
        </div>
        <div class="flex px-20 pt-12 pb-4">
            <img v-bind:src="require('@/static/img/info-forwarding-img.png')" class="z-50" />
            <div class="flex flex-col bg-white px-20 py-12 z-50">
                <p class="title-text max-w-xl mb-11">Как работает Mail Forwarding</p>
                <LandingMainMailForwarding />
                <button class="btn border border-greenbasic text-greenbasic w-60">Получить адрес за рубежом</button>
            </div>
        </div>
        <div class="flex flex-col text-white px-20 pt-12 pb-28">
            <p class="title-text max-w-3xl mb-9 z-50">Рассчитайте стоимость доставки</p>
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
                <button class="btn bg-lightgreen w-32">Подробнее</button>
                <p class="text-mass font-bold text-lg leading-5">Примерный объемный вес посылок</p>
            </div>
        </div>
        <div class="px-20 pb-12 ml-28 relative z-50">
            <VolumeWeights v-on:changeWeight="currentWeight = $event" class="z-50" />
        </div>
        <div class="flex px-20 pt-12">
            <div class="bg-white absolute z-50 max-w-3xl py-12 px-20 mt-8">
                <p class="title-text mb-11">Услуги Mail Forwarding</p>
                <p class="font-bold text-2xl leading-7 mb-5">Основные услуги</p>
                <LandingMainServices />
                <button class="btn border text-greenbasic border-greenbasic mt-5">Получить адрес за рубежом</button>
            </div>
            <img v-bind:src="require('@/static/img/mail-forwarding.png')" class="relative z-30 left-2/4 pl-8" />
        </div>
        <div class="forwarding-main-text flex gap-56 px-20 mb-40">
            <div>
                <img :src="require('@/static/img/main-forwarding-1.png')" class="relative z-20" />
                <img :src="require('@/static/img/main-forwarding-2.png')" class="absolute z-30 -mt-52 ml-32" />
            </div>
            <div class="flex flex-col w-1/2 z-50">
                <p class="title-text mb-11">Доставка из США, Европы и Японии с PONY EXPRESS</p>
                <div v-for="item in mainForwarding" :key="item.id">
                    <p v-html="item.title" class="forwarding-main-info font-normal text-xl leading-7 mb-6"></p>
                </div>
                <div class="mt-14">
                    <button class="btn border text-greenbasic border-greenbasic mt-5">Получить адрес за рубежом</button>
                </div>                
            </div>
        </div>
    </main>
</template>

<script>

import LandingMainDropDown from '~/components/LandingMain/LandingMainDropdown.vue';
import VolumeWeights from '~/components/LandingMain/VolumeWeights.vue';
import LandingMainSlide from './LandingMainSlider.vue';
import LandingMainMailForwarding from './LandingMainMailForwarding.vue';
import LandingMainServices from './LandingMainServices.vue'

export default {
    components: {
    LandingMainDropDown,
    VolumeWeights,
    LandingMainSlide,
    LandingMainMailForwarding,
    LandingMainServices
},
    data: () => ({ 
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

.title-text {
    @apply font-extrabold text-7xl tracking-wide;
}

.btn {
    @apply text-center rounded-full font-bold text-base leading-6 px-4 py-2;
}
	
</style>