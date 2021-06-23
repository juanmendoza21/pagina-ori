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
  name: "VIncapacidad",
  data() {
    return {
      titulo: "POR INCAPACIDAD 50%",
      resumen: "Por invalidez del afiliado que le ocasione la pérdida del empleo. Debe acreditar 12 meses de afiliación o que la incapacidad se haya producido con motivo o en ocasión del servicio.",
      detalles: [
          "Usted no necesita concurrir personalmente.",
          "Puede presentarse en nuestras oficinas.",
          "Puede remitir la documentación por correo.",
          "Usted puede imprimir, completar y certificar los formularios para traerlos o enviarlos a esta Caja, o serán confeccionados en la misma, si concurre personalmente.",
          "Todos los trámites en esta Caja son gratuitos."
      ],
      linkInstructivo: "/files/beneficios/incapacidad/instructivo.pdf",
      formularios:[
          {
            nombre: "Solicitud de beneficio por incapacidad (F:S02)",
            link: "/files/beneficios/incapacidad/F-S02.pdf"
          }
      ],
      detallesMontos: [
          "Los importes corresponden a un 50%.",
          "Son proporcionalmente menores para quienes hayan ingresado por primera vez como afiliados con más de 55 años de edad y no hayan alcanzado 5, 10 o 15 años de afiliación.",
          "La categoría del beneficio se determina según una escala fijada por Decreto del P.E. Provincial, en base al último sueldo sujeto a aportes jubilatorios o al haber jubilatorio del mes inmediato anterior a la procedencia del beneficio percibido por el afiliado en tal carácter.",
          "Son abonados en dos veces: Anticipo y Saldo.",
      ],
      iframeMontos: {
          src: "http://www.cajadeprevisionsf.org.ar/montoseg02.php",
          altura: "290px"
      }
    };
  },
  components: {
    Beneficios
  }
};
</script>

