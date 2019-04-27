// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Box from './components/box'
import TranslateForm from './components/trainCity'
import ShowCity from './components/showCity'

Vue.use(ShowCity)
Vue.use(TranslateForm)
Vue.use(Box);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
