import Vue from 'vue'
import App from './App.vue'
import '@/components/fonts/iconfont.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
