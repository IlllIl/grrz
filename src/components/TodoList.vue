<template>
    <div class="todo-list">
        <button class="todo-add" v-on:click="add()">+</button>
        <button class="todo-share" v-on:click="share()" :disabled="!canMessage()">Message</button>
        <ol>
            <li v-for="(todo, index) in todos">

                <TodoView v-bind:todo="todo" v-bind:student="student"></TodoView>
                <span class="todo-item-delete" v-on:click="del(index)">del</span>
            </li>
        </ol>
    </div>
</template>

<script lang="ts">
    import Student from "../models/Student";

    declare var navigator: any;
    import {Vue, Prop, Component} from 'vue-property-decorator';
    import TodoView from '@/components/TodoView.vue';
    import Todo from "@/models/Todo";
    import todoService from "@/services/TodoService";
    import socialService from "@/services/SocialService";


    @Component({
        components: {
            TodoView
        },
        computed:{
        }
    })
    export default class TodoList extends Vue {
        @Prop() private student: Student;

        get todos(){
            return this.student.todos
        }
        constructor() {
            super();
        }

        share() {
            socialService.share(this.student.todos);
        }

        add(): void {
            this.$store.commit('addTodo', this.student)
            // todoService.data.next();
        }

        del(index: number): void {
            navigator.notification.confirm(
                'Do you really want to delete the todo?\n\"' + this.student.todos[index].task + '\"', // message
                (i: number) => {
                    i == 1 ? this.$store.commit('deleteTodo', {student: this.student, index: i}) : "";
                },            // callback to invoke with index of button pressed
                'Delete Todo',           // title
                ['Delete', 'Cancel']     // buttonLabels
            );

        }

        canMessage(): boolean{
            return this.student.todos.filter(value => !value.isDone).length>0
        }

    }
</script>

<style scoped>

</style>