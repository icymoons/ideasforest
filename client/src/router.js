import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyAccount from './views/MyAccount.vue'
import OtherAccount from './views/OtherAccount.vue'
import IdeaDetails from './views/IdeaDetails.vue'
import Register from './views/Register.vue'
import Signin from './views/SignIn.vue'
import AddIdea from './views/AddIdea.vue'
import About from './views/About.vue'

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
      path: '/ideas/:id',
      name: 'ideaDetails',
      component: IdeaDetails
    },
    {
      path: '/add-idea',
      name: 'add-idea',
      component: AddIdea
    },
    {
      path: '/my-account',
      name: 'my-account',
      component: MyAccount
    },
    {
      path: '/accounts/:id',
      name: 'other-account',
      component: OtherAccount
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
