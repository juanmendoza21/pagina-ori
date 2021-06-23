<template>
    <div>
        <Traslado 
            :titulo="titulo"
            :detallesResumen="detallesResumen"
            :detallesPresentar="detallesPresentar"
            :iframeMontos="iframeMontos" />
    </div>
</template>

<script>
import Traslado from "@/components/servicios/Traslado.vue";

export default {
    name: "VTrasladoDerivacionMedica",
    data(){
        return {
            titulo: "SUBSIDIO DE TRASLADO POR DERIVACIÓN MÉDICA",
            detallesResumen: [
                "Se abona un monto fijo según destino, a través de depósito en caja de ahorro -salario- en un plazo no mayor a 10 días. Se otorga al afiliado, su cónyuge e hijos, no más de uno por mes calendario."
            ],
            detallesPresentar: [
                "1 - Derivación médica extendida por el IAPOS.",
                "2 - Fotocopia del último recibo de sueldo o último recibo de haberes, si percibe jubilación.",
                "3 - Fotocopia del documento de identidad del afiliado y familiar atendido y carnets del IAPOS respectivos.",
                "A partir de la segunda solicitud, presentar constancia de haber sido atendido en la oportunidad anterior."
            ],
            iframeMontos: {
                src: "http://www.cajadeprevisionsf.org.ar/trasla1.php",
                altura: "300px"
            }
        }
    },
    components: {
        Traslado
    }
}
</script>
