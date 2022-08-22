<template>
  <div class="max-w-7xl mb-10">
    <client-only>
      <agile ref="carousel" :options="sliderOptions">
        <div
          v-for="shop in shops"
          :key="shop.id"
          class="cursor-pointer w-80 h-64 mb-6"
        >
          <img :src="shop.img" alt="" />
        </div>
      </agile>
    </client-only>
  </div>
</template>

<script>
export default {
  data: () => ({
    sliderOptions: {
      autoplay: false,
      centerMode: true,
      dots: true,
      navButtons: false,
      slidesToShow: 4,
    },
    shops: [
      { img: require('~/static/img/slider-shop-amazon.svg') },
      { img: require('~/static/img/slider-shop-ebay.svg') },
      { img: require('~/static/img/slider-shop-levi.svg') },
      { img: require('~/static/img/slider-shop-6pm.svg') },
      { img: require('~/static/img/slider-shop-amazon.svg') },
      { img: require('~/static/img/slider-shop-amazon.svg') },
    ],
  }),
}
</script>

<style>
.agile {
  width: 100%;
}

.agile__actions {
  margin-top: 20px;
}

.agile__dot {
  margin: 0 10px;
}

.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}

.agile__dot button {
  background-color: #326544;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 16px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.1s;
  width: 16px;
}

.agile__dot button:hover,
.agile__dot button:active {
  background-color: #6cbe37;
}

.agile__dot--current,
.agile__dot--current:hover,
.agile__dot--current button {
  background-color: #6cbe37;
  border-radius: 50%;
}
</style>
