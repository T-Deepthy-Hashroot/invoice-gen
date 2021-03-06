import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App/App.vue'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'
import Vue2Editor from "vue2-editor"
Vue.use(BootstrapVue);
Vue.use(Vue2Editor);


document.addEventListener('DOMContentLoaded', () => {
   new Vue({
    render: h => h(App),
    el: '#app',
    store
  })
})