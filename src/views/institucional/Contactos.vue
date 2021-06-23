<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    <strong>Horario de atención al público</strong>: Lunes a Viernes de 7.30 a 13.30 hs.
    <br>
    <strong>Linea gratuita</strong>: 0800-444-2252 - De 8.00 a 13.00 hs.
    <br>
    <strong>Correo</strong>:
    <a
      href="mailto:secretariaprivada@cajadeprevisionsf.org.ar"
    >secretariaprivada@cajadeprevisionsf.org.ar</a>
    <PreFooter/>
  </div>
</template>

<script>
import TituloPrincipal from "@/components/general/TituloPrincipal.vue";
import PreFooter from "@/components/general/pre-footer/PreFooter.vue";

export default {
  name: "VContactos",
  data () {
        return {
            titulo: "CONTACTOS"
        }
    },
  components: {
    TituloPrincipal,
    PreFooter
  }
};
</script>
