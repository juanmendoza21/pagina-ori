<template>
  <div>
    <b-row class="py-2">
      <b-col lg="9">
        <Maps/>
      </b-col>
      <b-col lg="3 d-none d-lg-block">
        <Banners/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Banners from "@/components/general/pre-footer/Banners.vue";
import Maps from "@/components/general/pre-footer/Maps.vue";

export default {
    name: "PreFooter",
    components: {
      Banners,
      Maps
    }
}
</script>

