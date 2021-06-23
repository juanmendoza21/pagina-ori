<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="light" variant="light">
      <b-container>
        <b-navbar-toggle target="nav_collapse"/>
        <b-navbar-brand :to="{name:'inicio'}">
          <img
            src="@/assets/img/logo_dark.png"
            class="d-inline-block align-top"
            alt="Caja de Previsión Social de los Agentes Civiles del Estado"
          >
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <div v-for="(item, index) of items" :key="index">
              <b-nav-item
                v-if="item.tipo === 'Simple' && item.linkArchivo === false"
                :to="{name: item.ruta}"
              >{{item.descripcion}}</b-nav-item>
              <b-nav-item
                v-if="item.tipo === 'Simple' && item.linkArchivo === true"
                :href="item.ruta"
                target="_blank"
              >{{item.descripcion}}</b-nav-item>
              <b-nav-item-dropdown
                href="#"
                v-if="item.tipo === 'Multiple'"
                :text="item.descripcion"
              >
                <div v-for="(itemAnidado, index) of item.items" :key="index">
                  <b-dropdown-item v-if="itemAnidado.linkArchivo === false" :to="{name: itemAnidado.ruta}">{{itemAnidado.descripcion}}</b-dropdown-item>
                  <b-dropdown-item v-if="itemAnidado.linkArchivo === true" :href="itemAnidado.ruta" target="_blank">{{itemAnidado.descripcion}}</b-dropdown-item>
                </div>
              </b-nav-item-dropdown>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<style>
.navbar {
  border-bottom: 3px solid #f58634;
}
</style>


<script>
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        {
          descripcion: "Inicio",
          tipo: "Simple",
          linkArchivo: false,
          ruta: "inicio"
        },
        {
          descripcion: "Institucional",
          tipo: "Multiple",
          linkArchivo: false,
          items: [
            {
              descripcion: "Directorio",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "directorio"
            },
            {
              descripcion: "Preguntas Frecuentes",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "preguntas-frecuentes"
            },
            {
              descripcion: "Ley 13.758",
              tipo: "Simple",
              linkArchivo: true,
              ruta: "/files/ley/ley.pdf"
            },
            {
              descripcion: "Contactos",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "contactos"
            },
            {
              descripcion: "Superintendencia",
              tipo: "Simple",
              linkArchivo: true,
              ruta: "/files/superintendencia/superintendencia.pdf"
            }
          ]
        },
        {
          descripcion: "Beneficios",
          tipo: "Multiple",
          linkArchivo: false,
          items: [
            {
              descripcion: "Fallecimiento",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "fallecimiento"
            },
            {
              descripcion: "Incapacidad",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "incapacidad"
            },
            {
              descripcion: "Carecer de familiares directos",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "carecer-familiares-directos"
            },
            {
              descripcion: "Jubilacion o Retiro",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "jubilacion"
            },
            {
              descripcion: "Anticipo adicional por jubilación",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "adicional-jubilacion"
            },
            {
              descripcion: "Por edad avanzada",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "edad-avanzada"
            },
            {
              descripcion: "Enfermedad Art. 64 bis",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "enfermedad-art64"
            }
          ]
        },
        {
          descripcion: "Tramites",
          tipo: "Multiple",
          linkArchivo: false,
          items: [
            {
              descripcion: "Consulta de pagos",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "consulta-de-pagos"
            },
            {
              descripcion: "Consulta de trámites en curso",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "consulta-de-tramites"
            },
            {
              descripcion: "Poderes",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "poderes"
            },
            {
              descripcion: "Regularización de aportes",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "regularizacion-de-aportes"
            },
            {
              descripcion: "Afiliación",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "afiliacion"
            },
            {
              descripcion: "Boleta de cesantes",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "boleta-de-cesantes"
            }
          ]
        },
        {
          descripcion: "Servicios",
          tipo: "Multiple",
          linkArchivo: false,
          items: [
        
            {
              descripcion: "Expedientes",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "expedientes1"
            },
            {
              descripcion: "Prestamos - Condiciones Generales",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "prestamos-condiciones"
            },
            
            {
              descripcion: "Prestamos - Requisitos",
              tipo: "Simple",
              linkArchivo: false,
              ruta: "prestamos-requisitos"
            }
          ]
        }
      ]
    };
  }
};
</script>



