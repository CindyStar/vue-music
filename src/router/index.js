import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Find from '@/pages/find.vue'
import My from '@/pages/my.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
