<template>
  <div>
    <Carousel/>
    <Cards/>
    <PreFooter/>
  </div>
</template>


<script>
import Carousel from "@/components/inicio/Carousel.vue";
import Cards from "@/components/inicio/Cards.vue";
import PreFooter from "@/components/general/pre-footer/PreFooter.vue";

export default {
  name: "WInicio",
  components: {
    Carousel,
    Cards,
    PreFooter
  },
  data() {
    return {
      intervaloFade: 500
    };
  }
};
</script>
