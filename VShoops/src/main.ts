import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//引入视频详情全局组件
import VideoDetail from './components/video/VideoDetail.vue'
// createApp(App).mount('#app')
// 引入订单详情全局组件
import OrderDetail from './components/orderdetail/OrderDetail.vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}



app.component('VideoDetail',VideoDetail)
app.component('OrderDetail',OrderDetail)

app.use(ElementPlus, {
    locale: zhCn
  }).mount('#app')
