import * as Vue from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// import LoginComponent from './pages/login/LoginComponent.vue'
import HomeComponent from './pages/home/HomeComponent.vue'
// import ProductsComponent from './pages/products/ProductsComponent.vue'
// import ClientsComponent from './pages/clients/ClientsComponent.vue'
// import ReportsComponent from './pages/management/ReportsComponent.vue'
// import ManagementComponent from './pages/management/ManagementComponent.vue'
import axios from 'axios'

const routes = [
  { path: '/', name: 'login', component: HomeComponent},
  // { path: '/home', name: 'home', component: HomeComponent},
  // { path: '/products', name: 'products', component: ProductsComponent},
  // { path: '/clients', name: 'clients', component: ClientsComponent},
  // { path: '/reports', name: 'reports', component: ReportsComponent},
  // { path: '/manage', name: 'management', component: ManagementComponent},
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

/**eslint-disable-vue */
Vue.createApp(App).use(router).mount('#app');
// createApp(App).mount('#app')
