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
    name: "VConsultaPagos",
    data() {
        return {
            iframe: {
                src: "http://www.cajadeprevisionsf.org.ar/reso05.php",
                altura: "500px" 
            },
            titulo: "CONSULTA DE PAGOS"
        }
    },
    components: {
        IframePHP
    }
}
</script>
