import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import vb from 'vue-babylonjs'
import AOS from 'aos'
import axios from 'axios'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import 'aos/dist/aos.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(vb);
Vue.use(axios)
Vue.use(VueChartkick, {adapter: Chart})


Vue.config.productionTip = false



new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
