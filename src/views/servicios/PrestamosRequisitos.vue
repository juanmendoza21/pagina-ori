<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    
    <h3>Requisitos para afiliados ACTIVOS</h3>
    <p><strong>{{tituloRequisitosActivosA}}</strong></p>
    <div v-for="(requisito, index) of requisitosActivosA" :key="'requisitoAA'+index">
      <p>{{requisito}}</p>
    </div>
    <p><strong>{{tituloRequisitosActivosB}}</strong></p>
    <div v-for="(requisito, index) of requisitosActivosB" :key="'requisitoAB'+index">
      <p>{{requisito}}</p>
    </div>
    
    <hr>
    <h3>Requisitos para afiliados ACTIVOS</h3>
    <p><strong>{{tituloRequisitosPasivosA}}</strong></p>
    <div v-for="(requisito, index) of requisitosPasivosA" :key="'requisitoPA'+index">
      <p>{{requisito}}</p>
    </div>
    <p><strong>{{tituloRequisitosPasivosB}}</strong></p>
    <div v-for="(requisito, index) of requisitosPasivosB" :key="'requisitoPB'+index">
      <p>{{requisito}}</p>
    </div>
   
  </div>
</template>

<script>
import TituloPrincipal from "@/components/general/TituloPrincipal.vue";

export default {
  name: "VPrestamosRequisitos",
  data() {
    return {
      titulo: "PRÉSTAMOS : REQUISITOS",
      tituloRequisitosActivosA: "a) Si realiza la gestión personalmente ante las sedes Santa Fe o Rosario de la Caja:",
      tituloRequisitosActivosB: "b) Si envía la solicitud:",
      requisitosActivosA: [
        "1 - Completar la solicitud con los datos requeridos.",
        "2 - Original y fotocopia del documento de identidad (L.E./L.C./D.N.I.).",
        "3 - Original y fotocopia del último recibo de sueldos.",
        "4 - Dos autorizaciones de descuento en original firmada por el solicitante y firmada por el habilitado o autoridad responsable del pago de sueldos con su sello aclaratorio y el de la repartición.",
        "5 - Ticket del cajero de la cuenta salario en pesos.",
        "6 - Solamente se exigirá garantía solidaria al personal reemplazante y al interino."
      ],
      requisitosActivosB: [
        "1 - Completar y firmar la solicitud.",
        "2 - Fotocopia del documento de identidad (L.E./L.C./D.N.I.).",
        "3 - Fotocopia del último recibo de sueldo.",
        "4 - Dos autorizaciones de descuento en original firmada por el solicitante y firmada por el habilitado o autoridad responsable del pago de sueldos con su sello aclaratorio y el de la repartición.",
        "5 - Ticket del cajero de la cuenta salario en pesos.",
        "6 - Solamente se exigirá garantía solidaria al personal reemplazante y al interino.",
        "IMPORTANTE: - La firma en la solicitud y las fotocopias deberán estar certificadas por habilitado de la repartición responsable del pago de sueldos o autoridad superior, o por la Policía, con su sello aclaratorio y el de la repartición."
      ],
      tituloRequisitosPasivosA: "a) Si realiza la gestión personalmente ante la sede central o delegaciones de la Caja:",
      tituloRequisitosPasivosB: "b) Si envía la solicitud:",
      requisitosPasivosA: [
        "a) Si realiza la gestión personalmente ante la sede central o delegaciones de la Caja:",
        "2 - Original y fotocopia del documento de identidad (L.E./L.C./D.N.I.).",
        "3 - Original y fotocopia del último recibo de haber jubilatorio.",
        "4 - Ticket del cajero de la cuenta salario en pesos.",
        "5 - Firmar autorización de descuento."
      ],
      requisitosPasivosB: [
        "1 - Completar y firmar la solicitud.",
        "2 - Fotocopia del documento de identidad (L.E./L.C./D.N.I.).",
        "3 - Fotocopia del último haber jubilatorio.",
        "4 - Ticket del cajero de la cuenta salario en pesos.",
        "5 - Autorización de descuento.",
        "IMPORTANTE: - La firma en la solicitud y autorización de descuento y las fotocopias, deberán estar certificadas por autoridad judicial o policial."
      ]
      
    };
  },
  components: {
    TituloPrincipal
  }
};
</script>
