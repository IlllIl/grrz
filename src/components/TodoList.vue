<template>
    <div class="todo-list form-group">
        <button class=" btn btn-info todo-add" v-on:click="add()">Add todo</button>
        <button class=" btn btn-info todo-share" v-on:click="share()" :disabled="!canMessage()">Message</button>
        <div>
            <div v-for="(todo, index) in todos">

                <TodoView v-bind:todo="todo" v-bind:student="student">
                    <!-- Slot content-->
                    <span class="todo-item-delete" v-on:click="del(index)"> <font-awesome-icon icon="trash-alt"/></span>

                </TodoView>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Student from "../models/Student";
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TodoView from '@/components/TodoView.vue';
    import socialService from "@/services/SocialService";

    declare var navigator: any;


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
.todo-share{
    float: right;
}
</style>