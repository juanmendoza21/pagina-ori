<template>
  <div>
    <Beneficios
      :titulo="titulo"
      :resumen="resumen"
      :resumenExtra="resumenExtra"
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
  name: "VAdicionalJubilacion",
  data() {
    return {
      titulo: "BENEFICIO ADICIONAL POR JUBILACIÓN O RETIRO",
      resumen: "Para afiliados JUBILADOS, con 15 años de aportes (incluidos los últimos 5 ininterrumpidos).",
      resumenExtra: "La Ley Nro 12.027 vigente a partir del 15 de septiembre de 2002, ha creado este beneficio que posibilita a quienes se jubilan en el marco de la Ley 6915, modificada por Ley 11.373, y la 11.530, percibir un beneficio adicional al anticipo por jubilación o retiro, al momento de jubilarse.",
      detalles: [
          "Usted no necesita concurrir personalmente.",
          "Puede presentarse en nuestras oficinas.",
          "Puede remitir la documentación por correo.",
          "Usted puede imprimir, completar y certificar los formularios para traerlos o enviarlos a esta Caja, o serán confeccionados en la misma, si concurre personalmente.",
          "Todos los trámites en esta Caja son gratuitos."
      ],
      linkInstructivo: "/files/beneficios/adicional-jubilacion/instructivo.pdf",
      formularios:[
          {
            nombre: "Solicitud de beneficio por jubilación o retiro ADICIONAL (F:S13)",
            link: "/files/beneficios/adicional-jubilacion/F-S013.pdf"
          },
          {
            nombre: "Declaración Jurada (F:DJ)",
            link: "/files/beneficios/adicional-jubilacion/DJ-12.pdf"
          },
          {
            nombre: "Declaración Testimonial (F:DT)",
            link: "/files/beneficios/adicional-jubilacion/DT-12.pdf"
          }
      ],
      detallesMontos: [
          "La categoría del beneficio se determina según una escala fijada por Decreto del P.E. Provincial, en base al haber jubilatorio del mes inmediato anterior a la procedencia del beneficio percibido por el afiliado en tal carácter."
      ],
      iframeMontos: {
          src: "http://www.cajadeprevisionsf.org.ar/montoseg13.php",
          altura: "290px"
      }
    };
  },
  components: {
    Beneficios
  }
};
</script>

