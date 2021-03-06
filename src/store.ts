import Vue from 'vue'
import Vuex from 'vuex'
import Student from "@/models/Student";
import BootstrapVue from "bootstrap-vue";
import VuexPersistence from 'vuex-persist'
import todoService from "@/services/TodoService";
import Todo from "@/models/Todo";
import Work from "@/models/Work";
import worksInitial from "@/models/worksinitial";

Vue.use(Vuex);
Vue.use(BootstrapVue);

declare var document: any;

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

function clone(val: any): any {
    return JSON.parse(JSON.stringify(val));
}

console.log(worksInitial)
document.clone = clone;
const initialState = {
    version: 1,
    students:
        [new Student(
            "Askim",
            new Date('1990-01-01T00:00:00'),
            6
        ),
        ],
    works: worksInitial
};

let sortTodos = (todos: any) => {
    todos.sort((o1: Todo, o2: Todo) => {
        if (o1.isDone == o2.isDone) {
            return o1.creationDate > o2.creationDate ? -1 : 1;
        } else {
            return o1.isDone ? 1 : -1;
        }
    });

};
let store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [vuexLocal.plugin],
    state: {},
    getters: {
        getStudentById(state: any) {
            return (id: string) => {
                return state.students.find((value: Student) => value.id === id);
            }
        },
        getEventForStudent(state: any) {
            if (!state.events) {
                state.events = []
            }
            return (id: string) => {
                console.log("searching for event for student", id);
                return state.events.find((value: any) => value.student === id) || {};
            }
        },
        getEvents(state:any){
            return state.events || [];
        }
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
            let i = 1;
            for (let work of state.works) {
                if (!work.id) {
                    work.id = '' + i;
                }
                i++;
            }
        },
        load(state, newState){
            if(newState.timestamp>state.timestamp){
                console.log('loading')
                for(let val in newState){
                    state.val= newState[val];
                }
            }
        },
        save(state){
          state.timestamp = new Date().getUTCDate();
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
        setTodoPiece(state, change: any) {
            console.log(change);
            let student = state.students.find((inner: Student) => {
                return inner.id == change.student.id;
            });
            let tood = student.todos.find((value: Todo) => value.id == change.todo.id);
            tood.piece = change.val;
            sortTodos(student.todos);
        },

        deleteTodo(state, change: any) {
            let student = state.students.find((inner: Student) => {
                return inner.id == change.student.id;
            });
            student.todos.splice(change.index, 1);
        },
        saveWork(state, work: Work) {
            let existing = state.works.find((inner: Work) => {
                return inner.id == work.id;
            });
            if (existing) {
                Object.keys(work).forEach(function (key) {
                    // @ts-ignore
                    existing[key] = work[key];
                });
            } else {
                state.works.push(work);
            }
        },
        setEventForStudent(state: any, val) {
            let student= val.student;
            let event = val.event;
            console.log("setting event for student", event);
            if(!state.events){
                state.events=[];
            }
            let find = state.events.find((value: any) => value.student === student.id);
            if (!find) {
                //create new
                let newEvent = {
                    title: student.name,
                    student: student.id,
                    start: event.start,
                    end: event.end,
                    dow: [event.dow],
                    allDay: false
                };
                state.events.push(newEvent);
            } else {
                find.start = event.start;
                find.end = event.end;
                find.dow = event.dow;
            }
        }


    },
    actions: {}
});

store.commit('init');
document.reset = () => {
    console.log('reset');
    store.commit('reset');
    store.commit('init');
};
document.state = () => {
    console.log('state');
    return store.state;
};


export default store;