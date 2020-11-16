import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import Viser from 'viser-vue'

Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(Viser)

new Vue({
  render: h => h(App),
}).$mount('#app')
