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
            titulo: "SUBSIDIO DE TRASLADO POR RAZONES DE SALUD A SANTA FE O ROSARIO",
            detallesResumen: [
                "Para el afiliado, su cónyuge o hijos de hasta 21 años inclusive, o incapaces declarados judicialmente.",
                "Es extensivo a los padres del afiliado soltero y sin hijos, cuando estén a cargo en la obra social.",
                "Se otorga uno por mes y no más de tres por año.",
                "Se reconocen hasta dos subsidios cuando el afiliado deba viajar para la atención de hijos menores o incapaces y personas mayores de 75 años. Se abona un monto fijo según destino, a través de depósito en caja de ahorro -salario- en un plazo no mayor a 10 días."
            ],
            detallesPresentar: [
                "1 - Fotocopia del documento de identidad del afiliado y familiar atendido y carnets del IAPOS respectivos.",
                "2 - Fotocopia del último recibo de sueldo o último recibo de haberes, si percibe jubilación.",
                "3 - Certificado médico original estampillado por el Colegio de Médicos, donde conste haber sido atendido, con diagnóstico, fecha y membrete del lugar de atención. Validez: 30 días.",
                "4 - En caso de hijos incapaces, adjuntar certificado de incapacidad provincial."
            ],
            iframeMontos: {
                src: "http://www.cajadeprevisionsf.org.ar/trasla2.php",
                altura: "740px"
            }
        }
    },
    components: {
        Traslado
    }
}
</script>
