import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 移入路由器
import router from './router'

// 引入清除默认样式文件
import  '@/assets/reset.css'

//引入视频详情全局组件
// import VideoDetail from '@/components/video/VideoDetail.vue'
// 头部组件
import Header from "@/components/header/header.vue";
// 底部组件
import Footer from "@/components/footer/footer.vue";

//图片懒加载
// import lazyPlugin from 'vue3-lazy'
import lazyload from "vue-lazyload"






const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 视频组件
// app.component('VideoDetail', VideoDetail)
// 头部组件
app.component('Header', Header)
app.component('Footer', Footer)

//图片懒加载
app.use(
  lazyload,{ 
  preLoad: 1.3,  
  error:('../src/assets/loadingerror.png'),
  loading:('../src/assets/loading.png'),
  attempt: 1
}
)

app.use(ElementPlus, {
  locale: zhCn
}).use(router)
  .mount('#app')
