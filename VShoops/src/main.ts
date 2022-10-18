import { createApp } from 'vue'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 51a520667ac16176e0e4f80602b8862d9ece68c7
=======
>>>>>>> 9a7908537c8ea56270b6ba3ee32df7b2afe0e22d
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//引入视频详情全局组件
import VideoDetail from './components/video/VideoDetail.vue'
// createApp(App).mount('#app')


const app = createApp(App)
<<<<<<< HEAD
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

=======

app.component('VideoDetail',VideoDetail)
>>>>>>> lyh
app.use(ElementPlus, {
    locale: zhCn
  }).mount('#app')
