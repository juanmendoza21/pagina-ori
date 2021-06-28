<template>
  <div>
    <b-card-group>
      <b-row>
        <b-col md="6" class="mt-2">
          <b-card align="center"   bg-variant="Light"       
          img-alt="Image"
          img-top
          tag="article"
          >
            <h4 slot="header">Consulta sobre Beneficios Online (nuevo)
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h4>
            
               <b-button href="http://www.cajadeprevisionsf.org.ar/preguntas-frecuentes">
            <img  width="200" height="84" src="@/assets/img/icons/Boton-CONSULTAR_EXPEDIENTE.png">
               </b-button>
              
                
               <b-button href="#" >
            <img width="200" height="84" src="@/assets/img/icons/Boton-INICIAR_EXPEDIENTE.png">
                </b-button> 
            <p>&nbsp; &nbsp;</p>
            <p>&nbsp; &nbsp;</p>
            <hr>
            <b-card-text>Realice una Consulta sobre su Expediente en trámite o sobre el inicio de un nuevo trámite haciendo clic en el botón "Consultar Expediente" y completando el formulario con sus datos personales</b-card-text>
          </b-card>
        </b-col>
        <b-col lg="6" class="mt-2">
          <b-card align="center">
            <h4 slot="header">Préstamos Online</h4>
             <b-button href="#" >
            <img width="200" height="84" src="@/assets/img/icons/Boton-01-PRESTAMO.png">
                </b-button> 
                <p style="text-align: center;"><span style="font-size: 18pt;"><strong><a href="/servicios/prestamos-condiciones" target="_top" rel="noopener noreferrer">MONTOS Y CUOTAS Click acá</a></strong></span></p>
                <p style="text-align: center;"><span style="font-size: 18pt;"><strong><a href="index.php/servicios/consultas" target="_blank" rel="noopener noreferrer"><span style="font-size: 16pt;">CONSULTAS SOBRE PRÉSTAMOS Click acá</span></a></strong></span></p>
                  <hr>
            <b-card-text>(Nos contactamos por mail. Días hábiles de 7.00 a 13.00hs) </b-card-text>
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
