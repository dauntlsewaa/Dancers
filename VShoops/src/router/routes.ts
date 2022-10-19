import type { RouteRecordRaw } from 'vue-router';


export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    redirect: '/index',
    children: []
  },
  // 首页路由
  {
    path: '/index',
    component: () => import('@/views/home/index.vue'),
    redirect: '/index/recommend',
    children: [
      // 推荐页面
      {
        path: 'recommend',
        component: () => import('@/views/home/index.vue')
      },
      // 作品
      {
        path: 'original',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'recommend',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'recommend',
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  // 课程路由
  {
    path: '/discovery',
    component: () => import('@/views/course/index.vue'),
    redirect: '/discovery/vip_zone',
    children: [{
      path: 'vip_zone',
      component: () => import('@/views/course/index.vue')
    }]
  },
  // 练习室路由
  {
    path: '/training',
    component: () => import('@/views/training/index.vue'),
  },
  // 我的路由
  {
    path: '/center',
    component: () => import('@/views/home/index.vue'),
    redirect: '/center/dynamics',
    children: [{
      path: 'dynamics',
      component: () => import('@/views/home/index.vue')
    }]
  },

];



