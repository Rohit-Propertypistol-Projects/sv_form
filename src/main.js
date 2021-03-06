import Vue from 'vue'
import App from './App.vue'
import '@/assets/tailwind.css'
import VueTailwind from 'vue-tailwind/dist/full'
import axios from 'axios'
import {token} from '@/assets/scripts/utility.js';
import VueSwal from 'vue-swal';
import './registerServiceWorker'
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'
import VueSignaturePad from 'vue-signature-pad';


Vue.use(VueSwal);
Vue.use(Datetime)
Vue.use(VueSignaturePad);
Vue.use(VueTailwind);

let baseUrl="https://crm.dummy-builder.in/api/";
if(process.env.NODE_ENV === 'production'){
  baseUrl = "https://crm.dummy-builder.in/api/";
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
