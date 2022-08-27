<template>
  <div class="flex flex-row justife-between pt-12 pb-16">
    <div class="flex flex-col justify-start z-50 pb-20">
      <p class="title-text text-white max-w-lg mb-12">
        Предоставляем адреса в США, странах Европы и Японии
      </p>
      <p class="font-bold text-2xl leading-8 max-w-md">
        Покупайте в онлайн-магазинах США, Европы и Японии и отправляйте на свой
        адрес в любой город России
      </p>
    </div>
    <div class="z-40 -ml-7 mr-8">
      <img
        alt=""
        :src="require('@/static/img/info-delivery-1.png')"
        class="relative -mt-12 z-20"
      />
      <img
        alt=""
        :src="require('@/static/img/info-delivery-2.png')"
        class="absolute -mt-16 -ml-9 z-30"
      />
    </div>
    <div class="flex flex-row pt-64 z-50">
      <img alt="" :src="require('@/static/img/info-country.svg')" />
      <div class="-mt-20 -ml-36">
        <p
          class="font-extrabold text-4xl leading-10 tracking-wide text-white absolute pt-16 pl-7 z-50"
        >
          США
        </p>
        <img
          alt=""
          :src="require('@/static/img/info-country-USA.svg')"
          class="relative z-40"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-text {
  @apply font-extrabold text-7xl tracking-wide;
}
</style>