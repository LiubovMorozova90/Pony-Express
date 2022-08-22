<template>
  <footer class="bg-black">
    <div class="pt-12">
      <div class="flex justify-between pah-48 px-20">
        <div class="footer-main">
          <p class="footer-title">Компания</p>
          <div class="footer-content">
            <a href="#"><p>Контакты</p></a>
            <a href="#"><p>Пользовательское соглашение</p></a>
            <a href="#"><p>Политика конфиденциальности</p></a>
          </div>
        </div>
        <div class="footer-main">
          <p class="footer-title">Информация</p>
          <div class="footer-content">
            <a href="#"><p>Как это работает</p></a>
            <a href="#"><p>Популярные магазины</p></a>
            <a href="#"><p>Способы оплаты</p></a>
            <a href="#"><p>Лимиты</p></a>
            <a href="#"><p>Ограничения по услуге</p></a>
            <a href="#"><p>Условия доставки</p></a>
          </div>
        </div>
        <div class="footer-main">
          <p class="footer-title">Полезное</p>
          <div class="footer-content">
            <a href="#"><p>Доставка</p></a>
            <a href="#"><p>Отслеживание</p></a>
            <a href="#"><p>Таблица размеров</p></a>
            <a href="#"><p>Калькулятор</p></a>
          </div>
        </div>
        <div class="footer-main">
          <p class="footer-title">Присоединяйтесь</p>
          <div class="flex justify-between z-50">
            <a href="#"
              ><img :src="require('@/static/img/footer-media-vk.svg')" alt=""
            /></a>
            <a href="#"
              ><img :src="require('@/static/img/footer-media-tg.svg')" alt=""
            /></a>
            <a href="#"
              ><img :src="require('@/static/img/footer-media-yt.svg')" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
    <p
      class="text-center text-aluminum font-normal text-xl leading-7 pt-12 pb-6"
    >
      © Pony Express 2021
    </p>
  </footer>
</template>

<style scoped>
.footer-main {
  @apply flex flex-col z-50;
}

.footer-title {
  @apply text-white font-bold text-xl leading-7 pb-5;
}

.footer-content {
  @apply text-aluminum font-normal text-base leading-6;
}
</style>
