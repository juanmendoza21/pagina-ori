<template>
  <div >
    <b-card>
      <div class="text-center">
        <a href="/files/ley/ley.pdf" target="_blank">
          <img src="@/assets/img/banners/legislacion.jpg" class="rounded" width="100%">
        </a>
      </div>

      <div class="text-center mt-4">
        <router-link :to="{name: 'categorias'}">
          <img src="@/assets/img/banners/categorias.jpg" class="rounded" width="100%">
        </router-link>
      </div>

      <div class="text-center mt-4">
        <router-link :to="{name: 'preguntas-frecuentes'}">
          <img src="@/assets/img/banners/preguntas.jpg" class="rounded" width="100%">
        </router-link>
      </div>

      <div class="text-center mt-4">
        <router-link :to="{name: 'consulta-de-tramites'}">
          <img src="@/assets/img/banners/tramite.jpg" class="rounded" width="100%">
        </router-link>
      </div>

      <div class="text-center mt-4">
        <img src="@/assets/img/banners/0800.jpg" class="rounded" width="100%">
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Banners"
};
</script>
