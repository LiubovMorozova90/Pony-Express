<template>
  <div class="font-circe">
    <Header ></Header>
    <LandingMain></LandingMain>
  </div>  
</template>

<script>
import Header from '~/components/Landing-header/Header.vue';
import LandingMain from '~/components/Landing-main/Landing-main.vue';

export default {
  components: {
    Header, LandingMain
  }
}
</script>