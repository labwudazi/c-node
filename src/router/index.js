import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: ()=>import("../views/Login.vue")
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/:tab',
    component: Home
  },
  {
    path: '/topic/:topicId',
    name:'topic',
    component: ()=>import("../views/Topic.vue")
  },
  {
    path: '/user/:loginname',
    name:'user',
    component: ()=>import("../views/User.vue")
  }
]

const router = new VueRouter({
  routes,
  base:process.env.BASE_URL,
  mode:'hash'
})

export default router
