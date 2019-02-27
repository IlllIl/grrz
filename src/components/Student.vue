<template>
    <div class="container">
        <h1>{{student.name}}{{student.age? ' ('+student.age+')' : '' }}{{(student.grade)?', '+student.grade+'th' : ''}}</h1>

        <h2> Edit Student</h2>
        <div class="student-edit">

            <div class="student-edit-name">
                <div for="student-edit-name-form">Name</div><input id="student-edit-name-form" type="text"
                                                                       v-model="student.name"/>
            </div>

            <div class="student-edit-bday">
                <div for="student-edit-age-form">Birthday</div><input id="student-edit-age-form" type="date"
                                                                          v-model="student.bdayString"/>
            </div>

            <div class="student-edit-grade">
                <div for="student-edit-grade-form">Grade</div><input id="student-edit-grade-form" type="number"
                                                                         v-model="student.grade"/>
            </div>

            <div student-edit-save>
                <button type="button" class="btn btn-info" v-on:click="save()">Save</button>
            </div>
        </div>

        <h2>Todos</h2>
        <TodoList v-bind:todos="student.todos" v-bind:ownerId="student.id"></TodoList>

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
        },
        methods:{
        }
    })
    export default class StudentView extends Vue {
        get student(): Student | undefined {
            let param = this.$route.params['id'];
            if (!param || param ==='new') {
                return new Student("", new Date(), 1, []);
            } else {
                return this.$store.getters.getStudentById(this.$route.params['id']);
            }
        }

        save(){
            console.log(this.student);
            this.$store.commit('saveStudent', this.student);
        }


    }
</script>
<style scoped>

</style>