import { createApp } from 'vue'
import app from './components/app.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(app).use(Antd).mount('#app')