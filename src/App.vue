<template>
  <div class="fuente-personalizada">
    <NavBar/>
    <b-container class="mt-5 py-4">
      <router-view/>  
    </b-container>
    <Footer/>
  </div>
</template>

<style>
  @import url(https://fonts.googleapis.com/css?family=Ubuntu); 
  .fuente-personalizada{
    font-family: 'Ubuntu', sans-serif;
  }
  div.barra-color {
    background-color: #F58634;
    height: 4px
  }
</style>


<script>
import NavBar from "@/components/general/NavBar.vue";
import Footer from "@/components/general/Footer.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Footer
  }
};
</script>
