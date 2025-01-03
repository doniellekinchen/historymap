import { createRouter, createWebHistory } from 'vue-router';
import USMap from '@/components/UsMap.vue';
// import Alabama from '@/components/states-resource/Alabama.vue';

const routes = [
  {
    path: '/',
    name: 'USMap',
    component: USMap,
  },
  {
    path: '/state/:stateName',
    name: 'StatePage',
    component: () => import(`@/components/StatePage.vue`), 
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
