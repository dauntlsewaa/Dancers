import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'


const app = createApp(App)


app.use(ElementPlus, {
    locale: zhCn
  }).mount('#app')