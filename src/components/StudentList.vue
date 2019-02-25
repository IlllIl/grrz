<template>
    <div class="student-list">
        <div class="row">
            <h1>Students </h1>

            <span class="student-add" v-on:click="addStudent()">
              <font-awesome-icon icon="plus"></font-awesome-icon>
            </span>
        </div>
        <div class="accordion" id="students-example">
            <div class="row card collapsed" v-for="student in students">
                <div class="card-header " v-on:click="toggle(student.id)">
                    <h5 class="mb-0">
                        <span class="">
                            {{student.name}}, ({{student.age}})
                        </span>
                        <span class="student-edit">
                            <router-link :to="{ name:'student', params:{id:student.id}}">
                                <font-awesome-icon icon="edit"/>
                            </router-link>
                        </span>
                    </h5>
                </div>


                <div class="card-body" style="display: none" v-bind:id="student.id" data-parent="#students-example">
                    <TodoList v-bind:todos="student.todos"></TodoList>
                </div>

            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TodoList from '@/components/TodoList.vue';
    import store from "../store";
    import Student from "../models/Student";
    import studentService from "../services/StudentService";
    import * as $ from 'jquery';

    @Component({
        name: "StudentList",
        components: {
            TodoList
        },
        data() {
            return {
                students: store.state.students
            }
        }
    })
    export default class StudentList extends Vue {
        addStudent(): void {
            let newStudent = new Student("", new Date(), 1, []);
            studentService.add(newStudent);
            this.$router.push('/student/' + newStudent.id)
        }

        toggle(id: string): void {
            $('#' + id).toggle()
        }
    }
</script>

<style scoped>
    .student-edit {
        float: right;
    }

    .student-add {
        float: right;
        text-align: right;
    }
</style>