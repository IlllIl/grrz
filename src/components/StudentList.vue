<template>
    <div class="student-list">
        <div class="row">
            <h1>Students
                <span class="student-add" v-on:click="addStudent()">
             +
            </span>
            </h1>

        </div>
        <div class="accordion" id="students-example">
            <div class="row card collapsed" v-for="student in students">
                <div class="card-header " v-on:click="toggleCard(student.id)">
                    <h5 class="mb-0">
                        <span class="">
                            {{student.name}}, ({{Util.getStudentAge(student)}})
                        </span>
                        <span class="student-edit">
                            <router-link :to="{ name:'student', params:{id:student.id}}">
                                <font-awesome-icon icon="edit"/>
                            </router-link>
                        </span>
                    </h5>
                </div>


                <div class="card-body" style="display: none" v-bind:id="student.id" data-parent="#students-example">
                    <TodoList v-bind:student="student"></TodoList>
                    <span class="student-delete">
                            <button type="button" v-on:click="deleteStudent(student.id)">
                                <font-awesome-icon icon="trash-alt"/>
                            </button>
                        </span>

                </div>

            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TodoList from '@/components/TodoList.vue';
    import store from "@/store";
    import util from "@/Util";
    import * as $ from 'jquery';

    declare var navigator: any;

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
            this.$router.push('/student/new')
        }

        get Util(){{
            return util;
        }}
        toggleCard(id: string): void {
            $('#' + id).toggle()
        }

        deleteStudent(id: string): void {
            navigator.notification.confirm(
                'Do you really want to delete the student?', // message
                (i: number) => {
                    i == 1 ? this.$store.commit('deleteStudent', id) : "";
                },            // callback to invoke with index of button pressed
                'Delete Student',           // title
                ['Delete', 'Cancel']     // buttonLabels
            );
        }
    }
</script>

<style scoped>
    .student-edit {
        float: right;
    }
    h1{
        width: 100%;
    }
    .student-add {
        float: right;
        text-align: right;
    }
</style>