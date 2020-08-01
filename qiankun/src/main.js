// import Vue from 'vue'
import App from './App.vue'
import router from './router';
import startQiankun from "./micro";
startQiankun();

// import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/dist/antd.css';
// Vue.component(Button.name, Button);
// import { Button } from 'ant-design-vue';
// Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#main-app')
