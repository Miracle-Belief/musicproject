import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import 'bootstrap/dist/css/bootstrap.min.css';


import 'aos/dist/aos.css'
import AOS from 'aos'
Vue.prototype.aos = AOS

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
