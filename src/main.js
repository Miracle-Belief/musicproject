import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from "aos"
import 'aos/dist/aos.css'
AOS.init();


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
