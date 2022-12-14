import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Landing from "@/views/Landing.vue";
import SetPage from "@/views/SetPage.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Landing
  },
  {
    path: '/set',
    name: 'set',
    component: SetPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
