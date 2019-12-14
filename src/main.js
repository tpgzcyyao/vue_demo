import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import hello from './components/HelloWorld'

Vue.config.productionTip = false

// debug
Vue.config.devtools = true

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: hello }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
