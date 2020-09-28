import Vue from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue2-smooth-scroll'


Vue.config.productionTip = false
Vue.use(VueSmoothScroll,{
  duration: 2000,
})
new Vue({
  render: h => h(App),

}).$mount('#app')



