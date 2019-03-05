<template>
    <div>
        <h1>{{work.title}} ({{work.author}})</h1>

        <h2> Edit Work</h2>
        <div class="work-edit form-group">

            <div class="name">
                <label for="work-edit-name-form">Name</label>
                <input id="work-edit-name-form" class="form-control" type="text" v-model="work.title"/>
            </div>

            <div class="author">
                <label for="work-edit-author-form">Composer</label>
                <input id="work-edit-author-form" class="form-control" type="text" v-model="work.author"/>
            </div>

            <div class="location">
                <label for="work-edit-location-form">URL</label>
                <input id="work-edit-location-form" class="form-control" type="text" v-model="work.location"/>
            </div>

            <div class="difficulty">
                <label>Difficulty</label>
                <StarRating  v-bind:value="work.difficulty" v-on:difficulty-star-change="updateDifficulty"></StarRating>
            </div>

            <select class="form-control" v-model="work.genre">
                <option disabled value="">Please select one</option>
                <option>Classic</option>
                <option>Pop</option>
                <option>Jazz</option>
            </select>

        </div>
        <div>
            <button class="btn btn-info" type="button" @click="save"> Save</button>
        </div>
    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import StarRating from '@/components/help/StartRating.vue';
    import workSerivce from '@/services/WorkService';
    import Work from "../../models/Work";

    declare var document: any;

    @Component({
        name: "WorkView",
        components: {StarRating},
        computed: {
            work(): Work | undefined {
                if (this.$route.params['id'] === 'new') {
                    console.log("adding new work");
                    return new Work("")
                } else {
                    console.log("getting work", this.$route.params['id']);
                    let x = workSerivce.getById(this.$route.params['id']);
                    if (x) {
                        return document.clone(x)
                    } else {
                        return new Work("");
                    }

                }
            }
        }
    })
    export default class WorkView extends Vue {

        @Prop() work: Work;

        updateDifficulty(e: any){
            console.log("change", e);
            this.work.difficulty= e;
        }

        save() {
            console.log("saving", this.work);
            this.$store.commit('saveWork', this.work);
            this.$router.push('/work/' + this.work.id)
        }
    }
</script>
