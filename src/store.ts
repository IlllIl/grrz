import Vue from 'vue'
import Vuex from 'vuex'
import Student from "@/models/Student";
import BootstrapVue from "bootstrap-vue";
Vue.use(Vuex)
Vue.use(BootstrapVue)

export default new Vuex.Store({
    state: {
        version: 1,
        students:
            [
                new Student(
                    "karl",
                    new Date('1999-11-16T00:00:00'),
                    6,
                    [
                        {
                            task: "lernen",
                            isDone: false
                        }
                    ]
                ),
                new Student(
                    "marie",
                    new Date('2001-11-16T00:00:00'),
                    6,
                    [
                        {
                            task: "duschen",
                            isDone: true
                        }
                    ]
                )
            ],
        works:[

        ]
    },
    mutations: {},
    actions: {}
})
