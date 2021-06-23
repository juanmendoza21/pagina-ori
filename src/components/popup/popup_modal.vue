<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    <p>
      <strong>{{resumen}}</strong>
    </p>
    <p v-if="resumenExtra !== undefined">{{resumenExtra}}</p>
    <hr>
    <div v-for="(detalle, index) of detalles" :key="'detalles'+index">
      <p>{{detalle}}</p>
    </div>
    <hr>
    <h3>Descarga de Instructivo</h3>
    <b-button size="sm" class="mt-1" :href="linkInstructivo" target="_blank" variant="outline-info">Instructivo</b-button>
    <hr>
    <h3>Descarga de Formularios</h3>

    <div v-for="(formulario, index) of formularios" :key="'formulario'+index">
      <b-button
        size="sm"
        class="mt-1"
        :href="formulario.link"
        target="_blank"
        variant="outline-info"
      >{{formulario.nombre}}</b-button>
    </div>

    <hr>
    <h3>Montos</h3>
    <iframe
      :src="iframeMontos.src"
      width="100%"
      :height="iframeMontos.altura"
      style="border: none;"
      scrolling="yes"
    ></iframe>
    <div v-for="(detalleMonto, index) of detallesMontos" :key="'detalleM'+index">
      <p>{{detalleMonto}}</p>
    </div>
  </div>
</template>

<script>
import TituloPrincipal from "@/components/general/TituloPrincipal.vue";

export default {
  name: "Beneficios",
  props: [
    "titulo",
    "resumen",
    "resumenExtra",
    "detalles",
    "linkInstructivo",
    "formularios",
    "detallesMontos",
    "iframeMontos"
  ],
  components: {
    TituloPrincipal
  }
};
</script>
