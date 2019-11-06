import Vue from 'vue';
import Router from 'vue-router';
import MAINVIEW from './views/MAINVIEW.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        name: 'MAINVIEW',
        component: MAINVIEW,
        props: true
      },
    ],
  });
  