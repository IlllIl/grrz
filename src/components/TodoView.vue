<template>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" :checked="todo.isDone" @change="updateTodoDone"
               :disabled="todo.isDone"/>
        <input class="form-control" type="text" :value="todo.task" @input="updateTodoTask" :disabled="todo.isDone"/>
        <div class="piece">
            <span class="show-piece" v-if="todo.piece">
                <WorkViewSmall v-bind:workId="todo.piece"></WorkViewSmall>
            </span>
            <span v-else>
                -
            </span>
            <span>
                <button class="btn" v-if="!todo.isDone" @click="showModal">
                    <font-awesome-icon icon="music"/>
                 </button>
            </span>
        </div>
        <b-modal ref="myModalRef" hide-footer title="Choose a piece">
            <WorkList>
                <template scope="workscope">
                    <button class="btn-info" @click="addWork(workscope.work)">+</button>
                </template>
            </WorkList>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Todo from "../models/Todo";
    import Student from "../models/Student";
    import WorkList from "./work/WorkList.vue";
    import WorkViewSmall from "./work/WorkViewSmall.vue";

    @Component({

        name: "TodoView",
        components: {
            WorkList,
            WorkViewSmall
        },
    })
    export default class TodoView extends Vue {

        @Prop() private todo!: Todo;

        @Prop() private student!: Student;

        $refs : any;
        addWork(e) {
            console.log('adding work', e);
            this.$store.commit('setTodoPiece', {
                student: this.student,
                todo: this.todo,
                val: e.id
            });
            this.hideModal()
        }

        updateTodoTask(e) {
            console.log("updateTodoTask",(e))
            this.$store.commit('updateTodoTask', {
                student: this.student,
                todo: this.todo,
                val: e.target.value
            })

        }

        updateTodoDone(e) {
            console.log("updateTodoDone",(e))
            this.$store.commit('updateTodoDone', {
                student: this.student,
                todo: this.todo,
                val: e.target.value
            })
        }

        showModal() {
            this.$refs.myModalRef.show()
        }

        hideModal() {
            this.$refs.myModalRef.hide()
        }

    }
</script>

<style scoped>

    .show-piece {
        display: inline;
    }

</style>