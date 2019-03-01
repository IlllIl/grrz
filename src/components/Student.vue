<template>
    <div class="container">
        <h1>{{student.name}}{{student.age? ' ('+student.age+')' : '' }}{{(student.grade)?', '+student.grade+'th' : ''}}</h1>

        <h2> Edit Student</h2>
        <div class="student-edit form-group">

            <div class="student-edit-name">
                <div for="student-edit-name-form">Name</div><input class="form-control" id="student-edit-name-form" type="text"
                                                                       v-model="student.name"/>
            </div>

            <div class="student-edit-bday">
                <div for="student-edit-age-form">Birthday</div><input  class="form-control" id="student-edit-age-form" type="date"
                                                                          v-model="bday"/>
            </div>

            <div class="student-edit-grade">
                <div for="student-edit-grade-form">Grade</div><input class="form-control" id="student-edit-grade-form" type="number"
                                                                         v-model="student.grade"/>
            </div>

            <div class="student-edit-save">
                <button type="button" class="btn btn-info" v-on:click="save()">Save</button>
            </div>
        </div>
<!--

        <div class="student-todos">
        <h2>Todos</h2>
        <TodoList v-bind:student="student" ></TodoList>
        </div>
-->
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Student from '@/models/Student';
    import TodoList from '@/components/TodoList.vue';
    import util from "@/Util";

    @Component({
        name: "StudentView",
        components: {TodoList},
    })


    export default class StudentView extends Vue {

        get util (){
            return util;
        }
        get bday(){
            let bday= JSON.parse(JSON.stringify(this.student.bday));
            if( (typeof bday) === 'string'){
                bday = new Date(bday)
            }

            let  month = '' + (bday.getMonth() + 1),
                day = '' + bday.getDate(),
                year = bday.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-');

        }
        set bday(bla:any){
            console.log("set", bla)
            this.student.bday= new Date(bla)
        }

        get student(): Student | undefined {
            let param = this.$route.params['id'];
            if (!param || param ==='new') {
                return new Student("", new Date(), 1, []);
            } else {
                return this.$store.getters.getStudentById(this.$route.params['id']);
            }
        }

        save(){
            this.$store.commit('saveStudent', this.student);
        }


    }
</script>
<style scoped>

</style>