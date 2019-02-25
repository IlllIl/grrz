import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faEdit);
library.add(faMusic);
library.add(faPlus);
library.add(faTrashAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
document.addEventListener('onunload', evt => {
    console.log("onunload", new Date())
}, false);
document.addEventListener('pause', evt => {
    console.log("pause", new Date())
},false);
