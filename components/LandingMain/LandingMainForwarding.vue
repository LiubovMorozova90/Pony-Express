<template>
    <div>
        <div v-for="item in mainForwarding" :key="item.id">
            <p v-html="item.title" class="forwarding-main-info font-normal text-xl leading-7 mb-6"></p>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({        
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
.forwarding-main-info:before {
    content: url('static/img/forwarding-text.svg');
    padding-right: 12px;
}
</style>