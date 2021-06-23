<template>
  <div>
    <Beneficios
      :titulo="titulo"
      :resumen="resumen"
      :detalles="detalles"
      :linkInstructivo="linkInstructivo"
      :formularios="formularios"
      :detallesMontos="detallesMontos"
      :iframeMontos="iframeMontos"
    />
  </div>
</template>

<script>
import Beneficios from "@/components/beneficios/Beneficios.vue";

export default {
  name: "VEdadAvanzada",
  data() {
    return {
      titulo: "POR EDAD AVANZADA 20%",
      resumen: "Para afiliados, JUBILADOS, con 15 años de aportes (incluidos los últimos 5 ininterrumpidos) al cumplir 65 años de edad y que se hayan jubilado por las Leyes 6.915 y 11.530.",
      resumenExtra: [

      ],
      detalles: [
          "Usted no necesita concurrir personalmente.",
          "Puede presentarse en nuestras oficinas.",
          "Puede remitir la documentación por correo.",
          "Usted puede imprimir, completar y certificar los formularios para traerlos o enviarlos a esta Caja, o serán confeccionados en la misma, si concurre personalmente.",
          "Todos los trámites en esta Caja son gratuitos."
      ],
      linkInstructivo: "/files/beneficios/edad-avanzada/instructivo.pdf",
      formularios:[
          {
            nombre: "Solicitud de beneficio por Edad Avanzada (F:S04)",
            link: "/files/beneficios/edad-avanzada/F-S04.pdf"
          },
          {
            nombre: "Declaración Jurada (F:DJ)",
            link: "/files/beneficios/edad-avanzada/DJ-12.pdf"
          },
          {
            nombre: "Declaración Testimonial (F:DT)",
            link: "/files/beneficios/edad-avanzada/DT-12.pdf"
          }
      ],
      detallesMontos: [
          "Los importes corresponden a un 20%.",
          "La categoría del beneficio se determina según una escala fijada por Decreto del P.E. Provincial, en base al último sueldo sujeto a aportes jubilatorios o al haber jubilatorio del mes inmediato anterior a la procedencia del beneficio percibido por el afiliado en tal carácter.",
          "Son abonados en dos veces: Anticipo y Saldo."
      ],
      iframeMontos: {
          src: "http://www.cajadeprevisionsf.org.ar/montoseg04.php",
          altura: "290px"
      }
    };
  },
  components: {
    Beneficios
  }
};
</script>

