<template>
    <div class="todo-list">
        <button class="todo-add" v-on:click="add()">+</button>
        <button class="todo-share" v-on:click="share()" :disabled="!canMessage()">Message</button>
        <ol>
            <li v-for="(todo, index) in todos">

                <TodoView v-bind:todo="todo"></TodoView>
                <span class="todo-item-delete" v-on:click="del(index)">del</span>
            </li>
        </ol>
    </div>
</template>

<script lang="ts">
    import {mapState} from "vuex";

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
            ...mapState{

            }
        }
    })
    export default class TodoList extends Vue {
        @Prop() private todos!: Todo[];


        constructor() {
            super();
            todoService.data.subscribe(() => {
                this.todos.sort((o1: Todo, o2: Todo) => {
                    if (o1.isDone == o2.isDone) {
                        return o1.creationDate > o2.creationDate ? -1 : 1;
                    } else {
                        return o1.isDone ? 1 : -1;
                    }
                });
            })
        }

        share() {
            socialService.share(this.todos);
        }

        add(): void {
            let newTodo = todoService.create();
            this.todos.push(newTodo);
            todoService.data.next();
        }

        del(index: number): void {
            navigator.notification.confirm(
                'Do you really want to delete the todo?\n\"' + this.todos[index] + '\"', // message
                (i: number) => {
                    i == 1 ? this.$delete(this.todos, index) : "";
                },            // callback to invoke with index of button pressed
                'Delete Todo',           // title
                ['Delete', 'Cancel']     // buttonLabels
            );

        }

        canMessage(): boolean{
            return this.todos.filter(value => !value.isDone).length>0
        }

    }
</script>

<style scoped>

</style>