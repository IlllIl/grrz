<template>
    <div>
    <div class="home">
        <!--<img alt="Vue logo" width="100%" src="../assets/grrz-logo.png">-->
    </div>
    <StudentList></StudentList>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import StudentList from '@/components/StudentList.vue'; // @ is an alias to /src

    @Component({
        components: {
            StudentList,
        },
    })
    export default class Home extends Vue {
    }

</script>
