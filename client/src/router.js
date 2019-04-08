import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import Register from "./views/Register.vue"
=======
import Test from './views/Test.vue'
>>>>>>> ab704f986d942352f40ef99fb9b03852250ac326

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
<<<<<<< HEAD
      path: '/register',
      name: 'register',
      component: Register
=======
      path: '/test',
      name: 'test',
      component: Test
>>>>>>> ab704f986d942352f40ef99fb9b03852250ac326
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
