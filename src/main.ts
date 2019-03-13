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
import FullCalendar from "vue-full-calendar";
import "fullcalendar/dist/fullcalendar.css";

library.add(faEdit);
library.add(faMusic);
library.add(faPlus);
library.add(faTrashAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;
Vue.use(FullCalendar);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
declare var cordova: any;

document.addEventListener('deviceready', evt => {
    console.log('loaded');
    cordova.plugin.cloudsettings.load(success=>{
        console.log('success', success);
        store.commit('load', success);
    }, e=> alert('error loading app data'));

},false);
document.addEventListener('onunload', evt => {
    console.log("onunload", new Date());
    store.commit('save');
    cordova.plugin.cloudsettings.save(store.state, success=>console.log("success", success), error=>console.log("error", error));

}, false);
document.addEventListener('pause', evt => {
    console.log("pause", new Date());
    store.commit('save');
    cordova.plugin.cloudsettings.save(store.state, success=>console.log("success", success), error=>console.log("error", error));
},false);



