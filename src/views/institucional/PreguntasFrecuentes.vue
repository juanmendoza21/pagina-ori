<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    <h3>¿Cómo se realiza un trámite?</h3>
    <ul>
      <li>Usted no necesita concurrir personalmente.</li>
      <li>Puede presentarse en nuestras sedes de Santa Fe y Rosario (es conveniente para su comodidad solicitar turno en línea).</li>
      <li>También es posible remitir la documentación por correo.</li>
      <li>Se pueden imprimir, completar y certificar los formularios para traerlos o enviarlos a esta Caja, o serán confeccionados en la misma, si concurre personalmente.</li>
      <li>Todos los trámites en esta Caja son gratuitos.</li>
    </ul>

    <h3>¿Qué documentación es necesaria para cada uno de los trámites?</h3>
    <p>Usted debe ir al menú superior, seleccionar el beneficio a tramitar y en esa página tendrá un instructivo y los formularios correspondientes.</p>
    
    <h3>¿Es posible saber en qué estado se encuentra mi trámite?</h3>
    <p>Usted debe acceder al consultar el sistema mediante el botón "Mi trámite".</p>
  </div>
</template>

<script>
import TituloPrincipal from '@/components/general/TituloPrincipal.vue'

export default {
  name: "VPreguntasFrecuentes",
  data () {
    return {
      titulo: "PREGUNTAS FRECUENTES"
    }
  },
  components:{
    TituloPrincipal
  }
};
</script>
