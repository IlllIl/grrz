import Vue from 'vue'
import Vuex from 'vuex'
import Student from "@/models/Student";
import BootstrapVue from "bootstrap-vue";
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);
Vue.use(BootstrapVue);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

function clone(val: any): any {
    return JSON.parse(JSON.stringify(val));
}

const initialState = {
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
    works: []
};

let store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [vuexLocal.plugin],
    state: {},
    getters: {
        getStudentById(state: any) {
            return (id: string) => {
                return clone(state.students.find((value: Student) => value.id === id));
            }
        },

    },
    mutations: {
        init(state: any) {
            if (!state || !state.version) {
                console.log("initialising application");
                state.students = initialState.students;
                state.works = initialState.works;
                state.version = initialState.version;
            }
        },
        saveStudent(state, student) {
            console.log('saving student', student);
            let existing: Student = state.students.find((val: Student) => val.id == student.id);
            if (existing) {
                Object.keys(student).forEach(function (key) {
                    // @ts-ignore
                    existing[key] = student[key];
                });
            } else {
                state.students.push(student);
            }
        },
        deleteStudent(state, id){
            console.log('delete student', id);
            let existing: number = state.students.findIndex((val: Student) => val.id == id);
            if(existing>=0){
                state.students.splice(existing, 1);
            }
        }
    },
    actions: {}
});

store.commit('init');
export default store;