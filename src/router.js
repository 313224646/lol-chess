import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/index'),
      meta: {
        level: 1
      }
    },
    {
      path: '*',
      component: () => import('./views/index')
    }
  ],
  // 默认跳转页面滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      to.meta.savedPosition = savedPosition
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
