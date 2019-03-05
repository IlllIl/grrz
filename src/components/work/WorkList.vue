<template>
    <div class="">
        <h1>Works</h1>
        <div class="work-add">
            <button class="btn btn-info" v-on:click="addWork()">New Work</button>
        </div>
        <div>
            <h2>Worksearch</h2>
            <input type="text" v-model="search"/>
        </div>

        <div>
            <div v-for="work in works" class="work-list">
                <div class="work-piece">
                    <span class="title">{{work.title}}</span>, <span class="author">{{work.author}}</span>
                </div>
                <div class="work-actions">
                    <router-link :to="{ name:'work', params:{id:work.id}}">
                        <font-awesome-icon icon="edit"></font-awesome-icon>
                    </router-link>

                    <slot v-bind:work="work"></slot>
                </div>
            </div>
        </div>

    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import store from "@/store";
    import Work from "@/models/Work";

    @Component({
        name: "WorkList",
        data() {
            return {
                search: '',
                allWorks: store.state.works
            }
        }
    })
    export default class WorkList extends Vue {
        $data: any;

        private stringFilters: string[] = ['title', 'author', 'tags', 'genre', 'difficulty'];

        addWork(): void {
            this.$router.push('/work/' + 'new')
        }


        get works() {
            let filtered = this.$data.allWorks.filter((work: any) => {
                for (let filter of this.stringFilters) {
                    if (this.stringSearch(work, filter)) {
                        return true;
                    }
                }
                return false;
            });
            return filtered;
        }

        private stringSearch(work: any, key: string): boolean {
            return work[key] && (/*String cast*/'' + work[key]).toLocaleLowerCase().includes(this.$data.search.toLocaleLowerCase());
        }
    }
</script>

<style scoped>
    .work-list {
        background: #f3ebe2;
        border-radius: 5px;
        padding-left: 10px;
        margin-bottom: 10px;
    }

    .work-list:nth-child(odd) {
        background: #bfad95;
    }
    .work-actions{
        display: inline;
        float: right;
    }
    .work-piece{
        display: inline;
    }


    .title {
        font-family: sans-serif;
    }

    .author {
        font-weight: bold;
    }
</style>