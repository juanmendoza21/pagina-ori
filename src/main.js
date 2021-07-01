import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import SidebarPlugin  from 'bootstrap-vue'
import  AlertPlugin  from 'bootstrap-vue'
import VueLuxon from "vue-luxon"
import PortalVue from 'portal-vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(VueLuxon);
Vue.use(AlertPlugin)
Vue.use(SidebarPlugin)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(PortalVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


