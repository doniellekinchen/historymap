import Vue from 'vue';
import VueRouter from 'vue-router';
import StatePage from '@/components/StatePage.vue';
import FullBlogPost from '@/components/FullBlogPost.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/:stateName', name: 'StatePage', component: StatePage, props: true },
  { path: '/state/:stateName/:postName', component: () => import('@/components/FullBlogPost.vue'), props: true }

];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
