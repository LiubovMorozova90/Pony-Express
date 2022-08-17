<template>
    <div class="header-fon">
       <div class="px-20 font-circe">
        <div class="flex justify-between items-center pt-7 mb-32">
            <div class="logo">
                <img v-bind:src="require('@/static/img/header-navigation-logo.svg')" />
            </div>
            <div class="">
                <ul class="font-bold text-lg">
                    <li class="inline-block mr-12"><a href="#">Адреса</a></li>
                    <li class="inline-block mr-12"><a href="#">Магазины</a></li>
                    <li class="inline-block mr-12"><a href="#">Как это работает</a></li>
                    <li class="inline-block mr-12"><a href="#">Тарифы</a></li>
                    <li class="inline-block mr-12"><a href="#">Услуги</a></li>
                    <li class="inline-block"><a href="#">Доставка</a></li>
                </ul>
            </div>
            <div class="text-greenbasic">
                <button class="btn-personal-area">
                    <p class="btn-personal-area-text">Личный кабинет</p>
                </button>
            </div>
        </div>
        <div class="flex flex-col justify-start mb-20">
            <p class="uppercase font-extrabold leading-23 text-7xl tracking-wide max-w-2xl mb-12">зарубежный sale</p>
            <p class="font-bold text-2xl max-w-xs mb-44">Выгодные онлайн покупки за рубежом с быстрой доставкой</p>
            <button class="btn-title bg-greenbasic max-w-xs border-0 rounded-full font-bold text-center px-4 py-2">
                <p class="btn-title-text text-white">Получить адрес за рубежом</p>
            </button>
        </div>
        <div>

        </div>
    </div> 
    </div>
    
    
</template>

<script>

export default {
    name: 'Header',
}
</script>

<style scoped>
.header-fon {
    background-image: url('static/img/header-fon.png');
    background-size: cover;
}
.btn-personal-area {
    @apply text-center border border-greenbasic rounded-full font-bold px-4 py-2;
};
.btn-personal-area {
    @apply text-base text-center; 
};
.btn-title {
    @apply border-0 rounded-full font-bold text-center max-w-xs px-4 py-2;
};
.btn-title-text {
    @apply text-center text-2xl;
};
</style>