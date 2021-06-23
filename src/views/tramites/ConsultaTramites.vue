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
    name: "VConsultaTramites",
    data() {
        return {
            iframe: {
                src: "http://www.cajadeprevisionsf.org.ar/expe01.php",
                altura: "500px" 
            },
            titulo: "CONSULTA TRÁMITES EN CURSO"
        }
    },
    components: {
        IframePHP
    }
}
</script>
