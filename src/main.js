import * as Vue from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import homePage from './pages/home/HomePage.vue';
import storePage from './pages/store/StorePage.vue';
import cursesPage from './pages/curses/cursesPage.vue';
import pricePage from './pages/prices/pricePage.vue';

import axios from 'axios'

const routes = [
  { path: '/', name: 'home', component: homePage},
  { path: '/store', name: 'loja', component: storePage},
  { path: '/curses', name: 'cursos', component: cursesPage},
  { path: '/prices', name: 'precos', component: pricePage},
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

/** eslint-disable-vue */
Vue.createApp(App).use(router).mount('#app');
