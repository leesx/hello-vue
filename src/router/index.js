import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld2 from '@/components/HelloWorld2';
import Layout from '@/components/Layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Layout
    },
    {
        path: '/2',
        name: 'HelloWorld2',
        component: HelloWorld2
    },
  ]
});
