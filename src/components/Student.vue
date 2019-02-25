<template>
    <div>
        <h1>{{student.name}} ({{student.age}}), {{student.grade}}th</h1>

        <h2> Edit Student</h2>
        <div class="student-edit">

            <div class="student-edit-name">
                <label for="student-edit-name-form">Name</label><input id="student-edit-name-form" type="text"
                                                                       v-model="student.name"/>
            </div>

            <div class="student-edit-bday">
                <label for="student-edit-age-form">Birthday</label><input id="student-edit-age-form" type="date"
                                                                          v-model="student.bdayString"/>
            </div>

            <div class="student-edit-grade">
                <label for="student-edit-grade-form">Grade</label><input id="student-edit-grade-form" type="number"
                                                                         v-model="student.grade"/>
            </div>

            <div student-edit-save>
                <button type="button" class="btn btn-block" v-on:click="save()">Save</button>
            </div>
        </div>

        <h2>Todos</h2>
        <TodoList v-bind:todos="student.todos"></TodoList>

    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Student from '@/models/Student';
    import TodoList from '@/components/TodoList.vue';

    @Component({
        name: "StudentView",
        components: {TodoList},
        computed: {
            student(): Student | undefined {
                let param = this.$route.params['id']
                if (!param || param ==='new') {
                    return new Student("", new Date(), 1, []);
                } else {
                    return this.$store.getters.getStudentById(this.$route.params['id']);
                }
            }
        },
        methods:{
            save(){
                console.log(this.student);
                this.$store.commit('saveStudent', this.student);
            }
        }
    })
    export default class StudentView extends Vue {


    }
</script>
<style scoped>

</style>