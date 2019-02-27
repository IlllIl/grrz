<template>
    <div>
        <input type="checkbox" :checked="todo.isDone" @input="updateTodoDone" :disabled="todo.isDone"/>
        <input type="text" :value="todo.task" @input="updateTodoTask" :disabled="todo.isDone"/>
        <button :disabled="todo.isDone"><font-awesome-icon icon="music"/></button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Todo from "../models/Todo";
    import Student from "../models/Student";

    @Component({

        name: "TodoView",
    })
    export default class TodoView extends Vue {

        @Prop() private todo!: Todo;

        @Prop() private student!: Student;

        updateTodoTask (e) {
            this.$store.commit('updateTodoTask', {
                student: this.student,
                todo: this.todo,
                val: e.target.value
            })

        }
        updateTodoDone (e) {
            this.$store.commit('updateTodoDone', {
                student: this.student,
                todo: this.todo,
                val: e.target.value
            })

        }

    }
</script>

<style scoped>

</style>