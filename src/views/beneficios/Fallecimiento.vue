<template>
  <div>
    <Beneficios 
        :titulo="titulo"
        :resumen="resumen"
        :detalles="detalles"
        :linkInstructivo="linkInstructivo"
        :formularios="formularios"
        :detallesMontos="detallesMontos" 
        :iframeMontos="iframeMontos"/>
  </div>
</template>

<script>
import Beneficios from "@/components/beneficios/Beneficios.vue";

export default {
  name: "VFallecimientos",
  data() {
    return {
      titulo: "POR FALLECIMIENTO 100%",
      resumen: "Por fallecimiento del afiliado con tres meses de afiliación.",
      detalles: [
        "Los beneficiarios no necesitan concurrir personalmente.",
        "Pueden presentarse en nuestras oficinas.",
        "Pueden remitir la documentación por correo.",
        "Usted puede imprimir, completar y certificar los formularios para traerlos o enviarlos a esta Caja, o serán confeccionados en la misma, si concurre personalmente.",
        "Todos los trámites en esta Caja son gratuitos."
      ],
      linkInstructivo: "/files/beneficios/fallecimiento/instructivo.pdf",
      formularios:[
          {
            nombre: "Solicitud de beneficio por fallecimiento (F:S01)",
            link: "/files/beneficios/fallecimiento/F-S01.pdf"
          },
          {
              nombre: "Formulario de presentación de los demás pretendientes al beneficio (F:P01)",
              link: "/files/beneficios/fallecimiento/F-P01.pdf"
          },
          {
              nombre: "Declaración Jurada (F:DJ01)",
              link: "/files/beneficios/fallecimiento/F-DJ01.pdf"
          },
          {
              nombre: "Declaración Testimonial (F:DT01)",
              link: "/files/beneficios/fallecimiento/F-DT01.pdf"
          }
      ],
      detallesMontos: [
          "Los importes corresponden a un beneficio completo.",
          "Son proporcionalmente menores:",
          "a) Para quienes hayan percibido partes del mismo en vida, se reducen proporcionalmente.",
          "b) Para quienes hayan ingresado por primera vez como afiliados con más de 55 años de edad y no hayan alcanzado 5, 10 o 15 años de afiliación.",
          "La categoría del beneficio se determina según una escala fijada por Decreto del P.E. Provincial, en base al sueldo sujeto a aportes jubilatorios o al haber jubilatorio del mes del fallecimiento.",
          "El importe se distribuye entre los beneficiarios legales y/o instituidos, según lo establecido en la Ley 13.758.",
          "Son abonados en dos veces: Anticipo y Saldo."
      ],
      iframeMontos: {
          src: "http://www.cajadeprevisionsf.org.ar/montoseg01.php",
          altura: "300px"
      }
    };
  },
  components: {
    Beneficios
  }
};
</script>

