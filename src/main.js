import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementUI from 'element-plus';
import 'element-plus/dist/index.css';
import formCreate from "@form-create/element-ui"

const app = createApp(App);
app.use(formCreate);
app.use(ElementUI)
app.mount('#app')