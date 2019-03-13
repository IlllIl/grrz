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


            <div class="event">
                <div>
                    <span>begin</span><input v-model="event.start" title="begin" type="time"/>
                </div>

                <div>
                    <span>end</span><input v-model="event.end" title="end" type="time"/>
                </div>

                <div>
                    <select v-model="event.dow">
                        <option selected>Select Weekday</option>
                        <option value="0">Monday</option>
                        <option value="1">Tuesday</option>
                        <option value="2">Wednesday</option>
                        <option value="3">Thursday</option>
                        <option value="4">Friday</option>
                        <option value="5">Saturday</option>
                        <option value="6">Sunday</option>
                    </select>
                </div>
            </div>



            <div class="student-edit-save">
                <button type="button" class="btn btn-info" v-on:click="save()">Save</button>
            </div>


        </div>
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
        data(){
            let param = this.$route.params['id'];
            let student;
            if (!param || param ==='new') {
                student = new Student("", new Date(), 1);
            } else {
                student =this.$store.getters.getStudentById(this.$route.params['id']);
            }
            console.log("edit student", student);

            let event = this.$store.getters.getEventForStudent(student.id);
            console.log("found event", event);
            return{
                event: event,
                student: student
            }
        }
    })


    export default class StudentView extends Vue {
        event:any;
        student:Student;

        get util (){
            return util;
        }
        get bday(){
            if(!this.student || !this.student.bday){
                return "2010-01-01"
            }
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
            if(this.student){
                this.student.bday= new Date(bla)
            }
        }

        save(){

            this.$store.commit('saveStudent', this.student);
            if(this.event.start && this.event.end && this.event.dow){
                console.log('saving event' ,this.event);
                this.$store.commit('setEventForStudent',  {
                    event:this.event,
                    student:this.student
                });
            }

            this.$router.push("/")
        }


    }
</script>
<style scoped>

</style>