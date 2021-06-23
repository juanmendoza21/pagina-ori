import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () => import(/* webpackChunkName: "error404" */ './views/general/404.vue')
    },
    {
      path: '/',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "inicio" */ './views/general/Inicio.vue')
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import(/* webpackChunkName: "categorias" */ './views/general/Categorias.vue')
    },
    {
      path: '/institucional/preguntas-frecuentes',
      name: 'preguntas-frecuentes',
      component: () => import(/* webpackChunkName: "preguntas-frecuentes" */ './views/institucional/PreguntasFrecuentes.vue')
    },
    {
      path: '/institucional/directorio',
      name: 'directorio',
      component: () => import(/* webpackChunkName: "directorio" */ './views/institucional/Directorio.vue')
    },
    {
      path: '/institucional/contactos',
      name: 'contactos',
      component: () => import(/* webpackChunkName: "contactos" */ './views/institucional/Contactos.vue')
    },
    {
      path: '/beneficios/fallecimiento',
      name: 'fallecimiento',
      component: () => import(/* webpackChunkName: "fallecimiento" */ './views/beneficios/Fallecimiento.vue')
    },
    {
      path: '/beneficios/incapacidad',
      name: 'incapacidad',
      component: () => import(/* webpackChunkName: "incapacidad" */ './views/beneficios/Incapacidad.vue')
    },
    {
      path: '/beneficios/carecer-familiares-directos',
      name: 'carecer-familiares-directos',
      component: () => import(/* webpackChunkName: "carecer-familiares-directos" */ './views/beneficios/CarecerFamiliares.vue')
    },
    {
      path: '/beneficios/jubilacion',
      name: 'jubilacion',
      component: () => import(/* webpackChunkName: "jubilacion" */ './views/beneficios/Jubilacion.vue')
    },
    {
      path: '/beneficios/anticipo-adicional-por-jubilacion',
      name: 'adicional-jubilacion',
      component: () => import(/* webpackChunkName: "adicional-jubilacion" */ './views/beneficios/AdicionalJubilacion.vue')
    },
    {
      path: '/beneficios/edad-avanzada',
      name: 'edad-avanzada',
      component: () => import(/* webpackChunkName: "edad-avanzada" */ './views/beneficios/EdadAvanzada.vue')
    },
    {
      path: '/beneficios/enfermedad-terminal',
      name: 'enfermedad-art64',
      component: () => import(/* webpackChunkName: "enfermedad-art64" */ './views/beneficios/Enfermedad.vue')
    },
    {
      path: '/tramites/consulta-de-pagos',
      name: 'consulta-de-pagos',
      component: () => import(/* webpackChunkName: "consulta-de-pagos" */ './views/tramites/ConsultaPagos.vue')
    },
    {
      path: '/tramites/consulta-tramites-en-curso',
      name: 'consulta-de-tramites',
      component: () => import(/* webpackChunkName: "consulta-de-tramites" */ './views/tramites/ConsultaTramites.vue')
    },
    {
      path: '/tramites/poderes',
      name: 'poderes',
      component: () => import(/* webpackChunkName: "poderes" */ './views/tramites/Poderes.vue')
    },
    {
      path: '/tramites/regularizacion-de-aportes',
      name: 'regularizacion-de-aportes',
      component: () => import(/* webpackChunkName: "regularizacion-de-aportes" */ './views/tramites/RegularizacionAportes.vue')
    },
    {
      path: '/tramites/afiliacion',
      name: 'afiliacion',
      component: () => import(/* webpackChunkName: "afiliacion" */ './views/tramites/Afiliacion.vue')
    },
    {
      path: '/tramites/boleta-de-cesantes',
      name: 'boleta-de-cesantes',
      component: () => import(/* webpackChunkName: "boleta-de-cesantes" */ './views/tramites/BoletaCesantes.vue')
    },
    {
      path: '/servicios/traslado-por-derivacion-medica',
      name: 'traslado-derivacion-medica',
      component: () => import(/* webpackChunkName: "traslado-derivacion-medica" */ './views/servicios/TrasladoDerivacionMedica.vue')
    },
    {
      path: '/servicios/traslado-santa-fe-rosario',
      name: 'traslado-santa-fe-rosario',
      component: () => import(/* webpackChunkName: "traslado-santa-fe-rosario" */ './views/servicios/TrasladoSantaFeRosario.vue')
    },
    {
      path: '/otros/expedientes1',
      name: 'expedientes1',
      component: () => import(/* webpackChunkName: "expedientes1" */ './views/otros/expedientes1.vue')
    },
    {
      path: '/servicios/prestamos-condiciones',
      name: 'prestamos-condiciones',
      component: () => import(/* webpackChunkName: "prestamos-condiciones" */ './views/servicios/PrestamosCondiciones.vue')
    },
    {
      path: '/servicios/prestamos-requisitos',
      name: 'prestamos-requisitos',
      component: () => import(/* webpackChunkName: "prestamos-requisitos" */ './views/servicios/PrestamosRequisitos.vue')
    }
  ]
})
