<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    <div v-for="(detalle, index) of detalles" :key="index">
      <p>{{detalle}}</p>
    </div>
    <hr>
    <h3>Descarga de Instructivo</h3>
    <b-button
      size="sm"
      class="mt-1"
      :href="linkInstructivo"
      target="_blank"
      variant="outline-info"
    >Instructivo</b-button>
    <hr>
    <h3>Descarga de Formularios</h3>

    <b-button
    size="sm"
    class="mt-1"
    :href="formulario.link"
    target="_blank"
    variant="outline-info"
    >{{formulario.nombre}}</b-button>
  </div>
</template>

<script>
import TituloPrincipal from "@/components/general/TituloPrincipal.vue";

export default {
  name: "VRegularizacionAportes",
  data() {
    return {
      detalles: [
        "Usted no necesita concurrir personalmente.",
        "Puede presentarse en nuestras oficinas.",
        "Puede remitir la documentación por correo.",
        "Usted puede imprimir, completar y certificar los formularios para traerlos o enviarlos a esta Caja, o serán confeccionados en la misma, si concurre personalmente.",
        "Todos los trámites en esta Caja son gratuitos."
      ],
      titulo: "REGULARIZACIÓN DE APORTES Y ACUMULACIÓN DE SUELDOS",
      linkInstructivo: "/files/tramites/regularizacion/instructivo.pdf",
      formulario:{
          nombre: "Solicitud de Regularización de aportes y acumulación de sueldos (F:S08)",
          link: "/files/tramites/regularizacion/F-S08.pdf"
      }
    };
  },
  components: {
    TituloPrincipal
  }
};
</script>


