<template>
   <div class="workviewsmall">
       <span>{{work.title}}, {{work.author}}</span>
       <router-link :to="{ name:'work', params:{id:work.id}}"><font-awesome-icon icon="edit"></font-awesome-icon></router-link>
    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import workSerivce from '@/services/WorkService';
    import Work from "../../models/Work";

    @Component({
        name:"WorkViewSmall",

        computed: {
            work():Work | undefined{
                return   workSerivce.getById(this.workId);
            }
        }
    })
    export default class WorkView extends Vue{
        @Prop() workId : string
    }
</script>
<style scoped>
    .workviewsmall{
        display: inherit;
    }
</style>