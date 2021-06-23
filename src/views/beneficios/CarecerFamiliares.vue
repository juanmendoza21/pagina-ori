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
  name: "VCarecerFamiliares",
  data() {
    return {
      titulo: "POR CARECER DE FAMILIARES DIRECTOS 50%",
      resumen: "Para afiliados JUBILADOS, con 10 años de afiliación y que carezcan de familiares directos (padres, cónyuge e hijos).",
      detalles: [
          "Usted no necesita concurrir personalmente.",
          "Puede presentarse en nuestras oficinas.",
          "Puede remitir la documentación por correo.",
          "Usted puede imprimir, completar y certificar los formularios para traerlos o enviarlos a esta Caja, o serán confeccionados en la misma, si concurre personalmente.",
          "Todos los trámites en esta Caja son gratuitos."
      ],
      linkInstructivo: "/files/beneficios/carecer-familiares/instructivo.pdf",
      formularios:[
          {
            nombre: "Solicitud de beneficio por carecer de familiares directos (F:S03)",
            link: "/files/beneficios/carecer-familiares/F-S03.pdf"
          },
          {
            nombre: "Declaración Jurada (F:DJ03)",
            link: "/files/beneficios/carecer-familiares/F-DJ03.pdf"
          },
          {
            nombre: "Declaración Testimonial (F:DT03)",
            link: "/files/beneficios/carecer-familiares/F-DT03.pdf"
          }
      ],
      detallesMontos: [
          "Los importes corresponden a un 50%.Los importes corresponden a un 50%.",
          "Son proporcionalmente menores para quienes hayan ingresado por primera vez como afiliados con más de 55 años de edad y no hayan alcanzado 5, 10 o 15 años de afiliación.",
          "La categoría del beneficio se determina según una escala fijada por Decreto del P.E. Provincial, en base al último sueldo sujeto a aportes jubilatorios o al haber jubilatorio del mes inmediato anterior a la procedencia del beneficio percibido por el afiliado en tal carácter.",
          "Son abonados en dos veces: Anticipo y Saldo."
      ],
      iframeMontos: {
          src: "http://www.cajadeprevisionsf.org.ar/montoseg03.php",
          altura: "290px"
      }
    };
  },
  components: {
    Beneficios
  }
};
</script>

