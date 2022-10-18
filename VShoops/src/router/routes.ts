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
  }
];



