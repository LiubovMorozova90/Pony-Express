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
                    <LandingMainDropdown :options-list="Departure" v-model:value="choiceDeparture" class="z-50" />
                    <div class="flex justify-between grid-text border-b-2 border-lightgreen pb-2">
                        <button v-on:click="counter -= 0.5">
                            <img v-bind:src="require('@/static/img/subtraction.svg')" />
                        </button>
                        <p> {{ counter }} кг</p>
                        <button v-on:click="counter += 0.5">
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
        </div>
        <div class="package">
            <div class="px-20 pt-12 ml-28">
                <img v-bind:src="require('@/static/img/package-mass.svg')" />
            </div>
        </div>
        <div class="mail-forwarding">
            <div class="flex px-20 pt-12">
                <div class="bg-white py-12 px-20">
                    <p class="font-extrabold text-7xl tracking-wide mb-11">Услуги Mail Forwarding</p>
                    <p class="font-bold text-2xl leading-7 mb-5">Основные услуги</p>
                    <div v-for="(service, index) in services" :key="`service-${index}`" >
                        <div class="flex justify-between border-t-2">
                            <div class="flex flex-col gap-2">
                                <span class="font-normal text-lg leading-7">{{ service.title }}</span>
                                <span class="font-normal text-xs leading-3 text-grey">{{ service.remark }}</span>
                            </div>
                            <div>
                                <span class="font-bold text-lg leading-7">{{ service.price }}</span>
                            </div>
                        </div>                                        
                    </div>
                    <button class="text-center font-bold border border-greenbasic rounded-full px-4 py-2">
                        <span class="text-base text-center text-greenbasic">Получить адрес за рубежом</span>
                    </button>
                </div>
                <img v-bind:src="require('@/static/img/mail-forwarding.png')" />
            </div>
        </div>
    </main>
</template>

<script>

import LandingMainDropDown from '~/components/Landing-main/LandingMainDropdown.vue';

export default {
    components: {
    LandingMainDropDown,
},
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
        counter: 0,
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
        ]
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

.package {
    background: linear-gradient(270.19deg, #45A145 -0.01%, #71BC46 98.04%);
}

.mail-forwarding {
    background: linear-gradient(270.19deg, #1A771A -0.01%, #56A329 98.04%);
}
		
</style>