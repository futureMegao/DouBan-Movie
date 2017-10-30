import Vue from 'vue'
import Router from 'vue-router'

const hotBroadcast = r => require.ensure([], () => r(require('@/components/hotBroadcast.vue')), 'hotBroadcast');

const search = r => require.ensure([], () => r(require('@/components/home/search.vue')), 'search');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hotBroadcast',
      component: hotBroadcast,
      children:[
          {path:'search',component:search,name:'搜索'}
      ]
    }
  ]
})
