<template>
  <div>
    <IframePHP 
            :iframe="iframe"
            :titulo="titulo"/>
  </div>
</template>

<script>
import IframePHP from "@/components/general/IframePHP.vue";

export default {
  name: "VCategorias",
  data() {
        return {
            iframe: {
                src: "http://www.cajadeprevisionsf.org.ar/categ.php",
                altura: "500px" 
            },
            titulo: "SUELDOS Y CATEGORÍAS"
        }
    },
    components: {
        IframePHP
    }
};
</script>
