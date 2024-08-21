// src/router.js
import { createRouter, createWebHistory } from 'vue-router';  // Correct import from 'vue-router'
import BudgetHome from './components/BudgetHome.vue';        // Adjust the path if necessary
import BudgetResults from './components/BudgetResults.vue';
import AboutUs from './components/AboutUs.vue';// Adjust the path if necessary

const routes = [
  { path: '/home', name: 'BudgetHome', component: BudgetHome },
  { path: '/results', name: 'BudgetResults', component: BudgetResults, props: true },
  { path: '/aboutus', name: 'AboutUs', component: AboutUs, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

