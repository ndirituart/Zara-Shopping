// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import ExplorePage from './components/ExplorePage.vue';
import HelloWorld from './components/HelloWorld.vue';
import LoginPage from './components/LoginPage.vue';
import SignUp from './components/SignUp.vue';
import UserCart from './components/UserCart.vue';// Correct import from 'vue-router'


const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld},  // Redirect root path to login
  { path: '/explorepage', name: 'ExplorePage', component: ExplorePage, props: true },
  { path: '/login', name: 'LoginPage', component: LoginPage, props: true },
  { path: '/signup', name: 'SignUp', component: SignUp, props: true },
  { path: '/usercart', name: 'UserCart', component: UserCart, props: true },
  { path: '/:catchAll(.*)', redirect: '/' }  // Catch-all for undefined routes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

