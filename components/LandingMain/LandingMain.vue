<template>
  <main>
    <div class="container block">
      <LandingMainInfoTitle />
      <LandingMainPopularStores />
      <LandingMainMailForwarding />
      <div class="flex flex-col text-white pt-12 pb-28">
        <p class="title-text max-w-3xl mb-9 z-50">
          Рассчитайте стоимость доставки
        </p>
        <div class="grid grid-cols-3 gap-6 z-50">
          <p class="grid-text">Страна отправления</p>
          <landing-main-drop-down
            v-model="choiceDeparture"
            :options-list="Departure"
            class="z-50"
          />
          <div
            class="flex justify-between grid-text border-b-2 border-lightgreen pb-2"
          >
            <button @click="currentWeight -= 0.5">
              <img alt="" :src="require('@/static/img/subtraction.svg')" />
            </button>
            <p>{{ currentWeight }} кг</p>
            <button @click="currentWeight += 0.5">
              <img alt="" :src="require('@/static/img/sum.svg')" />
            </button>
          </div>
          <p class="grid-text row-span-3">Адрес доставки</p>
          <landing-main-drop-down
            v-model="choiceDelivery"
            :options-list="Delivery"
          />
          <div
            class="flex justify-between grid-text border-b-2 border-lightgreen"
          >
            <input class="bg-transparent w-80" />
            <img alt="" :src="require('@/static/img/akar-icons_pencil.svg')" />
          </div>
          <div class="flex justify-between items-center">
            <p class="font-bold text-lg leading-5">Пункт выдачи</p>
            <p class="font-bold text-lg leading-5">{{}} дней</p>
            <p class="font-bold text-3xl leading-10">{{}} $</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="font-bold text-lg leading-5">До двери</p>
            <p class="font-bold text-lg leading-5">{{}} дней</p>
            <p class="font-bold text-3xl leading-10">{{}} $</p>
          </div>
          <button class="btn bg-lightgreen w-32">Подробнее</button>
          <p class="text-mass font-bold text-lg leading-5">
            Примерный объемный вес посылок
          </p>
        </div>
      </div>
      <div class="relative z-50 pb-12 ml-28">
        <VolumeWeights class="z-50" @changeWeight="currentWeight = $event" />
      </div>
      <LandingMainServices />
      <LandingMainForwarding />
    </div>

    
    
    
  </main>
</template>

<script>
import LandingMainMailForwarding from './LandingMainMailForwarding.vue'
import LandingMainServices from './LandingMainServices.vue'
import LandingMainForwarding from './LandingMainForwarding.vue'
import VolumeWeights from '~/components/LandingMain/VolumeWeights.vue'
import LandingMainDropDown from '~/components/LandingMain/LandingMainDropdown.vue'
import LandingMainInfoTitle from '~/components/LandingMain/LandingMainInfoTitle.vue'
import LandingMainPopularStores from '~/components/LandingMain/LandingMainPopularStores.vue'

export default {
  components: {
    LandingMainDropDown,
    VolumeWeights,
    LandingMainMailForwarding,
    LandingMainServices,
    LandingMainForwarding,
    LandingMainInfoTitle,
    LandingMainPopularStores,
  },
  data: () => ({
    Departure: [
      { id: 1, title: 'Китай' },
      { id: 2, title: 'Япония' },
      { id: 3, title: 'Грузия' },
      { id: 4, title: 'Мексика' },
      { id: 5, title: 'США' },
    ],
    Delivery: [
      { id: 101, title: 'Китай' },
      { id: 102, title: 'Япония' },
      { id: 103, title: 'Грузия' },
      { id: 104, title: 'Мексика' },
      { id: 105, title: 'США' },
    ],
    choiceDeparture: '',
    choiceDelivery: '',
    currentWeight: 1,
  }),
}
</script>

<style scoped>
.grid-text {
  @apply font-bold text-xl leading-7;
}

.text-mass {
  text-align: end;
}

.forwarding-main-text {
  padding-top: 650px;
}

.title-text {
  @apply font-extrabold text-7xl tracking-wide;
}

.btn {
  @apply text-center rounded-full font-bold text-base leading-6 px-4 py-2;
}

.container {
  max-width: 1281px;
  margin: 0 auto;
}
</style>
