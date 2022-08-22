<template>
    <div>
        <div v-for="(forwarding, index) in forwardings" :key="`forwarding-${index}`" class="flex gap-2 mb-14 pr-28">
            <img :src="forwarding.img"/>
            <span class="font-normal text-lg leading-7">{{ forwarding.description }}</span>
        </div>
    </div>
    
</template>

<script>

export default {
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
    })
}
</script>
