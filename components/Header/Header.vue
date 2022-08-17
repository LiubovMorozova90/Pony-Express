<template>
    <div class="header">
        <div class="logo">
        </div>
        <div class="navigation">
            <ul class="inline-block">
                <li>Адреса</li>
                <li>Магазины</li>
                <li>Как это работает</li>
                <li>Тарифы</li>
                <li>Услуги</li>
                <li>Доставка</li>
            </ul>
        </div>
        <div>
            <button class="btn-personal-area">
                <p class="btn-personal-area-text">Личный кабинет</p>
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

</style>