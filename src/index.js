import 'normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'

let app = new Vue({
    el: '#app',
    router,
    data: {},
    components: { App },
    render: c => c(App)
})
