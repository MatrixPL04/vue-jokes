import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/github',
    name: 'github',
    beforeEnter() {
      window.location.href = "https://github.com/MatEE404"
    }
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: () => import('../views/Favourite.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
