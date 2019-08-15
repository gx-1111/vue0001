import Vue from 'vue'
import Router from 'vue-router'
import emplist from '@/components/emplist'
import EmpAdd from '@/components/EmpAdd'
import EmpUpdate from '@/components/EmpUpdate'
import upload from '@/components/upload'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'emplist',
      component: emplist
    },
    {
    	path:'/EmpAdd',
    	name:'EmpAdd',
    	component:EmpAdd
    },
    {
    	path:'/EmpUpdate',
    	name:'EmpUpadate',
    	component:EmpUpdate
    },
    {
    	path:'/upload',
    	name:'upload',
    	component:upload
    }
  ]
})
