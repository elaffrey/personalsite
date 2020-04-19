import Vue from 'vue';
import VueRouter from 'vue-router';
import Parent from '../views/Parent.vue';
import About from '../views/About';
import Projects from '../views/Projects';
import Resume from '../views/Resume';

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    component: Parent,
    children: [
      {
        path: '',
        component: About
      },
      {
        path: '/projects',
        component: Projects
      },
      {
        path: '/resume',
        component: Resume
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
