<template>
  <div class="nav-content">
    <div class="nav-btn z-50">
      <button
        v-if="show"
        aria-label="Открыть меню"
        class="btn-menu z-50"
        @click="show = !show"
      >
        <img :src="require('@/static/img/close-menu.svg')" alt="" />
      </button>
      <button
        v-else
        aria-label="Закрыть меню"
        class="btn-menu z-50"
        @click="show = !show"
      >
        <img :src="require('@/static/img/burger-menu.svg')" alt="" />
      </button>
    </div>
    <div v-if="show" class="absolute block">
      <ul v-for="nav in navigations" :key="nav.id" class="nav-text">
        <li class="navbar">
          <a href="#">{{ nav.title }}</a>
        </li>
      </ul>
      <button class="btn border text-greenbasic border-greenbasic z-50">
        Личный кабинет
      </button>
    </div>
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
    show: false,
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
  @apply flex justify-between items-center mb-32;
}

.nav-btn {
  @apply hidden;
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

@media (max-width: 768px) {
  .nav-btn {
    @apply block;
  }
}
</style>
