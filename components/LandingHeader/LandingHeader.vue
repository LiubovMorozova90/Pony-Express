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
        <button class="btn-title">
          <span class="btn-title-text">Получить адрес за рубежом</span>
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

.btn-title {
  @apply font-bold text-center border-0 rounded-full bg-greenbasic max-w-xs px-4 py-2;
}

.btn-title-text {
  @apply text-center text-xl leading-8 text-white;
}
</style>
