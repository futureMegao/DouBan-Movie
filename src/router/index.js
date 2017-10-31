import Vue from 'vue'
import Router from 'vue-router'

const hotBroadcast = r => require.ensure([], () => r(require('@/components/hotBroadcast.vue')), 'hotBroadcast');

const search = r => require.ensure([], () => r(require('@/components/home/search.vue')), 'search');
Vue.use(Router);

const myHome = r => require.ensure([], () => r(require('@/components/home/myHome.vue')), 'myHome');

const hotBroadcasts = r => require.ensure([], () => r(require('@/components/home/hotBroadcasts.vue')), 'hotBroadcasts');

export default new Router({
  routes: [
      {path:'/',name:'热播',redirect:'/hotBroadcasts'},//默认路由
    {
      path: '/',
      name: 'hotBroadcast',
      component: hotBroadcast,
      children:[
          {path:'search',component:search,name:'搜索'},
          {path:'myHome',component:myHome,name:'我的'},
          {path:'hotBroadcasts',component:hotBroadcasts,name:'热播'}
      ]
    }
  ]
})
