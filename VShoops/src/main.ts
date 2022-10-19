import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router'


//引入视频详情全局组件
import VideoDetail from './components/video/VideoDetail.vue'
// createApp(App).mount('#app')


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}



app.component('VideoDetail',VideoDetail)

app.use(ElementPlus, {
    locale: zhCn
  }).use(router)
  .mount('#app')
