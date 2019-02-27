import Vue from 'vue'
import Vuex from 'vuex'
import Student from "@/models/Student";
import BootstrapVue from "bootstrap-vue";
import VuexPersistence from 'vuex-persist'
import todoService from "@/services/TodoService";
import Todo from "@/models/Todo";

Vue.use(Vuex);
Vue.use(BootstrapVue);

declare var document: any;

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

function clone(val: any): any {
    return JSON.parse(JSON.stringify(val));
}

const todos = [
    {
        id: "1",
        task: "duschen",
        isDone: true
    },
    {
        id: "2",
        task: "lernen",
        isDone: false
    }

]
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

let sortTodos = (todos:any)=>{
    todos.sort((o1: Todo, o2: Todo) => {
        if (o1.isDone == o2.isDone) {
            return o1.creationDate > o2.creationDate ? -1 : 1;
        } else {
            return o1.isDone ? 1 : -1;
        }
    });

}
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

        reset(state: any) {
            state.version = null;
        },
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
        deleteStudent(state, id) {
            console.log('delete student', id);
            let existing: number = state.students.findIndex((val: Student) => val.id == id);
            if (existing >= 0) {
                state.students.splice(existing, 1);
            }
        },

        addTodo(state, student: Student) {
            console.log("addtOdo");
            let newTodo = todoService.create();
            student.todos.push(newTodo);
            sortTodos(student.todos);
        },

        updateTodoTask(state, change: any) {
            console.log(change);
            let student = state.students.find((inner: Student) => {
                return inner.id == change.student.id;
            });
            let tood = student.todos.find((value: Todo) => value.id == change.todo.id);
            tood.task = change.val;

        },

        updateTodoDone(state, change: any) {
            console.log(change);
            let student = state.students.find((inner: Student) => {
                return inner.id == change.student.id;
            });
            let tood = student.todos.find((value: Todo) => value.id == change.todo.id);
            tood.isDone = change.val;
            sortTodos(student.todos);
        },
        deleteTodo(state, change: any){
            let student = state.students.find((inner: Student) => {
                return inner.id == change.student.id;
            });
            student.todos.splice(change.index, 1);
        }
    },
    actions: {}
});

store.commit('init');
document.reset = () => {
    console.log('reset')
    store.commit('reset');
    store.commit('init');
};
export default store;