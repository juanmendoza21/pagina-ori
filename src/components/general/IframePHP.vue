<template>
  <div>
    <TituloPrincipal :titulo="titulo"/>
    <iframe
      :src="iframe.src"
      width="100%"
      :height="iframe.altura"
      style="border: none;"
      scrolling="yes"
    ></iframe>
  </div>
</template>

<script>
import TituloPrincipal from "@/components/general/TituloPrincipal.vue";

export default {
  name: "IframePHP",
  props: [
      "titulo",
      "iframe"
      ],
  components: {
    TituloPrincipal
  }
};
</script>
