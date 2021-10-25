import Vue from 'vue'
import App from './App.vue'
import '@/assets/tailwind.css'
import VueTailwind from 'vue-tailwind/dist/full'
import axios from 'axios'
import {token} from '@/assets/scripts/utility.js';
import VueSwal from 'vue-swal';
import './registerServiceWorker'


Vue.use(VueSwal);
Vue.use(VueTailwind);

let baseUrl="http://mayfair-glitz.apps.enrichr.co/api/";
if(process.env.NODE_ENV === 'production'){
  baseUrl = "http://mayfair-glitz.apps.enrichr.co/api/";
}
axios.defaults.baseURL = baseUrl;
axios.defaults.headers = {
  'Content-Type': 'application/json',
  Authorization: `Token token=${token}`
}
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
