<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    
    <hr>
    
      <b-col lg="12" class="mt-2">
          <b-card align="center">
            <h4 slot="header" style="text-shadow: 1px 2px 1px grey;">SOLICITAR PRÉSTAMOS</h4>
             <b-button href="#" style="border-bottom: 2px solid #f58634;">            
                <h5 slot="header" style="text-shadow: 1px 2px 1px black;">SOLICITAR PRÉSTAMO HASTA $50.000 (Hasta 36 cuotas)</h5>   
            <img width="200" height="84" src="../../assets/img/icons/Boton_PRESTAMO_TRADICIONAL.png">
                </b-button> 
          
                <hr>
                 <b-button href="#" style="border-bottom: 2px solid #f58634;">
                <h5 slot="header" style="text-shadow: 1px 2px 1px black;">SOLICITAR PRÉSTAMO DESDE $60.000 HASTA $100.000 (Hasta 12 cuotas)</h5>              
            <img width="200" height="84" src="../../assets/img/icons/Boton_PRESTAMO_TRADICIONAL.png">
                </b-button> 
              <hr>
                <b-button href="#" style="border-bottom: 2px solid #f58634;">
                  <h5 slot="header" style="text-shadow: 1px 2px 1px black;">SOLICITAR PRÉSTAMO DE EMERGENCIA (Hasta 8 cuotas)</h5>
            <img width="200" height="84" src="../../assets/img/icons/Boton-PRESTAMO_DE_EMERGENCIA.png">
                </b-button> 
          </b-card>
        </b-col>
       
       
       
       
       <iframe
      :src="iframeSolicitud.src"
      width="85%"
      :height="iframeSolicitud.altura"
      style="border: none;"
      scrolling="yes"
    ></iframe>
  <hr>
  <div v-for="(solicitud, index) of solicitud" :key="'solicitud'+index">
      <p>{{solicitud}}</p>
    </div>
  </div>

</template>

<script>
import TituloPrincipal from "@/components/general/TituloPrincipal.vue";

export default {
  name: "VPrestamosSolicitud",
  data() {
    return {
      titulo: "",
      iframeSolicitud: {
        src: "https://docs.google.com/forms/d/e/1FAIpQLSdu8jDZP3ShgkTa_AQGzTFlqbI0XvoA_Jo5LgYcXbAox6iibg/viewform",
        altura: "880px",
        
      },
      solicitud: [
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
