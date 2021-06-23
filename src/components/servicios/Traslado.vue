<template>
  <b-row class="py-2">
    <TituloPrincipal :titulo="titulo"/>
    <b-col lg="9">
      <div v-for="(detalle, index) of detallesResumen" :key="'detalleR'+index">
        <p>{{detalle}}</p>
      </div>
      <hr>
      <h3>Presentación</h3>
      <div v-for="(detalle, index) of detallesPresentar" :key="'detalleP'+index">
        <p>{{detalle}}</p>
      </div>
      <div v-if="iframeMontos !== undefined">
        <hr>
        <h3>Montos</h3>
        <iframe
          :src="iframeMontos.src"
          width="100%"
          :height="iframeMontos.altura"
          style="border: none;"
          scrolling="yes"
        ></iframe>
      </div>
    </b-col>
    <b-col lg="3 d-none d-lg-block">
      <Banners/>
    </b-col>
  </b-row>
</template>

<script>
import Banners from "@/components/general/pre-footer/Banners.vue";
import TituloPrincipal from "@/components/general/TituloPrincipal.vue";

export default {
  name: "Traslado",
  props: ["titulo", "detallesResumen", "detallesPresentar", "iframeMontos"],
  components: {
    Banners,
    TituloPrincipal
  }
};
</script>
