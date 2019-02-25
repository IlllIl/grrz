<template>
   <div>
       <h1>{{student.name}} ({{student.age}}), {{student.grade}}th</h1>

       <h2> Edit Student</h2>
       <div class="student-edit">

           <div class="student-edit-name">
               <label for="student-edit-name-form" >Name</label><input id="student-edit-name-form" type="text" v-model="student.name"/>
           </div>

           <div class="student-edit-bday">
               <label for="student-edit-age-form" >Birthday</label><input id="student-edit-age-form" type="date" v-model="student.bdayString"/>
           </div>

           <div class="student-edit-grade">
               <label for="student-edit-grade-form" >Grade</label><input id="student-edit-grade-form" type="number" v-model="student.grade"/>
           </div>
       </div>
       <h2>Todos</h2>
       <TodoList v-bind:todos="student.todos"></TodoList>

   </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Student from '@/models/Student';
    import studentService from '@/services/StudentService';
    import TodoList from '@/components/TodoList.vue';

    @Component({
        name:"StudentView",
        components: {TodoList},
        computed: {
            student():Student | undefined{
                return   studentService.getById(this.$route.params['id']);
            }
        }
    })
    export default class StudentView extends Vue{
    }
</script>
<style scoped>

</style>