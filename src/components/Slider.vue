<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="~/assets/slider.png" /></div>
      <div class="swiper-slide"><img src="~/assets/product.png" /></div>
      <div class="swiper-slide"><img src="~/assets/slider.png" /></div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 520px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: auto;
  height: auto;
  margin-top: -20px;
  z-index: 10;
  cursor: pointer;
  background: #ffffff;
  opacity: 0.5;
  color: #4b4e68;
  font-size: 23px;
  height: 44px;
  width: 44px;
  border-radius: 100%;
}
.swiper-button-prev {
  left: 30px;
}
.swiper-button-next {
  right: 30px;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 22px;
}
</style>
