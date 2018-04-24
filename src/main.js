import Vue from 'vue'
import Index from './index.vue'
import router from './router/router'

new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index }
  //render: h => h(Index)
})
