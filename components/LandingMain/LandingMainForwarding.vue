<template>
  <div class="forwarding-main-text flex gap-56 mb-40">
    <div>
      <img
        alt=""
        :src="require('@/static/img/main-forwarding-1.png')"
        class="relative z-20"
      />
      <img
        alt=""
        :src="require('@/static/img/main-forwarding-2.png')"
        class="absolute z-30 -mt-52 ml-32"
      />
    </div>
    <div class="flex flex-col w-1/2 z-50">
      <p class="title-text mb-11">
        Доставка из США, Европы и Японии с PONY EXPRESS
      </p>
      <div v-for="item in mainForwarding" :key="item.id">
        <p
          class="forwarding-main-info font-normal text-xl leading-7 mb-6"
          v-html="item.title"
        ></p>
      </div>
      <div class="mt-14">
        <button class="btn border text-greenbasic border-greenbasic mt-5">
          Получить адрес за рубежом
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mainForwarding: [
      { title: 'Доставка осуществляется компанией PONY EXPRESS' },
      {
        title:
          'Посылки летят из США, Европы и Японии, проходят таможенное оформление и доставляются по всей России до пунктов выдачи или до двери курьером по Вашему желанию.',
      },
      {
        title: 'Сроки доставки от 5 дней. Отличные тарифы на экспресс-доставку',
      },
      {
        title:
          'Отследить посылку после отправки по номеру заказа можно на сайте <a href="#" style="color: #00833E; text-decoration-line: underline;">PONY EXPRESS</a>',
      },
      {
        title:
          '<a href="#" style="color: #00833E; text-decoration-line: underline;">Условия доставки</a>',
      },
      {
        title:
          '<a href="#" style="color: #00833E; text-decoration-line: underline;">Ограничения по услуге</a>',
      },
      {
        title:
          '<a href="#" style="color: #00833E; text-decoration-line: underline;">Информация по лимитам беспошлинного ввоза</a>',
      },
      {
        title:
          '<a href="#" style="color: #00833E; text-decoration-line: underline;">Где находятся пункты выдачи</a>',
      },
    ],
  }),
}
</script>

<style scoped>
.forwarding-main-info:before {
  content: url('static/img/forwarding-text.svg');
  padding-right: 12px;
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
</style>
