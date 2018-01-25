import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Text from '@/components/Text'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Text',
      name: 'Text',
      component: Text
    }
  ]
})
