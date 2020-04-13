import Vue from 'vue';
import VueRouter from 'vue-router';
import Parent from '../views/Parent.vue';
import About from '../views/About';
import Projects from '../views/Projects';
import Resume from '../views/Resume';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Parent',
    component: Parent,
    children: [
     {
       path: '/about',
       name: 'About',
       component: About
     },
     {
       path: '/projects',
       name: 'Projects',
       component: Projects
     },
     {
       path: '/resume',
       name: 'Resume',
       component: Resume
     }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
