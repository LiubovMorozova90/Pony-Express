<template>
  <div class="font-circe bg-main relative overflow-hidden">
    <div class="absolute top-0 bottom-0 -left-40 -right-40">
            <div v-for="item in 6" :key="`bg-rectangle-${item}`" class="absolute w-2000 h-900" 
            :style="`transform: rotate(${item % 2 ? -21 : 24}deg); top: ${item * 11}%; z-index: ${item % 2 ? 1 : 0}; background-color: ${item % 2 ? '#45A145' : '#56A329' }`"></div>  
        </div>
    <Header></Header>
    <LandingMain></LandingMain>
  </div>  
</template>

<script>
import Header from '~/components/Landing-header/Header.vue';
import LandingMain from '~/components/Landing-main/LandingMain.vue';

export default {
  components: {
    Header, LandingMain
  }
}
</script>