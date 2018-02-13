import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SourceSelection from '@/components/SourceSelection'
import NewsList from '@/components/NewsList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hy',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'SourceSelection',
      component: SourceSelection
    },
    {
      path: '/news',
      name: 'NewsList',
      component: NewsList
    }
  ]
})
