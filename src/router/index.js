import Vue from 'vue'
import Router from 'vue-router'

import SeeEmployee from '@/components/Employee/SeeEmployee'
import AddEmployee from '@/components/Employee/AddEmployee'
import SeeClient from '@/components/Client/SeeClient'
import AddClient from '@/components/Client/AddClient'
import SeeProvider from '@/components/Provider/SeeProvider'
import AddProvider from '@/components/Provider/AddProvider'
import SeeProduct from '@/components/Product/SeeProduct'
import AddProduct from '@/components/Product/AddProduct'
import SeeBuy from '@/components/Buy/SeeBuy'
import AddBuy from '@/components/Buy/AddBuy'
import Home from '@/components/Home/Home'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home

    },
    {
      path: '/home',
      name: 'home',
      component: Home

    },
    {
      path: '/employee/see',
      name: 'SeeEmployee',
      component: SeeEmployee

    },
    {
      path: '/employee/add',
      name: 'AddEmployee',
      component: AddEmployee
    },
    {
      path: '/employee/:id/edit',
      name: 'EditEmployee',
      component: AddEmployee
    },
    {
      path: '/provider/:id/edit',
      name: 'EditProvider',
      component: AddProvider
    },

    {
      path: '/client/see',
      name: 'SeeClient',
      component: SeeClient
    },
    {
      path: '/client/add',
      name: 'AddClient',
      component: AddClient
    },
    {
      path: '/client/:id/edit',
      component: AddClient
    },
    {
      path: '/provider/see',
      name: 'SeeProvider',
      component: SeeProvider
    },
    {
      path: '/provider/add',
      name: 'AddProvider',
      component: AddProvider
    },
    {
      path: '/product/see',
      name: 'SeeProduct',
      component: SeeProduct
    },
    {
      path: '/product/add',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path:'/product/:id/edit',
      name:'EditProduct',
      component: AddProduct
    },
    {
      path: '/buy/see',
      name: 'SeeBuy',
      component: SeeBuy
    },
    {
      path: '/buy/add',
      name: 'AddBuy',
      component: AddBuy
    }
  ]
})
