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
  name: "VEnfermedad",
  data() {
    return {
      titulo: "ANTICIPO PARA ENFERMEDADES DEL ART. 46 BIS",
      resumen: "Para afiliados activos o jubilados, con 3 meses de afiliación.",
      detalles: [
          "Usted no necesita concurrir personalmente.",
          "Puede presentarse en nuestras oficinas.",
          "Puede remitir la documentación por correo.",
          "Usted puede imprimir, completar y certificar los formularios para traerlos o enviarlos a esta Caja, o serán confeccionados en la misma, si concurre personalmente.",
          "Todos los trámites en esta Caja son gratuitos."
      ],
      linkInstructivo: "/files/beneficios/enfermedad/instructivo.pdf",
      formularios:[
          {
            nombre: "Solicitud de Anticipo para enfermedades del Art. 46 Bis (F:S14)",
            link: "/files/beneficios/enfermedad/F-S14.pdf"
          },
          {
            nombre: "Formulario de Conformidad de Familiar (F:C14)",
            link: "/files/beneficios/enfermedad/F-C14.pdf"
          },
          {
            nombre: "Formulario de Declaración Jurada (F:DJ14)",
            link: "/files/beneficios/enfermedad/F-DJ14.pdf"
          },
          {
            nombre: "Formulario de poder (F:CP)",
            link: "/files/beneficios/enfermedad/FCP-OtorgamientoDelPoder.pdf"
          },
          {
            nombre: "Formulario anexo poder (F:CPAP)",
            link: "/files/beneficios/enfermedad/FCPAP-CartaPoderAutorizandoAPercibir.pdf"
          }
      ],
      detallesMontos: [
          "Los importes corresponden a un 10%.",
          "Son proporcionalmente menores para quienes hayan ingresado por primera vez como afiliados con más de 55 años de edad y no hayan alcanzado 5, 10 o 15 años de afiliación.",
          "La categoría del beneficio se determina según una escala fijada por Decreto del P.E. Provincial, en base al último sueldo sujeto a aportes jubilatorios o al haber jubilatorio del mes inmediato anterior a la procedencia del beneficio percibido por el afiliado en tal carácter.",
          "Son abonados en dos veces: Anticipo y Saldo."
      ],
      iframeMontos: {
          src: "http://www.cajadeprevisionsf.org.ar/montoseg14.php",
          altura: "290px"
      }
    };
  },
  components: {
    Beneficios
  }
};
</script>

