import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueTailwind from 'vue-tailwind/dist/full'
import axios from 'axios'
import {token} from '@/assets/scripts/utility.js';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast);
Vue.use(VueTailwind)

let baseUrl="http://localhost:3000/api/";
if(process.env.NODE_ENV === 'production'){
  baseUrl = "http://newps-api.dummy-builder.in/client_api/";
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
