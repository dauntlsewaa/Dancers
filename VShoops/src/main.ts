import { createApp } from 'vue'
<<<<<<< HEAD
=======

>>>>>>> 51a520667ac16176e0e4f80602b8862d9ece68c7
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// createApp(App).mount('#app')


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus, {
    locale: zhCn
  }).mount('#app')
