<template>
   <div>
       <h1>{{work.name}} ({{work.author}})</h1>

       <h2> Edit Work</h2>
       <div class="work-edit">

           <div class="name">
               <label for="work-edit-name-form" >Name</label><input id="work-edit-name-form" type="text" v-model="work.name"/>
           </div>

           <div class="author">
               <label for="work-edit-author-form" >Composer</label><input id="work-edit-author-form" type="text" v-model="work.author"/>
           </div>

           <div class="location">
               <label for="work-edit-location-form" >URL</label><input id="work-edit-location-form" type="text" v-model="work.location"/>
           </div>

           <div class="difficulty">
               <label for="work-edit-difficulty-form" >Difficulty (1-10)</label><input id="work-edit-difficulty-form" type="number" v-model="work.difficulty" max="10" min="1"/>
           </div>

           <div class="genre">
               <label for="work-edit-genre-form" >Difficulty (1-10)</label><input id="work-edit-genre-form" type="text" v-model="work.genre" max="10" min="1"/>
           </div>
           <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
               <b-dropdown-item>First Action</b-dropdown-item>
               <b-dropdown-item>Second Action</b-dropdown-item>
               <b-dropdown-item>Third Action</b-dropdown-item>
               <b-dropdown-divider />
               <b-dropdown-item active>Active action</b-dropdown-item>
               <b-dropdown-item disabled>Disabled action</b-dropdown-item>
           </b-dropdown>

       </div>
   </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import workSerivce from '@/services/WorkService';
    import Work from "../../models/Work";

    @Component({
        name:"WorkView",
        computed: {
            work():Work | undefined{
                return   workSerivce.getById(this.$route.params['id']);
            }
        }
    })
    export default class WorkView extends Vue{
    }
</script>
<style scoped>

</style>