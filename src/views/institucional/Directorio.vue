<template>
  <div>
    <TituloPrincipal titulo="DIRECTORIO"/>
    <b-row>
      <b-col md="8">
        <p>La Caja está administrada por un Directorio compuesto por un representante del P.E. Provincial y cuatro representantes de los afiliados activos y pasivos provinciales,elegidos por éstos. Se basa en la solidaridad y está gobernada por sus propíos pares: empleados y jubilados del estado provincial.</p>
        <img src="@/assets/img/institucional/directorio/1.jpg" class="img-thumbnail">
        <hr>
        <b-row>
            <b-col>
                <h4>Vocales Titulares</h4>
                <div v-for="(item, index) of titulares" :key="index">
                    <p><strong>- {{item.nombre}}</strong></p>
                    <p>{{item.cargo}}</p>
                </div>
            </b-col>
            <b-col>
                <h4>Vocales suplentes</h4>
                <div v-for="(item, index) of suplentes" :key="index">
                    <p><strong>- {{item.nombre}}</strong></p>
                    <p>{{item.cargo}}</p>
                </div>
            </b-col>
        </b-row>
      </b-col>
      <b-col md="4" class="d-none d-md-block">
        <img src="@/assets/img/institucional/directorio/2.jpg" class="img-thumbnail">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TituloPrincipal from "@/components/general/TituloPrincipal.vue";

export default {
  name: "VDirectorio",
  data   (){
      return {
          titulares: [
              {
                nombre: "C.P.N. Martín Weibel",
                cargo: "Presidente / Representante P. Ejecutivo"    
              },
              {
                nombre: "Sr. José Ángel Mancinelli",
                cargo: "Sector Activo - Zona Sur"    
              },
              {
                nombre: "Sra. María Soledad Marchionatti",
                cargo: "Sector Activo - Zona Norte"    
              },
              {
                nombre: "Sr. Jorge Alberto Abero",
                cargo: "Sector Pasivo - Zona Norte"    
              },
              {
                nombre: "Sr. René Víctor Soriano",
                cargo: "Sector Pasivo - Zona Sur"    
              }
          ],
          suplentes: [
              {
                nombre: "Sr. Daniel Luis Bonis",
                cargo: "Sector Activo - Zona Sur"
              },
              {
                nombre: "Sr. Rubén Elvio Cardini",
                cargo: "Sector Pasivo - Zona Sur"
              }
          ]
      }
  },
  components: {
    TituloPrincipal
  }
};
</script>
