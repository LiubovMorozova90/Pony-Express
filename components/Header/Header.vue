<template>
    <div class="header">
        <div class="logo">
        </div>
        <div class="navigation">
            <ul>
                <li>Адреса</li>
                <li>Магазины</li>
                <li>Как это работает</li>
                <li>Тарифы</li>
                <li>Услуги</li>
                <li>Доставка</li>
            </ul>
        </div>
        <div>
            <button class="btn-personal-area">Личный кабинет</button>
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
    @apply font-bold text-base text-center text-['green basic'] border border-['green basic'] rounded-[80px];
};

</style>