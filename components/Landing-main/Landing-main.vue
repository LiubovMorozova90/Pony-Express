<template>
    <main>        
        <div class="info-delivery pb-32">
            <div class="info-delivery-content flex flex-row justife-between px-20 pt-12">
                <div class="flex flex-col justify-start z-50 pb-20">
                    <p class="font-extrabold text-7xl tracking-wide text-white max-w-lg mb-12">Предоставляем адреса в США, странах Европы и Японии</p>
                    <p class="font-bold text-2xl leading-8 max-w-md">Покупайте в онлайн-магазинах США, Европы и Японии и отправляйте на свой адрес в любой город России</p>
                </div>
                <div class="z-40 -ml-7 mr-8" >
                    <img v-bind:src="require('@/static/img/info-delivery-1.png')" class="relative z-20"/>
                    <img v-bind:src="require('@/static/img/info-delivery-2.png')" class="absolute -mt-16 -ml-9 z-30" />
                </div>
                <div class="flex flex-row pt-64">
                    <img v-bind:src="require('@/static/img/info-country.svg')" />
                    <div class="-mt-20 -ml-36">
                        <p class="font-extrabold text-4xl leading-10 tracking-wide text-white absolute pt-16 pl-7 z-50">США</p>
                        <img v-bind:src="require('@/static/img/info-country-USA.svg')" class="relative z-40" /> 
                    </div>
                </div>
            </div> 
        </div> 
        <div class="info-shop pb-32">
            <div class="flex flex-col px-20 pt-12">
                <div class="flex justify-between gap-10 items-center text-white pb-20">
                    <p class="font-extrabold text-7xl tracking-wide w-min">Популярные магазины</p>
                    <p class="font-bold text-2xl leading-8 max-w-md">Устройте шоппинг без границ в онлайн-магазинах СШA, Европы и Японии. Воспользуйтесь скидками, распродажами и выгодными предложениями от любимых брендов</p>
                    <button class="text-center border rounded-full w-60 px-4 py-2 mt-28">
                        <span class="font-bold text-base text-center">Получить адрес за рубежом</span>
                    </button>
                </div>
                <div class="flex flex-col items-center">
                    <div class="max-w-7xl mb-10">
                        <client-only>
                            <agile ref="carousel" :options="sliderOptions">
                                <div v-for="(shop, index) in shops" :key="shop.id">                        
                                    <img :src="shop.img" class="w-80 h-52" />                      
                                </div>
                            </agile>
                        </client-only>
                    </div>                    
                    <button class="text-center rounded-full bg-lightgreen px-4 py-2">
                        <span class="font-bold text-base text-center text-white">Все магазины</span>
                    </button>
                </div>
            </div>
        </div> 
        <div class="info-forwarding pb-32">
            <div class="flex px-20 pt-12">
                <img v-bind:src="require('@/static/img/info-forwarding-img.png')" />
                <div class="flex flex-col bg-white px-20 py-12">
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
        </div>  
        <div class="calculation-price pb-32">
            <div class="flex flex-col text-white px-20 pt-12">
                <p class="font-extrabold text-7xl tracking-wide max-w-3xl mb-9">Рассчитайте стоимость доставки</p>
                <div class="grid grid-cols-3 gap-6">
                    <p class="grid-text">Страна отправления</p>
                    <div class="grid-text border-b-2 border-lightgreen">
                        <button class="absolute pl-96">
                            <img v-bind:src="require('@/static/img/chevron-down.svg')" />
                        </button>
                        <div v-show="!showDeparture">
                            <p>Китай</p>
                            <p>Япония</p>
                            <p>Грузия</p>
                            <p>Мексика</p>
                            <p>Индия</p>
                            <p>США</p>
                        </div>                        
                    </div>
                    <div class="grid-text border-b-2 border-lightgreen">0.5</div>
                    <p class="grid-text row-span-3">Адрес доставки</p>
                    <div class="grid-text border-b-2 border-lightgreen">
                        <button class="absolute pl-96">
                            <img v-bind:src="require('@/static/img/chevron-down.svg')" />
                        </button>
                        <div v-show="!showDelivery">
                            <p>Китай</p>
                            <p>Япония</p>
                            <p>Грузия</p>
                            <p>Мексика</p>
                            <p>Индия</p>
                            <p>США</p>
                        </div>
                    </div>
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
        </div>
    </main>
</template>

<script>
export default {
    data: () => ({        
        sliderOptions: {
        autoplay: false,
        centerMode: true,
        dots: true,
        navButtons: false,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
            navButtons: true,
            },
          },
        ],
      },    
        shops: [
            {img: require('~/static/img/slider-shop-amazon.svg')},
            {img: require('~/static/img/slider-shop-ebay.svg')},
            {img: require('~/static/img/slider-shop-levi.svg')},
            {img: require('~/static/img/slider-shop-6pm.svg')},
            {img: require('~/static/img/slider-shop-amazon.svg')},
            {img: require('~/static/img/slider-shop-amazon.svg')},
        ],        
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
        showDeparture: true,
        Departure: [],
        showDelivery: true,
        Delivery: [],
    })
}
</script>


<style scoped>
.info-delivery {
    background: linear-gradient(270.19deg, #45A145 -0.01%, #71BC46 98.04%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.info-delivery-content {}

.info-shop {
    background: linear-gradient(270.19deg, #1A771A -0.01%, #56A329 98.04%);
}

.info-forwarding {
    background: linear-gradient(270.19deg, #45A145 -0.01%, #71BC46 98.04%);
}

.calculation-price {
    background: linear-gradient(270.19deg, #1A771A -0.01%, #56A329 98.04%);
}

.grid-text {
    @apply font-bold text-xl leading-7;
}

.text-mass {
    text-align: end;
}
		
</style>