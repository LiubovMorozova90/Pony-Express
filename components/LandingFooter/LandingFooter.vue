<template>
  <footer class="bg-black">
    <div class="pt-12">
      <div class="flex justify-between pah-48 px-20">
        <div class="footer-main">
          <p class="footer-title">Компания</p>
          <LandingFooterCompany />
        </div>
        <div class="footer-main">
          <p class="footer-title">Информация</p>
          <LandingFooterInfo />
        </div>
        <div class="footer-main">
          <p class="footer-title">Полезное</p>
          <LandingFooterUseful />
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

<script>
import LandingFooterCompany from './LandingFooterCompany.vue';
import LandingFooterInfo from './LandingFooterInfo.vue';
import LandingFooterUseful from './LandingFooterUseful.vue'

export default {
  components: {
    LandingFooterCompany,
    LandingFooterInfo,
    LandingFooterUseful,
  },
}
</script>

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
