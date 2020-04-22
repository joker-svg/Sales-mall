import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/register',
    name:'Register',
    component:() => import(/*webpackChunkName: "register"*/'../views/Register')
  },
  {
    path:'/login',
    name:'Register',
    component:() => import(/*webpackChunkName: "register"*/'../views/Login')
  }
];

const router = new VueRouter({
  routes
});

export default router
