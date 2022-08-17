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
    @apply font-bold text-[16px] leading-6 text-center font-['Circe'];
};

</style>