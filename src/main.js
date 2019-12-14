import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

// debug
Vue.config.devtools = true

Vue.use(VueRouter)

const Foo = { template: '<div>foo is this.</div>' }

const routes = [
  { path: '/foo', component: Foo }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
