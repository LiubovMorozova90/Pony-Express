<template>
  <div class="flex flex-col pt-12 pb-24">
    <div class="flex justify-between gap-10 items-center text-white pb-20 z-50">
      <p class="title-text w-min">Популярные магазины</p>
      <p class="font-bold text-2xl leading-8 max-w-md">
        Устройте шоппинг без границ в онлайн-магазинах СШA, Европы и Японии.
        Воспользуйтесь скидками, распродажами и выгодными предложениями от
        любимых брендов
      </p>
      <button class="btn border w-60 mt-28">Получить адрес за рубежом</button>
    </div>
    <div class="flex flex-col items-center z-50">
      <landing-main-slide />
      <button class="btn text-white bg-lightgreen">Все магазины</button>
    </div>
  </div>
</template>

<script>
import LandingMainSlide from './LandingMainSlider.vue'

export default {
  components: {
    LandingMainSlide,
  },
}
</script>

<style scoped>
.title-text {
  @apply font-extrabold text-7xl tracking-wide;
}

.btn {
  @apply text-center rounded-full font-bold text-base leading-6 px-4 py-2;
}
</style>
