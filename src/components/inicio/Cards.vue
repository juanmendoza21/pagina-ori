<template>

<div>
  
 <b-card-group>
      <b-row>
        <b-col md="6" class="mt-2">
          <div class="shadow p-0 mb-5 bg-white rounded">
          <b-card align="center"   bg-variant="Light"       
          img-alt="Image"
          img-top
          tag="article" 
          >
            <h4 slot="header" class="card-title" >Consulta sobre Beneficios Online (nuevo)
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h4>
            
               <b-button class= "b-button" href="http://www.cajadeprevisionsf.org.ar/preguntas-frecuentes">
            <img  width="200" height="84" src="@/assets/img/icons/Boton-CONSULTAR_EXPEDIENTE.png">
               </b-button>
              
                
               <b-button class= "b-button" href="#" >
            <img width="200" height="84" src="@/assets/img/icons/Boton-INICIAR_EXPEDIENTE.png">
                </b-button> 
            <p>&nbsp; &nbsp;</p>
            <p>&nbsp; &nbsp;</p>
            <hr>
            <b-card-text>Realice una Consulta sobre su Expediente en trámite o sobre el inicio de un nuevo trámite haciendo clic en el botón "Consultar Expediente" y completando el formulario con sus datos personales</b-card-text>
          </b-card>
          </div>
        </b-col>
        <b-col lg="6" class="mt-2">
          <div class="card" style="width: 20rem; height: 25rem;">
          <img class="card-img-top" src="@/assets/img/fondos/Fondo_Cyber.jpg/" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Préstamos Online</h5>
            <hr>
            <p class="card-text">(Nos contactamos por mail. Días hábiles de 7.00 a 13.00hs)</p>
            <a href="/servicios/prestamos-condiciones" target="_top" class="btn btn-primary">Solicitar Prestamo</a>
          </div>
          </div>
        </b-col>
        
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <b-card align="center" class="card_shadow">
            <h4 slot="header" class="card-title">Línea habilitada sólo para Consultas</h4>
            <iframe
      :src="iframeCodigos.src"
      width="1070px"
      :height="iframeCodigos.altura"
      style="border: none;"
      scrolling="none"
    ></iframe>
            <hr>
            <b-card-text class="py-2">
              
 SÓLO PARA MENSAJES DE TEXTO, EVITE ENVIAR MENSAJES DE VOZ 
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Cards",
  name: "VCodigos",
  data() {
    return {
      titulo: "MONTOS Y CONDICIONES GENERALES",
      iframeCodigos: {
        src: "http://190.183.61.206:82/caja/codigos_postales.php",
        altura: "480px",
        
      },
}
  }
  }
</script>
<style >
.b-button {
    box-sizing: border-box;
    height: 100%;
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    padding: 4px 5px 4px 4px;
    color: rgb(215, 238, 241);
    text-decoration: none;
    text-shadow: 0 1px 0 rgb(255, 255, 255);
    white-space: nowrap;
    box-shadow: 2px 2px 5px #999;
    cursor: pointer;
    overflow: hidden;
    border-radius: 3px;
    padding: 6px 10px 6px 8px;
    font-size: 13px;
    line-height: 16px;
    border-radius: 4px;
    background-color: #eee;
    background-image: linear-gradient(#d7d7e4, #eee);
    border: 1px solid #d5d5d5;

}
  *, :after, :before {
    box-sizing: border-box;
  }
.main-title {
    color: #fff;
    z-index: 999;
    }
 .card-title{
  text-shadow: 1px 1px grey;
  font-family: 'Teko', sans-serif;}  
 .card_shadow
  {box-shadow: 1px 1px 2px 2px rgb(250, 174, 88);}
  .card-img-top{
    overflow: hidden;
    opacity: 0.5;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
  }
</style>