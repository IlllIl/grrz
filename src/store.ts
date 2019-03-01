import Vue from 'vue'
import Vuex from 'vuex'
import Student from "@/models/Student";
import BootstrapVue from "bootstrap-vue";
import VuexPersistence from 'vuex-persist'
import todoService from "@/services/TodoService";
import Todo from "@/models/Todo";
import Work from "@/models/Work";

Vue.use(Vuex);
Vue.use(BootstrapVue);

declare var document: any;

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

function clone(val: any): any {
    return JSON.parse(JSON.stringify(val));
}

document.clone = clone;
const initialState = {
    version: 1,
    students:
        [new Student(
            "Askim",
            new Date('1990-01-01T00:00:00'),
            6,
            [
                {
                    task: "G-Mail",
                    isDone: false
                }
            ]
        ),
        ],
    works: [{author: "Pärt	", title: "Für Alina"}, {
        author: "Schumann	",
        title: "Arabesque in C, Op. 18"
    }, {author: "Ravel	", title: "Sonatine (1905)"}, {
        author: "Schubert	",
        title: "Impromptu No. 2 in A-flat major, D. 935/Op. 142"
    }, {author: "Albéniz	", title: "Iberia"}, {
        author: "Liszt	",
        title: "Paraphrase on themes from Verdi's Rigoletto"
    }, {author: "Grainger	", title: "Handel in the Strand"},
        {author: "Schubert	", title: "Moments Musicaux, Op. 94 D. 780"}, {
            author: "Chopin	",
            title: "Andante Spianato in G, Op. 22"
        }, {author: "Brahms	", title: "Waltz in A-Flat, Op. 39 No. 15"}, {
            author: "Schubert	",
            title: "Ständchen, No. 4 from Schwanengesang, D. 957 (transcribed by Liszt for piano)"
        }, {author: "89	", title: "Joplin	Solace"}, {
            author: "Brahms	",
            title: "Rhapsody in G minor, Op. 79 No. 2"
        }, {author: "Chopin	", title: "Prelude No. 4 in E minor, Op. 28 No. 4"}, {
            author: "Beethoven	",
            title: "Piano Sonata No. 26 in E-flat Les Adieux, Op. 81a"
        }, {author: "Beethoven	", title: "Diabelli Variations, Op. 120"}, {
            author: "Ravel	",
            title: "Le tombeau de Couperin"
        }, {author: "Mozart	", title: "Twelve Variations on Ah vous dirai-je, Maman K. 265"}, {
            author: "Chopin	",
            title: "Piano Sonata No. 3, Op. 58"
        }, {author: "Beethoven	", title: "Piano Sonata No. 31 in A-flat, Op. 110"}, {
            author: "Messiaen	",
            title: "Vingt regards sur l'enfant-Jésus"
        }, {author: "Debussy	", title: "Arabesque No. 1"}, {
            author: "Chopin	",
            title: "Étude Op. 25 No. 1 in A-flat major"
        }, {author: "Chopin	", title: "Barcarolle in F sharp, Op. 60"}, {
            author: "Tchaikovsky	",
            title: "The Seasons"
        }, {author: "Schumann	", title: "Fantasie in C Major, Op. 17"}, {
            author: "Mozart	",
            title: "Fantasia in D minor, K. 397"
        }, {author: "Shostakovich	", title: "24 Preludes and Fugues"}, {
            author: "Chopin	",
            title: "Nocturne No. 20 in C sharp minor, Op. posth"
        }, {author: "Brahms	", title: "Variations and Fugue on a Theme by Handel, Op. 24"}, {
            author: "Schubert	",
            title: "Impromptu No. 2 in E-flat major, D. 899/Op. 90"
        }, {author: "Satie	", title: "Gymnopedie, No. 3"}, {
            author: "Chopin	",
            title: "Nocturne in C minor, Op. 48 No.1"
        }, {author: "Blake	", title: "Walking in the Air"},
        {author: "Bach", title: ", JS	Italian Concerto, BWV 971"},
        {author: "Sculthorpe	", title: "Left Bank Waltz"}, {
            author: "Liszt	",
            title: "Un sospiro, Concert Etude No. 3 in D-flat major"
        }, {author: "Granados	", title: "The Maiden and the Nightingale from Goyescas"}, {
            author: "Beethoven	",
            title: "Piano Sonata No. 30 in E major, Op. 109"
        }, {author: "Ravel	", title: "Gaspard de la nuit"}, {
            author: "Chopin	",
            title: "Piano Sonata No. 2 in B-flat minor, Op. 35"
        }, {author: "Chopin	", title: "Nocturne No. 8 in D-flat major, Op. 27 No. 2"}, {
            author: "Bach",
            title: ", JS	Chaconne in D minor from Partita No. 2 for Solo Violin, BWV 1004 (as arranged by Busoni)"
        },
        {author: "Satie	", title: "Gnossienne, No.1"}, {
            author: "Chopin	",
            title: "Berceuse in D-flat major, Opus 57"
        }, {author: "Ravel	", title: "Pavane pour une infante défunte"}, {
            author: "Liszt	",
            title: "Consolation No. 3 in D-flat major (Lento placido)"
        }, {author: "Chopin	", title: "Nocturne No. 1 in B-flat minor, Op. 9 No. 1"}, {
            author: "Chopin	",
            title: "Ballade No. 4 in F minor, Op. 52"
        }, {
            author: "Beethoven	",
            title: "Piano Sonata No. 17 in D minor, The Tempest Op. 31 No. 2"
        }, {author: "Schubert	", title: "Impromptu No. 3 in B-flat major, D. 935/Op. 142"}, {
            author: "Joplin	",
            title: "The Entertainer"
        },
        {author: "Rachmaninov	", title: "Prelude in G Minor, Op. 23 No. 5"}, {
            author: "Chopin	",
            title: "Prelude No. 15 in D-flat, Raindrop"
        }, {
            author: "Nyman	", title: "The Heart Asks Pleasure First from The Piano(soundtrack)"
        },
        {
            author: "Chopin	",
            title: "Polonaise in A major, Op. 40 No. 1, Military"
        }, {
            author: "Schumann	",
            title: "Of foreign lands and people from Kinderszenen, Op. 15"
        }, {author: "Schumann	", title: "Carnaval, Op. 9"}, {
            author: "Mozart	",
            title: "Piano Sonata No. 16 in C, K 545, Sonata Facile"
        }, {
            author: "Debussy	",
            title: "Prelude No. 10, La cathédrale engloutie (The sunken cathedral)"
        }, {author: "Cage	", title: "4′33″"}, {
            author: "Beethoven	",
            title: "Piano Sonata No. 29 in B-flat, Op. 106, Hammerklavier"
        }, {author: "Schumann	", title: "Widmung, Liebeslied, S. 566 (transcribed by Liszt)"}, {
            author: "Liszt	",
            title: "Benediction de Dieu dans la solitude from Harmonies poétiques et religieuses"
        }, {author: "Liszt	", title: "Liebestraum No. 3 in A-flat, S. 541 / III"}, {
            author: "Chopin	",
            title: "Etude Op. 10 No. 12 in C minor, Revolutionary Étude"
        }, {author: "Rachmaninov	", title: "Prelude in C sharp Minor, Op. 3 No. 2"}, {
            author: "Liszt	",
            title: "Hungarian Rhapsody No. 2 in C sharp Minor, S.244/2"
        }, {author: "Brahms	", title: "Intermezzo Op. 118 No. 2 in A major"}, {
            author: "Jarrett	",
            title: "The Köln Concert"
        }, {
            author: "Liszt	",
            title: "Grandes études de Paganini, No. 3 in G sharp minor, La Campanella"
        }, {author: "Chopin	", title: "Étude Op. 10 No. 3 in E"}, {
            author: "Liszt	",
            title: "Piano Sonata in B minor, S. 178"
        }, {
            author: "Debussy	",
            title: "Prelude No. 8, La fille aux cheveux de lin (        The Girl with the Flaxen Hair"
        }, {author: "Beethoven	", title: "Sonata No. 32 in C minor, Op. 111"}, {
            author: "Schubert	",
            title: "Impromptu No. 4 in A-flat major, D. 899/Op. 90"
        }, {
            author: "Bach",
            title: "JS	Jesu, Joy of Man's Desiring (piano transcription by Myra Hess)"
        }, {author: "Sinding	", title: "Rustle of Spring"}, {
            author: "Schubert	",
            title: "Fantasie in C major, Op. 15 (D. 760), Wanderer Fantasy"
        }, {author: "Mozart	", title: "Piano Sonata No. 11 in A major, K. 331"}, {
            author: "Chopin	",
            title: "Ballade No. 1 in G minor, Op. 23"
        }, {author: "Grieg	", title: "Bryllupsdag på Troldhaugen (Wedding Day at Troldhaugen)"}, {
            author: "Chopin	",
            title: "Nocturne No. 2 in E-flat major, Op. 9 No. 2"
        }, {
            author: "Schumann	",
            title: "Träumerei from Kinderszenen (        Scenes from        Childhood), Op. 15"
        }, {author: "Chopin	", title: "Polonaise in A-flat major, Op. 53, Heroic"}, {
            author: "Beethoven	",
            title: "Für Elise"
        },
        {author: "Schubert	", title: "Fantasia in F minor for piano four hands, D. 940 Op. 103"}, {
            author: "Chopin	",
            title: "Fantaisie-Impromptu in C sharp minor, Op. 66"
        }, {author: "Beethoven	", title: "Piano Sonata No. 21 in C major, Op. 53, Waldstein"}, {
            author: "Mussorgsky	",
            title: "Pictures at an Exhibition"
        }, {
            author: "Beethoven	",
            title: "Piano Sonata No. 23 in F minor, Op. 57, Appassionata"
        }, {author: "Schubert	", title: "Piano Sonata No. 21 in B-flat major, D. 960"}, {
            author: "Bach",
            title: "JS	The Well-Tempered Clavier"
        },
        {author: "Allen	", title: "Chopsticks"}, {
            author: "Schubert	",
            title: "Impromptu No. 3 in G-flat major, D. 899/Op. 90"
        }, {author: "Beethoven	", title: "Piano Sonata No. 8 in C minor, Op. 13, Pathétique"}, {
            author: "Satie	",
            title: "Gymnopédies No.1"
        }, {author: "Debussy	", title: "Clair de lune from Suite bergamasque"},
        {author: "Bach", title: "JS	Goldberg Variations"},
        {author: "Beethoven	", title: "Piano Sonata No. 14 in C-sharp minor, Op. 27 No. 2, Moonlight"}],
};

let sortTodos = (todos: any) => {
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
            let i = 1;
            for (let work of state.works) {
                if (!work.id) {
                    work.id = '' + i;
                }
                i++;
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