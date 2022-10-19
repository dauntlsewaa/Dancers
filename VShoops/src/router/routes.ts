import type { RouteRecordRaw } from 'vue-router';


export const staticRoutes: Array<RouteRecordRaw> = [
  // 首页路由
  {
    path: '/index',
    component: () => import('@/views/home/index.vue'),
    redirect: '/recommend',
    children: [{
      path: 'recommend',
      component: () => import('@/views/home/index.vue')
    }]
  },
  // 课程路由
  {
    path: '/discovery',
    component: () => import('@/views/home/index.vue'),
  },
  // 练习室路由
  {
    path: '/training',
    component: () => import('@/views/home/index.vue'),
  },
  // 我的路由
  {
    path: '/center',
    component: () => import('@/views/home/index.vue'),
    redirect: '/dynamics',
    children: [{
      path: 'dynamics',
      component: () => import('@/views/home/index.vue')
    }]
  },

];



