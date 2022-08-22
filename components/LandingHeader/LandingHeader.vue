<template>
  <header class="header">
    <div class="px-20">
      <LandingHeaderNavigation />
      <div class="flex flex-col justify-start pb-20">
        <p
          class="uppercase font-extrabold leading-23 text-7xl tracking-wide max-w-2xl mb-12"
        >
          зарубежный sale
        </p>
        <p class="font-bold text-2xl max-w-xs mb-44">
          Выгодные онлайн покупки за рубежом с быстрой доставкой
        </p>
        <button class="btn text-xl leading-8 text-white bg-greenbasic max-w-xs">
          Получить адрес за рубежом
        </button>
      </div>
      <LandingHeaderBenefits />
    </div>
  </header>
</template>

<script>
import LandingHeaderNavigation from './LandingHeaderNavigation.vue'
import LandingHeaderBenefits from './LandingHeaderBenefits.vue'

export default {
  components: { LandingHeaderNavigation, LandingHeaderBenefits },
}
</script>

<style scoped>
.header {
  background-image: url('static/img/header-fon.png');
  background-size: cover;
}

.btn {
  @apply font-bold text-center rounded-full px-4 py-2;
}
</style>
