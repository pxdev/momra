import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/store"

import './scss/main.scss'
import 'remixicon/fonts/remixicon.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
