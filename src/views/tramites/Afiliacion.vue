<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    <p>
      <strong>{{resumen}}</strong>
    </p>
    <hr>
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
  name: "VAfiliacion",
  data() {
    return {
      detalles: [
        "Usted no necesita concurrir personalmente.",
        "Puede presentarse en nuestras oficinas.",
        "Puede remitir la documentación por correo.",
        "Usted puede imprimir, completar y certificar los formularios para traerlos o enviarlos a esta Caja, o serán confeccionados en la misma, si concurre personalmente.",
        "Todos los trámites en esta Caja son gratuitos."
      ],
      resumen: "Si usted cesa en el cargo o empleo por el que es afiliado y no se jubila inmediatamente o se jubila por un régimen distinto al provincial y desea mantener su afiliación a nuestro régimen y obtener así los beneficios que se brindan, deberá iniciar un expediente de Afiliación dentro de los 90 días hábiles del cese como afiliado activo (Art. 2, 2° a) y b) de la Ley 9816).",
      titulo: "AFILIACIÓN",
      linkInstructivo: "/files/tramites/afiliacion/instructivo.pdf",
      formulario:{
          nombre: "Solicitud de afiliación (F:S05)",
          link: "/files/tramites/afiliacion/F-S05.pdf"
      }
    };
  },
  components: {
    TituloPrincipal
  }
};
</script>


