import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Calendar from './views/Calendar.vue'
import Student from './components/Student.vue'
import WorkList from './components/work/WorkList.vue'
import WorkView from './components/work/WorkView.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar
        },
        {
            path: '/student/:id',
            name: 'student',
            component: Student
        },
        {
            path: '/works',
            name: 'works',
            component: WorkList
        },
        {
            path: '/work/:id',
            name: 'work',
            component: WorkView
        }
    ]
})
