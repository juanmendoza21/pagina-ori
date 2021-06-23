<template>
  <div>
    <b-card-group>
      <b-row>
        <b-col lg="6" class="mt-1">
          <b-card align="center">
            <h4 slot="header">Beneficios</h4>
            <b-col lg="2" class="pb-2">
               <b-button href="http://www.cajadeprevisionsf.org.ar/montoseg13.php">
            <img  width="208" height="84" src="@/assets/img/icons/Boton-CONSULTAR_EXPEDIENTE.png">
               </b-button>
               </b-col> 
                <b-col lg="2" class="pb-2">
               <b-button href="#" >
            <img width="208" height="84" src="@/assets/img/icons/Boton-INICIAR_EXPEDIENTE.png">
                </b-button> 
            </b-col>
            <hr>
            <b-card-text>Por fallecimiento, por incapacidad, por carecer de familiares directos, por jubilación o retiro, anticipo adicional por jubilación, por edad avanzada, por enfermedad del art. 46 bis. Servicio de préstamos personales.</b-card-text>
          </b-card>
        </b-col>
        <b-col lg="6" class="mt-2">
          <b-card align="center">
            <h4 slot="header">Préstamos</h4>
            <img src="@/assets/img/cards/prestamos.png">
            <hr>
            <b-card-text>Préstamos para afiliados activos y pasivos, sin gastos administrativos, a tasas muy convenientes.</b-card-text>
          </b-card>
        </b-col>
        
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <b-card align="center">
            <h4 slot="header">Caja de Previsión Social de los Agentes Civiles del Estado</h4>
            <img src="@/assets/img/cards/santafe.png">
            <hr>
            <b-card-text class="py-2">
              La Caja de Previsión Social de los Agentes Civiles del Estado de Santa Fe es desde 1938 un Organismo de la seguridad social de los empleados provinciales y de los jubilados de Santa Fe.
              Es una persona de derecho público.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Cards"
};
</script>
