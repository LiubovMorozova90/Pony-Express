<template>
  <div class="nav-content">
    <div class="nav-btn z-50">
      <!-- TODO: переделай, чтобы ниже было не две кнопки открыть-закрыть, а одна, которая меняется в зависимости от текущего состояния -->
      <!-- TODO: вынеси кнопку эту в компонент отдельный с пропсами для того чтобы обработать замечание выше -->
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
    <!-- TODO: `v-if="show"` вот причина, по которой у тебя нифига не работает на десктопе -->
    <!-- TODO: разобраться как получать разрешение экрана через js, `v-if="show"` сделать, например, `v-if="show || isDesktop"` -->
    <div v-if="show" class="menu block">
      <ul v-for="nav in navigations" :key="nav.id" class="nav-text">
        <li class="navbar">
          <a href="#">{{ nav.title }}</a>
        </li>
      </ul>
      <!-- TODO: это ссылка, ссылки кнопками быть не должны, нужен тег `nuxt-link`, но так как личный кабинет будет на другом поддомене, то просто тег `a` -->
      <button class="btn border text-greenbasic border-greenbasic z-50">
        Личный кабинет
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    //  TODO: не предусмотрела, что это ссылки и у них будет атрибут href, т.е. сразу надо добавить в объекты и вывести их, а не `href="#"`
    navigations: [
      { title: 'Адреса' },
      { title: 'Магазины' },
      { title: 'Как это работает' },
      { title: 'Тарифы' },
      { title: 'Услуги' },
      { title: 'Доставка' },
    ],
    // TODO: isShown, нейминг - это важно
    show: false,
  }),
}

// TODO: почитай, что такое `scoped` и почему он ниже в классах не нужен
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

  .nav-content {
    margin-top: 40px;
  }

  .menu {
    @apply bg-white absolute mt-36 -ml-36 px-10 py-10;
  }

  .btn {
    max-width: 100%;
    background-color: #00833e;
    color: white;
    margin-top: 10px;
  }
}

@media (max-width: 640px) {
  .menu {
    padding-bottom: 500px;
    margin-top: 600px;
  }
}
</style>
