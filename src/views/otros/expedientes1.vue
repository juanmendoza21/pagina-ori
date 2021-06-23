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
    name: "expedientes1",
    data() {
        return {
            iframe: {
                src: "https://docs.google.com/forms/d/e/1FAIpQLSftIcaP3LSy66rEr8urxLOeHrWU8MF9K3cI08Bg9Vf_S_lUcw/viewform",
                altura: "560px" 
            },
            titulo: "Expedientes Ver"
        }
    },
    components: {
        IframePHP
    }
}
</script>