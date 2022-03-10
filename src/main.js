// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js
import Vue from 'vue'
import App from './App'
import Router from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import './style.css'

Vue.use(VueRouter)
Vue.use(Vuex)


// 路由配置
const RouterConfig = {
	// 使用 HTML5 的History 路由模式
	mode: 'history',
	routes : Router
};
const router = new VueRouter (RouterConfig);

router.beforeEach ((to, from, next) => {
	window.document.title = to.meta.title;
	next();
});

router.afterEach((to, from, ))


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
