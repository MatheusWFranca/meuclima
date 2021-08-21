import Vue from 'vue'
import App from './App.vue'
import Loading from "./components/Loading.vue";

Vue.config.productionTip = false

Vue.component('Loading', Loading)

new Vue({
  render: h => h(App),
}).$mount('#app')