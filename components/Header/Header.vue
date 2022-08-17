<template>
    <div>
        <div class="flex justify-between items-center mt-7 mx-20 mb-30">
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
        <div>

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
</style>