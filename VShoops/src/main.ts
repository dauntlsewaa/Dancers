import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

//引入视频详情全局组件
import VideoDetail from './components/video/VideoDetail.vue'
// createApp(App).mount('#app')


const app = createApp(App)

app.component('VideoDetail',VideoDetail)
app.use(ElementPlus, {
    locale: zhCn
  }).mount('#app')
