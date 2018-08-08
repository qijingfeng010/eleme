import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/home'
import Discover from '@/pages/discover'
import Order from '@/pages/order'
import Mine from '@/pages/mine'
import Address from "@/pages/home/Address.vue"

const routes=[
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/address',
    component:Address
  },
  {
    path:'/discover',
    component:Discover
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/mine',
    component:Mine
  },
  {
    path:'**',
    redirect:'/home'
  }

]

export default new Router({
  routes
})
