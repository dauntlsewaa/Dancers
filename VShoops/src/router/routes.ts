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
        component: () => import('@/views/home/VideoList/index.vue'),
      },

      // 作品
      {
        path: 'original',
        component: () => import('@/views/home/attr/index.vue'),

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
    children: [
      // 会员专区
      {
        path: 'vip_zone',
        component: () => import('@/views/course/vip/index.vue'),

      },
      // 视频课
      {
        path: 'video_courses',
        component: () => import('@/views/course/attrVideo.vue')
      },
      // 主题
      {
        path: 'zone_list',
        component: () => import('@/views/course/theme/index.vue')
      },
      // 综合
      {
        path: 'x',
        component: () => import('@/views/course/vip/index.vue')
      },
      {
        path: 'w',
        component: () => import('@/views/course/vip/index.vue')
      },
      {
        path: 'e',
        component: () => import('@/views/course/vip/index.vue')
      },
      {
        path: 'q',
        component: () => import('@/views/course/vip/index.vue')
      },
      {
        path: 'a',
        component: () => import('@/views/course/vip/index.vue')
      }
    ]
  },
  // 练习室路由
  {
    path: '/training',
    component: () => import('@/views/training/index.vue'),
    redirect: '/training/dynamics',
    children: [
      // 我的练习室
      {
        path: 'dynamics',
        component: () => import('@/views/training/Mytraining/index.vue')
      },
      // 缓存
      {
        path: 'mediaCache',
        component: () => import('@/views/training/cache/index.vue')
      },
      // 收藏页面
      {
        path: 'collections',
        component: () => import('@/views/training/collect/index.vue')
      },
      // 历史记录
      {
        path: 'view_records',
        component: () => import('@/views/training/history/index.vue')
      }
    ]
  },
  // 我的路由
  {
    path: '/center',
    component: () => import('@/views/my/index.vue'),
    redirect: '/center/dynamics',
    children: [
      // 资源动态
      {
        path: 'dynamics',
        component: () => import('@/views/my/resource/resource.vue')
      },
      // 我的资料
      {
        path: 'edit_info',
        component: () => import('@/views/my/means/index.vue')
      },
      // 我的会员
      {
        path: 'my_member',
        component: () => import('@/views/my/mymember/index.vue')
      },
    ]
  },
  //视频播放路由
  {


    path: '/player',
    component: () => import('@/components/video/index.vue')
  },
  //登陆页面
  {
    path: '/login',
    component: () => import('@/components/login/index.vue')
  },

];



