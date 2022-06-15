import * as Vue from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import HomeComponent from './pages/home/HomeComponent.vue'
import StoreComponent from './pages/loja/lojaComponent.vue'

import axios from 'axios'

const routes = [
  { path: '/', name: 'home', component: HomeComponent},
  { path: '/loja', name: 'loja', component: StoreComponent}
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

/**eslint-disable-vue */
Vue.createApp(App).use(router).mount('#app');
