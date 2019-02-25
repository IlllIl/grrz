<template>
    <div class="work-list">
        <h1>HI</h1>
        <div class="work-add">
            <button v-on:click="addWork()">New Work</button>
        </div>

        <ul>
            <li v-for="work in works">
                <router-link :to="{ name:'work', params:{id:work.id}}">{{work.name}}, {{work.author}}</router-link>
            </li>
        </ul>

    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TodoList from '@/components/TodoList.vue';
    import store from "@/store";
    import workService from "@/services/WorkService";
    import Work from "@/models/Work";

    @Component({
        name: "WorkList",
        components: {
            TodoList
        },
        data() {
            let works : Work[] =store.state.works;
            return {
                works: works
            }
        }
    })
    export default class WorkList extends Vue {
        addWork(): void {
            let newWork = new Work("");
            workService.add(newWork);
            this.$router.push('/work/' + newWork.id)
        }
    }
</script>

<style scoped>
</style>