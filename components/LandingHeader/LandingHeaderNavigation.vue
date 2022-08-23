<template>
  <div class="nav-content">
    <img :src="require('@/static/img/header-navigation-logo.svg')" alt="" />
    <ul v-for="nav in navigations" :key="nav.id" class="nav-text">
      <li class="navbar">
        <a href="#">{{ nav.title }}</a>
      </li>
    </ul>
    <button class="btn border text-greenbasic border-greenbasic z-50">
      Личный кабинет
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    navigations: [
      { title: 'Адреса' },
      { title: 'Магазины' },
      { title: 'Как это работает' },
      { title: 'Тарифы' },
      { title: 'Услуги' },
      { title: 'Доставка' },
    ],
  }),
}
</script>

<style scoped>
.navbar {
  @apply inline-block mr-12;
}

.btn {
  @apply text-center text-base font-bold rounded-full px-4 py-2;
}

.nav-text {
  @apply text-lg font-bold z-50;
}

.nav-content {
  @apply flex justify-between items-center pt-7 mb-32;
}

@media (max-width: 1024px) {
  .nav-text {
    font-size: 16px;
    padding-left: 10px;
  }

  .navbar {
    margin-right: 20px;
  }

  .btn {
    padding-left: 10px;
    padding-right: 10px;
  }

  .nav-content {
    margin-bottom: 80px;
  }
}
</style>