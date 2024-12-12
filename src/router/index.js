// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import UsMap from '@/components/UsMap.vue';
import StateDetails from '@/components/StateDetails.vue';
import AboutPage from '@/views/AboutPage.vue'

const routes = [
  { path: '/', component: UsMap },
  { path: '/state/:stateAbbr', component: StateDetails, props: true },
  { path: '/', name: 'Home', component: UsMap},
  { path: '/aboutpage', name: 'About', component: AboutPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
