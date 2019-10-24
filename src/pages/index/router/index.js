/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 10:14:09
 * @LastEditTime: 2019-09-09 17:37:27
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeCom from 'mis@views/home.vue';
import NavCom2 from 'mis@views/nav2.vue';
import NavCom3 from 'mis@views/nav3.vue';
Vue.use(VueRouter);
export const routes = [{
  path: '/home',
  component: HomeCom,
  name: 'home',
  meta: {
    title: 'home',
    icon: 'home'
  }
},
{
  path: '/nav2',
  component: NavCom2,
  name: 'NavCom2',
  meta: {
    title: 'NavCom2',
    icon: 'NavCom2'
  }
},
{
  path: '/nav3',
  component: NavCom3,
  name: 'NavCom3',
  meta: {
    title: 'NavCom3',
    icon: 'NavCom3'
  }
}
];
const router = new VueRouter({
  routes
});
// 可做埋点统计
router.beforeEach((route, from, next) => {
  const {
    meta
  } = route;
  meta.title && (window.document.title = meta.title);
  next();
});

router.afterEach((to, from) => {});
export default router;