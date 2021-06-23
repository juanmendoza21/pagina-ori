<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    <div v-for="(poder, index) of poderes" :key="index">
      <b-button
        size="sm"
        class="mt-1"
        :href="poder.link"
        target="_blank"
        variant="outline-info"
      >{{poder.nombre}}</b-button>
    </div>
  </div>
</template>

<script>
import TituloPrincipal from '@/components/general/TituloPrincipal.vue'

export default {
  name: "VPoderes",
  data () {
    return {
      titulo: "DESCARGA DE PODERES",
      poderes: [
          {
              nombre: "Formulario de Otorgamiento de Poder",
              link: "/files/beneficios/poderes/FCP-OtorgamientoDelPoder.pdf"
          },
          {
              nombre: "Formulario de Revocación de Poder",
              link: "/files/beneficios/poderes/FRP-RevocacionDePoder.pdf"
          },
          {
              nombre: "Formulario de Constancia Presentación de Poder",
              link: "/files/beneficios/poderes/FCPP-ConstanciaPresentacionDePoder.pdf"
          },
          {
              nombre: "Formulario de Carta Poder Autorizando a Percibir",
              link: "/files/beneficios/poderes/FCPAP-CartaPoderAutorizandoAPercibir.pdf"
          }
      ]
    }
  },
  components:{
    TituloPrincipal
  }
};
</script>
