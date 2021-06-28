<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    
    <hr>
    <h3>Montos y Cuotas</h3>
    <iframe
      :src="iframeMontos.src"
      width="85%"
      :height="iframeMontos.altura"
      style="border: none;"
      scrolling="yes"
    ></iframe>
  <hr>
  <div v-for="(condicion, index) of condiciones" :key="'condicion'+index">
      <p>{{condicion}}</p>
    </div>
  </div>

</template>

<script>

import TituloPrincipal from "@/components/general/TituloPrincipal.vue";

export default {
  name: "VPrestamosCondiciones",
  data() {
    return {
      titulo: "MONTOS Y CONDICIONES GENERALES",
      iframeMontos: {
        src: "http://190.183.61.206:82/presta_hoy2.php",
        altura: "880px",
        
      },
      condiciones: [
        "1 - Para afiliados activos y pasivos.",
        "2 - Sin gastos administrativos.",
        "3 - Tasa de interés sobre saldo (sistema francés).",
        "4 - Depósito en caja de ahorro salario.",
        "5 - Descuento en recibo de haberes, desde el mes siguiente de percibido el préstamo.",
        "6 - No poseer quiebras y/o embargos.",
        "7 - Haber cancelado los préstamos anteriores en nuestro Organismo.",
        "8 - Tener margen para el descuento de la cuota.",
        "9 - Cancelación anticipada del préstamo: Es posible cancelar el mismo, en cualquier momento, sin costo alguno, con deducción de intereses. Sólo es necesario una nota con sus datos personales (documento, domicilio, teléfono) en que manifieste su voluntad de cancelar, y su recibo de haberes. Si usted reside en el interior, envíe esta documentación por fax o por correo y por el mismo medio le responderemos."
      ],
      
    };
  },
  components: {
    TituloPrincipal
  }
};
</script>
