import Vue from 'vue';
import Router from 'vue-router';
import Button from '../views/button.vue';
import Index from '../views/index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {
      path:'/buttons',
      name:'Button',
      component:Button
    },
    {
      path:'/',
      name:'Index',
      component:Index
    }
  ]
})
