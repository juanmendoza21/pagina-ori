<template>

  <div class="fuente-personalizada">
    <div id="app">
     <div class="particles-js">      
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
    
    <!--  -->
    
    <NavBar/>
    <b-container class="mt-5 py-4">
      <router-view/>  
    </b-container>
    <Footer/>
  </div>
</div>

  
</template>

<style>
  @import url(https://fonts.googleapis.com/css?family=Ubuntu); 
  .fuente-personalizada{
    font-family: 'Ubuntu', sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #182a3f;
}
  
  div.barra-color {
    background-color: #F58634;
    height: 4px
  }
   #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .wrap-banner {
    position: absolute;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }
.particles-js {
    
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>


<script>
  export default {
    data() {
      return {
        modalShow: true
      }
    }
  }
</script>

<script>
import NavBar from "@/components/general/NavBar.vue";
import Footer from "@/components/general/Footer.vue";
import HelloWorld from "@/components/general/HelloWorld.vue";

export default {
  name: "app",
  components: {
    
    NavBar,
    HelloWorld,
    Footer
  }
};
</script>
