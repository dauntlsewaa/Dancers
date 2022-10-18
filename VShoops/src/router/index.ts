//createRouter:创建路由器函数
//createWebHistory:路由的模式history模式
import { createRouter, createWebHistory } from 'vue-router';

//引进来项目配置路由
import { staticRoutes } from '@/router/routes';

//路由器
const router = createRouter({
  //设置路由的模式：history模式
	history: createWebHistory(),
  //路由器管理的路由
	routes: [],
  scrollBehavior() {
    return { top: 0, left: 0}
  },
})
// 导出路由
export default router;