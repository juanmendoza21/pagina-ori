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
    name: "VBoletaCesantes",
    data() {
        return {
            iframe: {
                src: "http://www.cajadeprevisionsf.org.ar/mesa/boletacesan222.php",
                altura: "560px" 
            },
            titulo: "BOLETA DE CESANTES"
        }
    },
    components: {
        IframePHP
    }
}
</script>
