(function(t){function e(e){for(var o,r,s=e[0],u=e[1],l=e[2],d=0,h=[];d<s.length;d++)r=s[d],a[r]&&h.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);c&&c(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"171f":function(t,e,n){"use strict";var o=n("d423"),a=n.n(o);a.a},"1af7":function(t,e,n){"use strict";var o=n("b02e"),a=n.n(o);a.a},"235d":function(t,e,n){"use strict";var o=n("febe"),a=n.n(o);a.a},"558b":function(t,e,n){"use strict";var o=n("671f"),a=n.n(o);a.a},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(t,e,n){},"671f":function(t,e,n){},8074:function(t,e,n){"use strict";var o=n("a4e3"),a=n.n(o);a.a},"85f3":function(t,e,n){},a4e3:function(t,e,n){},b02e:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("GRRZ")]),n("div",{staticClass:"nav-line"},[n("router-link",{staticClass:"nav-link nav-item",attrs:{to:"/works",href:"#"}},[t._v("Works")]),n("router-link",{staticClass:"nav-link nav-item",attrs:{to:"/about",href:"#"}},[t._v("About")])],1)],1),n("div",{staticClass:"container"},[n("router-view")],1),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer font-small blue"},[n("div",{staticClass:"container"})])}],r={},s=r,u=(n("5c0b"),n("2877")),l=Object(u["a"])(s,a,i,!1,null,null,null),c=l.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"home"}),n("StudentList")],1)},f=[],p=n("d225"),v=n("308d"),m=n("6bb5"),b=n("4e2b"),g=n("9ab4"),k=n("60a3"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"student-list"},[n("div",{staticClass:"row"},[n("h1",[t._v("Students\n            "),n("span",{staticClass:"student-add",on:{click:function(e){return t.addStudent()}}},[t._v("\n         +\n        ")])])]),n("div",{staticClass:"accordion",attrs:{id:"students-example"}},t._l(t.students,function(e){return n("div",{staticClass:"row card collapsed"},[n("div",{staticClass:"card-header ",on:{click:function(n){return t.toggleCard(e.id)}}},[n("h5",{staticClass:"mb-0"},[n("span",{},[t._v("\n                        "+t._s(e.name)+", ("+t._s(t.Util.getStudentAge(e))+")\n                    ")]),n("span",{staticClass:"student-edit"},[n("router-link",{attrs:{to:{name:"student",params:{id:e.id}}}},[n("font-awesome-icon",{attrs:{icon:"edit"}})],1)],1)])]),n("div",{staticClass:"card-body",staticStyle:{display:"none"},attrs:{id:e.id,"data-parent":"#students-example"}},[n("TodoList",{attrs:{student:e}}),n("span",{staticClass:"student-delete"},[n("button",{attrs:{type:"button"},on:{click:function(n){return t.deleteStudent(e.id)}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])],1)])}),0)])},y=[],O=n("b0b4"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-list form-group"},[n("button",{staticClass:" btn btn-info todo-add",on:{click:function(e){return t.add()}}},[t._v("Add todo")]),n("button",{staticClass:" btn btn-info todo-share",attrs:{disabled:!t.canMessage()},on:{click:function(e){return t.share()}}},[t._v("Message")]),n("div",t._l(t.todos,function(e,o){return n("div",[n("TodoView",{attrs:{todo:e,student:t.student}},[n("span",{staticClass:"todo-item-delete",on:{click:function(e){return t.del(o)}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)]),t._t("default")],2)}),0)])},j=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-check"},[n("input",{staticClass:"form-check-input",attrs:{type:"checkbox",disabled:t.todo.isDone},domProps:{checked:t.todo.isDone},on:{input:t.updateTodoDone}}),n("input",{staticClass:"form-control",attrs:{type:"text",disabled:t.todo.isDone},domProps:{value:t.todo.task},on:{input:t.updateTodoTask}}),n("div",{staticClass:"piece"},[t.todo.piece?n("span",{staticClass:"show-piece"},[n("WorkViewSmall",{attrs:{workId:t.todo.piece}})],1):n("span",[t._v("\n            -\n        ")]),n("span",[t.todo.isDone?t._e():n("button",{staticClass:"btn",on:{click:t.showModal}},[n("font-awesome-icon",{attrs:{icon:"music"}})],1)])]),n("b-modal",{ref:"myModalRef",attrs:{"hide-footer":"",title:"Choose a piece"}},[n("WorkList",{scopedSlots:t._u([{key:"default",fn:function(e){return[n("button",{staticClass:"btn-info",on:{click:function(n){return t.addWork(e.work)}}},[t._v("+")])]}}])}),n("b-button",{staticClass:"mt-3",attrs:{variant:"outline-danger",block:""},on:{click:t.hideModal}},[t._v("Close Me")])],1)],1)},_=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h1",[t._v("Works")]),n("div",{staticClass:"work-add"},[n("button",{staticClass:"btn btn-info",on:{click:function(e){return t.addWork()}}},[t._v("New Work")])]),n("div",[n("h2",[t._v("Worksearch")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),n("div",t._l(t.works,function(e){return n("div",{staticClass:"work-list"},[n("div",{staticClass:"work-piece"},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(", "),n("span",{staticClass:"author"},[t._v(t._s(e.author))])]),n("div",{staticClass:"work-actions"},[n("router-link",{attrs:{to:{name:"work",params:{id:e.id}}}},[n("font-awesome-icon",{attrs:{icon:"edit"}})],1),t._t("default",null,{work:e})],2)])}),0)])},D=[],P=n("5d73"),T=n.n(P),x=(n("386d"),n("6762"),n("2fdb"),n("20d6"),n("a4bb")),B=n.n(x),$=(n("ac6a"),n("7514"),n("55dd"),n("f499")),M=n.n($),L=n("2f62"),A=n("11c1"),E=function t(e,n,o){Object(p["a"])(this,t),this.id=Object(A["v4"])(),this.name=e,this.bday=n,this.grade=o,this.todos=[]},W=E,F=n("9f7b"),z=n.n(F),I=n("bfa9"),R=n("2bd2"),G=(n("6b54"),function(){function t(e){Object(p["a"])(this,t),this.task=e.task,this.isDone=e.isDone,this.creationDate=new Date,this.id=Object(A["v4"])()}return Object(O["a"])(t,[{key:"toString",value:function(){var t=this.task;return this.piece&&(t+=this.piece.toString()),t}},{key:"done",value:function(){this.isDone=!0}}]),t}()),J=function(){function t(){Object(p["a"])(this,t),this.data=new R["a"]}return Object(O["a"])(t,[{key:"create",value:function(){return new G({task:"",isDone:!1})}}]),t}(),V=new J;o["default"].use(L["a"]),o["default"].use(z.a);var q=new I["a"]({storage:window.localStorage});function H(t){return JSON.parse(M()(t))}document.clone=H;var K={version:1,students:[new W("Askim",new Date("1990-01-01T00:00:00"),6)],works:[{author:"Pärt\t",title:"Für Alina"},{author:"Schumann\t",title:"Arabesque in C, Op. 18"},{author:"Ravel\t",title:"Sonatine (1905)"},{author:"Schubert\t",title:"Impromptu No. 2 in A-flat major, D. 935/Op. 142"},{author:"Albéniz\t",title:"Iberia"},{author:"Liszt\t",title:"Paraphrase on themes from Verdi's Rigoletto"},{author:"Grainger\t",title:"Handel in the Strand"},{author:"Schubert\t",title:"Moments Musicaux, Op. 94 D. 780"},{author:"Chopin\t",title:"Andante Spianato in G, Op. 22"},{author:"Brahms\t",title:"Waltz in A-Flat, Op. 39 No. 15"},{author:"Schubert\t",title:"Ständchen, No. 4 from Schwanengesang, D. 957 (transcribed by Liszt for piano)"},{author:"89\t",title:"Joplin\tSolace"},{author:"Brahms\t",title:"Rhapsody in G minor, Op. 79 No. 2"},{author:"Chopin\t",title:"Prelude No. 4 in E minor, Op. 28 No. 4"},{author:"Beethoven\t",title:"Piano Sonata No. 26 in E-flat Les Adieux, Op. 81a"},{author:"Beethoven\t",title:"Diabelli Variations, Op. 120"},{author:"Ravel\t",title:"Le tombeau de Couperin"},{author:"Mozart\t",title:"Twelve Variations on Ah vous dirai-je, Maman K. 265"},{author:"Chopin\t",title:"Piano Sonata No. 3, Op. 58"},{author:"Beethoven\t",title:"Piano Sonata No. 31 in A-flat, Op. 110"},{author:"Messiaen\t",title:"Vingt regards sur l'enfant-Jésus"},{author:"Debussy\t",title:"Arabesque No. 1"},{author:"Chopin\t",title:"Étude Op. 25 No. 1 in A-flat major"},{author:"Chopin\t",title:"Barcarolle in F sharp, Op. 60"},{author:"Tchaikovsky\t",title:"The Seasons"},{author:"Schumann\t",title:"Fantasie in C Major, Op. 17"},{author:"Mozart\t",title:"Fantasia in D minor, K. 397"},{author:"Shostakovich\t",title:"24 Preludes and Fugues"},{author:"Chopin\t",title:"Nocturne No. 20 in C sharp minor, Op. posth"},{author:"Brahms\t",title:"Variations and Fugue on a Theme by Handel, Op. 24"},{author:"Schubert\t",title:"Impromptu No. 2 in E-flat major, D. 899/Op. 90"},{author:"Satie\t",title:"Gymnopedie, No. 3"},{author:"Chopin\t",title:"Nocturne in C minor, Op. 48 No.1"},{author:"Blake\t",title:"Walking in the Air"},{author:"Bach",title:", JS\tItalian Concerto, BWV 971"},{author:"Sculthorpe\t",title:"Left Bank Waltz"},{author:"Liszt\t",title:"Un sospiro, Concert Etude No. 3 in D-flat major"},{author:"Granados\t",title:"The Maiden and the Nightingale from Goyescas"},{author:"Beethoven\t",title:"Piano Sonata No. 30 in E major, Op. 109"},{author:"Ravel\t",title:"Gaspard de la nuit"},{author:"Chopin\t",title:"Piano Sonata No. 2 in B-flat minor, Op. 35"},{author:"Chopin\t",title:"Nocturne No. 8 in D-flat major, Op. 27 No. 2"},{author:"Bach",title:", JS\tChaconne in D minor from Partita No. 2 for Solo Violin, BWV 1004 (as arranged by Busoni)"},{author:"Satie\t",title:"Gnossienne, No.1"},{author:"Chopin\t",title:"Berceuse in D-flat major, Opus 57"},{author:"Ravel\t",title:"Pavane pour une infante défunte"},{author:"Liszt\t",title:"Consolation No. 3 in D-flat major (Lento placido)"},{author:"Chopin\t",title:"Nocturne No. 1 in B-flat minor, Op. 9 No. 1"},{author:"Chopin\t",title:"Ballade No. 4 in F minor, Op. 52"},{author:"Beethoven\t",title:"Piano Sonata No. 17 in D minor, The Tempest Op. 31 No. 2"},{author:"Schubert\t",title:"Impromptu No. 3 in B-flat major, D. 935/Op. 142"},{author:"Joplin\t",title:"The Entertainer"},{author:"Rachmaninov\t",title:"Prelude in G Minor, Op. 23 No. 5"},{author:"Chopin\t",title:"Prelude No. 15 in D-flat, Raindrop"},{author:"Nyman\t",title:"The Heart Asks Pleasure First from The Piano(soundtrack)"},{author:"Chopin\t",title:"Polonaise in A major, Op. 40 No. 1, Military"},{author:"Schumann\t",title:"Of foreign lands and people from Kinderszenen, Op. 15"},{author:"Schumann\t",title:"Carnaval, Op. 9"},{author:"Mozart\t",title:"Piano Sonata No. 16 in C, K 545, Sonata Facile"},{author:"Debussy\t",title:"Prelude No. 10, La cathédrale engloutie (The sunken cathedral)"},{author:"Cage\t",title:"4′33″"},{author:"Beethoven\t",title:"Piano Sonata No. 29 in B-flat, Op. 106, Hammerklavier"},{author:"Schumann\t",title:"Widmung, Liebeslied, S. 566 (transcribed by Liszt)"},{author:"Liszt\t",title:"Benediction de Dieu dans la solitude from Harmonies poétiques et religieuses"},{author:"Liszt\t",title:"Liebestraum No. 3 in A-flat, S. 541 / III"},{author:"Chopin\t",title:"Etude Op. 10 No. 12 in C minor, Revolutionary Étude"},{author:"Rachmaninov\t",title:"Prelude in C sharp Minor, Op. 3 No. 2"},{author:"Liszt\t",title:"Hungarian Rhapsody No. 2 in C sharp Minor, S.244/2"},{author:"Brahms\t",title:"Intermezzo Op. 118 No. 2 in A major"},{author:"Jarrett\t",title:"The Köln Concert"},{author:"Liszt\t",title:"Grandes études de Paganini, No. 3 in G sharp minor, La Campanella"},{author:"Chopin\t",title:"Étude Op. 10 No. 3 in E"},{author:"Liszt\t",title:"Piano Sonata in B minor, S. 178"},{author:"Debussy\t",title:"Prelude No. 8, La fille aux cheveux de lin (        The Girl with the Flaxen Hair"},{author:"Beethoven\t",title:"Sonata No. 32 in C minor, Op. 111"},{author:"Schubert\t",title:"Impromptu No. 4 in A-flat major, D. 899/Op. 90"},{author:"Bach",title:"JS\tJesu, Joy of Man's Desiring (piano transcription by Myra Hess)"},{author:"Sinding\t",title:"Rustle of Spring"},{author:"Schubert\t",title:"Fantasie in C major, Op. 15 (D. 760), Wanderer Fantasy"},{author:"Mozart\t",title:"Piano Sonata No. 11 in A major, K. 331"},{author:"Chopin\t",title:"Ballade No. 1 in G minor, Op. 23"},{author:"Grieg\t",title:"Bryllupsdag på Troldhaugen (Wedding Day at Troldhaugen)"},{author:"Chopin\t",title:"Nocturne No. 2 in E-flat major, Op. 9 No. 2"},{author:"Schumann\t",title:"Träumerei from Kinderszenen (        Scenes from        Childhood), Op. 15"},{author:"Chopin\t",title:"Polonaise in A-flat major, Op. 53, Heroic"},{author:"Beethoven\t",title:"Für Elise"},{author:"Schubert\t",title:"Fantasia in F minor for piano four hands, D. 940 Op. 103"},{author:"Chopin\t",title:"Fantaisie-Impromptu in C sharp minor, Op. 66"},{author:"Beethoven\t",title:"Piano Sonata No. 21 in C major, Op. 53, Waldstein"},{author:"Mussorgsky\t",title:"Pictures at an Exhibition"},{author:"Beethoven\t",title:"Piano Sonata No. 23 in F minor, Op. 57, Appassionata"},{author:"Schubert\t",title:"Piano Sonata No. 21 in B-flat major, D. 960"},{author:"Bach",title:"JS\tThe Well-Tempered Clavier"},{author:"Allen\t",title:"Chopsticks"},{author:"Schubert\t",title:"Impromptu No. 3 in G-flat major, D. 899/Op. 90"},{author:"Beethoven\t",title:"Piano Sonata No. 8 in C minor, Op. 13, Pathétique"},{author:"Satie\t",title:"Gymnopédies No.1"},{author:"Debussy\t",title:"Clair de lune from Suite bergamasque"},{author:"Bach",title:"JS\tGoldberg Variations"},{author:"Beethoven\t",title:"Piano Sonata No. 14 in C-sharp minor, Op. 27 No. 2, Moonlight"}]},U=function(t){t.sort(function(t,e){return t.isDone==e.isDone?t.creationDate>e.creationDate?-1:1:t.isDone?1:-1})},Y=new L["a"].Store({strict:!1,plugins:[q.plugin],state:{},getters:{getStudentById:function(t){return function(e){return H(t.students.find(function(t){return t.id===e}))}}},mutations:{reset:function(t){t.version=null},init:function(t){t&&t.version||(console.log("initialising application"),t.students=K.students,t.works=K.works,t.version=K.version);var e=1,n=!0,o=!1,a=void 0;try{for(var i,r=T()(t.works);!(n=(i=r.next()).done);n=!0){var s=i.value;s.id||(s.id=""+e),e++}}catch(u){o=!0,a=u}finally{try{n||null==r.return||r.return()}finally{if(o)throw a}}},saveStudent:function(t,e){console.log("saving student",e);var n=t.students.find(function(t){return t.id==e.id});n?B()(e).forEach(function(t){n[t]=e[t]}):t.students.push(e)},deleteStudent:function(t,e){console.log("delete student",e);var n=t.students.findIndex(function(t){return t.id==e});n>=0&&t.students.splice(n,1)},addTodo:function(t,e){console.log("addtOdo");var n=V.create();e.todos.push(n),U(e.todos)},updateTodoTask:function(t,e){console.log(e);var n=t.students.find(function(t){return t.id==e.student.id}),o=n.todos.find(function(t){return t.id==e.todo.id});o.task=e.val},updateTodoDone:function(t,e){console.log(e);var n=t.students.find(function(t){return t.id==e.student.id}),o=n.todos.find(function(t){return t.id==e.todo.id});o.isDone=e.val,U(n.todos)},setTodoPiece:function(t,e){console.log(e);var n=t.students.find(function(t){return t.id==e.student.id}),o=n.todos.find(function(t){return t.id==e.todo.id});o.piece=e.val,U(n.todos)},deleteTodo:function(t,e){var n=t.students.find(function(t){return t.id==e.student.id});n.todos.splice(e.index,1)},saveWork:function(t,e){var n=t.works.find(function(t){return t.id==e.id});n?B()(e).forEach(function(t){n[t]=e[t]}):t.works.push(e)}},actions:{}});Y.commit("init"),document.reset=function(){console.log("reset"),Y.commit("reset"),Y.commit("init")};var Z=Y,Q=function(t){function e(){var t;return Object(p["a"])(this,e),t=Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.stringFilters=["title","author","tags","genre","difficulty"],t}return Object(b["a"])(e,t),Object(O["a"])(e,[{key:"addWork",value:function(){this.$router.push("/work/new")}},{key:"stringSearch",value:function(t,e){return t[e]&&(""+t[e]).toLocaleLowerCase().includes(this.$data.search.toLocaleLowerCase())}},{key:"works",get:function(){var t=this,e=this.$data.allWorks.filter(function(e){var n=!0,o=!1,a=void 0;try{for(var i,r=T()(t.stringFilters);!(n=(i=r.next()).done);n=!0){var s=i.value;if(t.stringSearch(e,s))return!0}}catch(u){o=!0,a=u}finally{try{n||null==r.return||r.return()}finally{if(o)throw a}}return!1});return e}}]),e}(k["c"]);Q=g["a"]([Object(k["a"])({name:"WorkList",data:function(){return{search:"",allWorks:Z.state.works}}})],Q);var X=Q,tt=X,et=(n("f2c1"),Object(u["a"])(tt,N,D,!1,null,"5500148c",null)),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workviewsmall"},[n("span",[t._v(t._s(t.work.title)+", "+t._s(t.work.author))]),n("router-link",{attrs:{to:{name:"work",params:{id:t.work.id}}}},[n("font-awesome-icon",{attrs:{icon:"edit"}})],1)],1)},at=[],it=function(){function t(){Object(p["a"])(this,t),this.work=Z.state.works}return Object(O["a"])(t,[{key:"getAll",value:function(){return this.work}},{key:"getById",value:function(t){return this.work.find(function(e){return e.id===t})}},{key:"add",value:function(t){this.work.push(t)}}]),t}(),rt=new it,st=function(t){function e(){return Object(p["a"])(this,e),Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),Object(O["a"])(e,[{key:"work",get:function(){return rt.getById(this.workId)}}]),e}(k["c"]);g["a"]([Object(k["b"])()],st.prototype,"workId",void 0),st=g["a"]([Object(k["a"])({name:"WorkViewSmall"})],st);var ut=st,lt=ut,ct=(n("558b"),Object(u["a"])(lt,ot,at,!1,null,"223654f2",null)),dt=ct.exports,ht=function(t){function e(){return Object(p["a"])(this,e),Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),Object(O["a"])(e,[{key:"addWork",value:function(t){console.log("adding work",t),this.$store.commit("setTodoPiece",{student:this.student,todo:this.todo,val:t.id}),this.hideModal()}},{key:"updateTodoTask",value:function(t){this.$store.commit("updateTodoTask",{student:this.student,todo:this.todo,val:t.target.value})}},{key:"updateTodoDone",value:function(t){this.$store.commit("updateTodoDone",{student:this.student,todo:this.todo,val:t.target.value})}},{key:"showModal",value:function(){this.$refs.myModalRef.show()}},{key:"hideModal",value:function(){this.$refs.myModalRef.hide()}}]),e}(k["c"]);g["a"]([Object(k["b"])()],ht.prototype,"todo",void 0),g["a"]([Object(k["b"])()],ht.prototype,"student",void 0),ht=g["a"]([Object(k["a"])({name:"TodoView",components:{WorkList:nt,WorkViewSmall:dt}})],ht);var ft=ht,pt=ft,vt=(n("8074"),Object(u["a"])(pt,S,_,!1,null,"340cf0ce",null)),mt=vt.exports,bt=function(){function t(){Object(p["a"])(this,t)}return Object(O["a"])(t,[{key:"share",value:function(t){var e={message:this.generateMessages(t),subject:"Deine Aufgaben :)",files:["",""],chooserTitle:"Pick an app"},n=function(t){console.log("Share completed? ",t.completed),console.log("Shared to app: ",t.app)},o=function(t){console.log("Sharing failed with message: ",t)};window.plugins.socialsharing.shareWithOptions(e,n,o)}},{key:"generateMessages",value:function(t){return t.filter(function(t){return!t.isDone}).map(function(t){var e=t.task;if(t.piece){var n=rt.getById(t.piece);n&&(e+='\nDas Stück "'+n.title+'" von '+n.author+".\n",n.location&&(e+="Das findest du hier "+n.location))}return e}).join("\n")}}]),t}(),gt=new bt,kt=function(t){function e(){return Object(p["a"])(this,e),Object(v["a"])(this,Object(m["a"])(e).call(this))}return Object(b["a"])(e,t),Object(O["a"])(e,[{key:"share",value:function(){gt.share(this.student.todos)}},{key:"add",value:function(){this.$store.commit("addTodo",this.student)}},{key:"del",value:function(t){var e=this;navigator.notification.confirm('Do you really want to delete the todo?\n"'+this.student.todos[t].task+'"',function(t){1==t&&e.$store.commit("deleteTodo",{student:e.student,index:t})},"Delete Todo",["Delete","Cancel"])}},{key:"canMessage",value:function(){return this.student.todos.filter(function(t){return!t.isDone}).length>0}},{key:"todos",get:function(){return this.student.todos}}]),e}(k["c"]);g["a"]([Object(k["b"])()],kt.prototype,"student",void 0),kt=g["a"]([Object(k["a"])({components:{TodoView:mt},computed:{}})],kt);var wt=kt,yt=wt,Ot=(n("171f"),Object(u["a"])(yt,C,j,!1,null,"7643f4ca",null)),Ct=Ot.exports,jt=n("0a0d"),St=n.n(jt),_t={getStudentAge:function(t){if(t.bday){var e=JSON.parse(M()(t.bday));"string"===typeof e&&(e=new Date(e));var n=St()()-e.getTime(),o=new Date(n);return Math.abs(o.getUTCFullYear()-1970)}return-1}},Nt=_t,Dt=n("1157"),Pt=function(t){function e(){return Object(p["a"])(this,e),Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),Object(O["a"])(e,[{key:"addStudent",value:function(){this.$router.push("/student/new")}},{key:"deleteStudent",value:function(t){var e=this;navigator.notification.confirm("Do you really want to delete the student?",function(n){1==n&&e.$store.commit("deleteStudent",t)},"Delete Student",["Delete","Cancel"])}},{key:"Util",get:function(){return Nt}}],[{key:"toggleCard",value:function(t){var e="#"+t;this.jquery(e).toggle()}}]),e}(k["c"]);Pt.jquery=Dt,Pt=g["a"]([Object(k["a"])({name:"StudentList",components:{TodoList:Ct},data:function(){return{students:Z.state.students}}})],Pt);var Tt=Pt,xt=Tt,Bt=(n("235d"),Object(u["a"])(xt,w,y,!1,null,"af4f78f4",null)),$t=Bt.exports,Mt=function(t){function e(){return Object(p["a"])(this,e),Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),e}(k["c"]);Mt=g["a"]([Object(k["a"])({components:{StudentList:$t}})],Mt);var Lt=Mt,At=Lt,Et=Object(u["a"])(At,h,f,!1,null,null,null),Wt=Et.exports,Ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},zt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("Love you my Askim 😘")])])}],It={},Rt=Object(u["a"])(It,Ft,zt,!1,null,null,null),Gt=Rt.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.student.name)+t._s(t.student.age?" ("+t.student.age+")":"")+t._s(t.student.grade?", "+t.student.grade+"th":""))]),n("h2",[t._v(" Edit Student")]),n("div",{staticClass:"student-edit form-group"},[n("div",{staticClass:"student-edit-name"},[n("div",{attrs:{for:"student-edit-name-form"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.name,expression:"student.name"}],staticClass:"form-control",attrs:{id:"student-edit-name-form",type:"text"},domProps:{value:t.student.name},on:{input:function(e){e.target.composing||t.$set(t.student,"name",e.target.value)}}})]),n("div",{staticClass:"student-edit-bday"},[n("div",{attrs:{for:"student-edit-age-form"}},[t._v("Birthday")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bday,expression:"bday"}],staticClass:"form-control",attrs:{id:"student-edit-age-form",type:"date"},domProps:{value:t.bday},on:{input:function(e){e.target.composing||(t.bday=e.target.value)}}})]),n("div",{staticClass:"student-edit-grade"},[n("div",{attrs:{for:"student-edit-grade-form"}},[t._v("Grade")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.grade,expression:"student.grade"}],staticClass:"form-control",attrs:{id:"student-edit-grade-form",type:"number"},domProps:{value:t.student.grade},on:{input:function(e){e.target.composing||t.$set(t.student,"grade",e.target.value)}}})]),n("div",{staticClass:"student-edit-save"},[n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){return t.save()}}},[t._v("Save")])])])])},Vt=[],qt=function(t){function e(){return Object(p["a"])(this,e),Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),Object(O["a"])(e,[{key:"save",value:function(){this.$store.commit("saveStudent",this.student)}},{key:"util",get:function(){return Nt}},{key:"bday",get:function(){if(!this.student||!this.student.bday)return"2010-01-01";var t=JSON.parse(M()(this.student.bday));"string"===typeof t&&(t=new Date(t));var e=""+(t.getMonth()+1),n=""+t.getDate(),o=t.getFullYear();return e.length<2&&(e="0"+e),n.length<2&&(n="0"+n),[o,e,n].join("-")},set:function(t){console.log("set",t),this.student&&(this.student.bday=new Date(t))}},{key:"student",get:function(){var t=this.$route.params["id"];return t&&"new"!==t?this.$store.getters.getStudentById(this.$route.params["id"]):new W("",new Date,1)}}]),e}(k["c"]);qt=g["a"]([Object(k["a"])({name:"StudentView",components:{TodoList:Ct}})],qt);var Ht=qt,Kt=Ht,Ut=Object(u["a"])(Kt,Jt,Vt,!1,null,"386aab5c",null),Yt=Ut.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.work.title)+" ("+t._s(t.work.author)+")")]),n("h2",[t._v(" Edit Work")]),n("div",{staticClass:"work-edit form-group"},[n("div",{staticClass:"name"},[n("label",{attrs:{for:"work-edit-name-form"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.work.title,expression:"work.title"}],staticClass:"form-control",attrs:{id:"work-edit-name-form",type:"text"},domProps:{value:t.work.title},on:{input:function(e){e.target.composing||t.$set(t.work,"title",e.target.value)}}})]),n("div",{staticClass:"author"},[n("label",{attrs:{for:"work-edit-author-form"}},[t._v("Composer")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.work.author,expression:"work.author"}],staticClass:"form-control",attrs:{id:"work-edit-author-form",type:"text"},domProps:{value:t.work.author},on:{input:function(e){e.target.composing||t.$set(t.work,"author",e.target.value)}}})]),n("div",{staticClass:"location"},[n("label",{attrs:{for:"work-edit-location-form"}},[t._v("URL")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.work.location,expression:"work.location"}],staticClass:"form-control",attrs:{id:"work-edit-location-form",type:"text"},domProps:{value:t.work.location},on:{input:function(e){e.target.composing||t.$set(t.work,"location",e.target.value)}}})]),n("div",{staticClass:"difficulty"},[n("label",[t._v("Difficulty")]),n("StarRating",{attrs:{value:t.work.difficulty},on:{"difficulty-star-change":t.updateDifficulty}})],1),n("select",{directives:[{name:"model",rawName:"v-model",value:t.work.genre,expression:"work.genre"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.work,"genre",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),n("option",[t._v("Classic")]),n("option",[t._v("Pop")]),n("option",[t._v("Jazz")])])]),n("div",[n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.save}},[t._v(" Save")])])])},Qt=[],Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"star-rating"},t._l(t.ratings,function(e){return n("label",{staticClass:"star-rating__star",class:{"is-selected":t.value>=e&&null!=t.value,"is-disabled":t.disabled},on:{click:function(n){return t.set(e)},mouseover:function(n){return t.star_over(e)},mouseout:t.star_out}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"star-rating star-rating__checkbox",attrs:{type:"radio",name:t.name,disabled:t.disabled},domProps:{value:e,checked:t._q(t.value,e)},on:{change:function(n){t.value=e}}}),t._v("★")])}),0)},te=[],ee={name:"StarRating",props:{name:String,value:null,id:String,disabled:Boolean,required:Boolean},data:function(){return{temp_value:null,ratings:[1,2,3,4,5]}},methods:{star_over:function(t){if(!this.disabled)return this.temp_value=this.value,this.value=t},star_out:function(){if(!this.disabled)return this.value=this.temp_value},set:function(t){if(console.log("set",t),!this.disabled)return this.temp_value=t,this.$emit("difficulty-star-change",t),this.value=t}}},ne=ee,oe=(n("1af7"),Object(u["a"])(ne,Xt,te,!1,null,"6f4892ba",null)),ae=oe.exports,ie=function t(e){Object(p["a"])(this,t),this.id=Object(A["v4"])(),this.title=e},re=function(t){function e(){return Object(p["a"])(this,e),Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),Object(O["a"])(e,[{key:"updateDifficulty",value:function(t){console.log("change",t),this.work.difficulty=t}},{key:"save",value:function(){console.log("saving",this.work),this.$store.commit("saveWork",this.work),this.$router.push("/work/"+this.work.id)}}]),e}(k["c"]);g["a"]([Object(k["b"])()],re.prototype,"work",void 0),re=g["a"]([Object(k["a"])({name:"WorkView",components:{StarRating:ae},computed:{work:function(){if("new"===this.$route.params["id"])return console.log("adding new work"),new ie("");console.log("getting work",this.$route.params["id"]);var t=rt.getById(this.$route.params["id"]);return t?document.clone(t):new ie("")}}})],re);var se=re,ue=se,le=Object(u["a"])(ue,Zt,Qt,!1,null,null,null),ce=le.exports;o["default"].use(d["a"]);var de=new d["a"]({routes:[{path:"/",name:"home",component:Wt},{path:"/about",name:"about",component:Gt},{path:"/student/:id",name:"student",component:Yt},{path:"/works",name:"works",component:nt},{path:"/work/:id",name:"work",component:ce}]}),he=n("9483");Object(he["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("f9e3"),n("4989"),n("2dd8");var fe=n("ecee"),pe=n("c074"),ve=n("ad3d");fe["c"].add(pe["a"]),fe["c"].add(pe["b"]),fe["c"].add(pe["c"]),fe["c"].add(pe["d"]),o["default"].component("font-awesome-icon",ve["a"]),o["default"].config.productionTip=!1,new o["default"]({router:de,store:Z,render:function(t){return t(c)}}).$mount("#app"),document.addEventListener("onunload",function(t){console.log("onunload",new Date)},!1),document.addEventListener("pause",function(t){console.log("pause",new Date)},!1)},d423:function(t,e,n){},f2c1:function(t,e,n){"use strict";var o=n("85f3"),a=n.n(o);a.a},febe:function(t,e,n){}});
//# sourceMappingURL=app.fd58ed0f.js.map