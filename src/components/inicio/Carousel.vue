<template>
    <b-carousel
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        controls
        :interval="intervaloFade"
      >
        <b-carousel-slide>
          <img
          slot="img"
          class="d-block img-fluid w-100 rounded"
          src="@/assets/img/carousel/1.jpg"/>
        </b-carousel-slide>
        <b-carousel-slide>
          <img
          slot="img"
          class="d-block img-fluid w-100 rounded"
          src="@/assets/img/carousel/2.jpg" />
        </b-carousel-slide>
        <b-carousel-slide>
          <img
          slot="img"
          class="d-block img-fluid w-100 rounded"
          src="@/assets/img/carousel/3.jpg"/>
        </b-carousel-slide>
        <b-carousel-slide>
          <img
          slot="img"
          class="d-block img-fluid w-100 rounded"
          src="@/assets/img/carousel/4.jpg"/>
        </b-carousel-slide>
      </b-carousel>
</template>

<script>
export default {
    name: "Carousel",
    data: function (){
      return {
        intervaloFade: 3000 // En milisegundos
      }
    }
}
</script>

