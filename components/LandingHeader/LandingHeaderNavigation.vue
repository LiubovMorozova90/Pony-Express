<template>
    <div class="flex justify-between items-center pt-7 mb-32">            
        <img v-bind:src="require('@/static/img/header-navigation-logo.svg')" />
        <ul v-for="nav in navigations" :key="nav.id" class="font-bold text-lg z-50">
            <li class="navbar"><a href="#">{{nav.title}}</a></li>
        </ul> 
        <button class="btn border text-greenbasic border-greenbasic z-50">Личный кабинет</button>            
    </div>
</template>

<script>
export default {
    data: () => ({
        navigations: [
            {title: 'Адреса'},
            {title: 'Магазины'},
            {title: 'Как это работает'},
            {title: 'Тарифы'},
            {title: 'Услуги'},
            {title: 'Доставка'}
        ]
    })
}
</script>


<style scoped>
.navbar {
    @apply inline-block mr-12;
}

.btn {
    @apply text-center text-base font-bold rounded-full px-4 py-2;
}

</style>