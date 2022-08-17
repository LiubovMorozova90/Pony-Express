<template>
    <div class="mx-20">
        <div class="flex justify-between items-center mt-7 mb-30">
            <div class="logo">
                <img v-bind:src="require('@/static/img/header-navigation-logo.png')" />
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
            <div class="">
                <button class="btn-personal-area">
                    <p class="btn-personal-area-text">Личный кабинет</p>
                </button>
            </div>
        </div>
        <div class="flex flex-col justify-start mb-20">
            <p class="uppercase font-extrabold text-7.5xl tracking-wide max-w-2xl mb-12">зарубежный sale</p>
            <p class="font-bold text-2.5xl leading-7 max-w-xs mb-46">Выгодные онлайн покупки за рубежом с быстрой доставкой</p>
            <button class="btn-title">
                <p class="btn-title-text">Получить адрес за рубежом</p>
            </button>
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'Header',
}
</script>

<style scoped>
.btn-personal-area {
    @apply text-center border rounded-full font-bold px-4 py-2;
};
.btn-personal-area {
    @apply text-base text-center; 
};
.btn-title {
    @apply border-0 rounded-full font-bold text-center px-4 py-2;
};
.btn-title-text {
    @apply text-center text-2xl;
};
</style>