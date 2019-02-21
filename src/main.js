import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import AOS from 'aos'
import axios from 'axios'
import 'aos/dist/aos.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue, axios);

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
