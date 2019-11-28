import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      component: Home,
      meta: {
        title: 'Home',
      },
      name: 'home',
      path: '/',
    },
    {
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      meta: {
        title: 'About',
      },
      name: 'about',
      path: '/about',
    },
    {
      component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
      meta: {
        title: 'Contact',
      },
      name: 'contact',
      path: '/contact',
    },
  ],
});
