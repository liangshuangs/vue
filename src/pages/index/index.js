import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/index.scss';

// 使用elementUI
Vue.use(ElementUI);
console.log(router, 'tourer');
const app = new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {
    App
  }
});
export default app;