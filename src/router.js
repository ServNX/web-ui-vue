import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Home from './views/Home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import(/* webpackChunkName: "products" */ './views/Products.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(/* webpackChunkName: "services" */ './views/Services.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import(/* webpackChunkName: "logout" */ './views/Logout.vue'),
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      secure: true,
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Admin/Dashboard.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Look at all routes
  router.options.routes.forEach((route) => {
    // Login
    if (to.matched[0].name === 'login') {
      if (localStorage.access_token) {
        return next('/admin/dashboard');
      }
    }

    // If this is the current route and it's secure
    if (to.matched[0].path === route.path && route.secure) {
      store.commit('SET_LAYOUT', 'app-layout');

      if (!localStorage.access_token) {
        return next('/login');
      }
    } else {
      store.commit('SET_LAYOUT', 'site-layout');
    }

    // Proceed as normal
    return next();
  });
});

export default router;
