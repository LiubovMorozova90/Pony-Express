<template>
  <div>
    <div v-for="(service, index) in services" :key="`service-${index}`">
      <div class="flex justify-between gap-4 border-t-2 py-5">
        <div class="flex flex-col gap-2 font-normal">
          <span class="text-lg leading-7">{{ service.title }}</span>
          <span
            v-if="service.remark"
            class="text-xs leading-3 text-aluminum max-w-xs"
            >{{ service.remark }}</span
          >
        </div>
        <div>
          <span class="font-bold text-lg leading-7">{{ service.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    services: [
      { title: 'Инспекция посылки + 5 фото', price: '5$', remark: '' },
      {
        title: 'Предоставление адреса доставки за рубежом',
        price: 'Бесплатно',
        remark: '',
      },
      {
        title: 'Приём и хранение товаров на складе до 30 дней',
        price: 'Бесплатно',
        remark: '',
      },
      { title: 'Хранение свыше 30 дней', price: '1$/день', remark: '' },
      {
        title: 'Удаление лишней упаковки с товара',
        price: 'Бесплатно',
        remark:
          'Услуга предоставляется бесплатно, только при заказе услуги "Инспекция посылки + 5 фото" =5$',
      },
      {
        title: 'Разделение покупки на товары (до 10 шт.)',
        price: 'Бесплатно',
        remark:
          'Услуга предоставляется бесплатно, только при заказе услуги "Инспекция посылки + 5 фото" =5$',
      },
      {
        title: 'Сравнить товар и инвойс (инспекция, до 5 фото)',
        price: '5$',
        remark: '',
      },
      { title: 'Дополнительные 10 фото товаров', price: '2$', remark: '' },
      {
        title: 'Упаковка посылки для отправки в Россию',
        price: 'Бесплатно',
        remark: '',
      },
      { title: 'Нестандартная упаковка', price: 'Индивидуально', remark: '' },
      {
        title: 'Добавление товара в исходящую посылку',
        price: 'Бесплатно',
        remark: '',
      },
      {
        title: 'Сканирование документов (до 10 страниц)',
        price: 'Бесплатно',
        remark: '',
      },
      { title: 'Индивидуальная упаковка', price: '10$', remark: '' },
      { title: 'Розыск MF-заказа', price: '10$', remark: '' },
    ],
  }),
}
</script>
