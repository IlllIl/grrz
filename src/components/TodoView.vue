<template>
    <div>
        <input v-on:change="update()" type="checkbox" v-model="todo.isDone" :disabled="todo.isDone"/>
        <input type="text" v-model="todo.task" :disabled="todo.isDone"/>
        <button :disabled="todo.isDone"><font-awesome-icon icon="music"/></button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Todo from "../models/Todo";
    import todoService from "../services/TodoService";

    @Component({

        name: "TodoView",
    })
    export default class TodoView extends Vue {

        @Prop() private todo!: Todo;

        update(){
            console.log(this.todo.isDone);
            todoService.data.next()
        }
    }
</script>

<style scoped>

</style>