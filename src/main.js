import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  //导入element-ui
import VueResource from 'vue-resource'
import * as echarts from 'echarts'


Vue.prototype.$echarts = echarts
Vue.use(Element)
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
