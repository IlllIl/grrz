<template>
    <div class="cal-wrap">
        <full-calendar :config="config" :events="events"></full-calendar>

                <b-modal ref="myModalRef" hide-footer v-bind:title="student.name + 's tasks'">

                    <div v-if="student" >

                        <TodoList v-bind:student="student"></TodoList>
                    </div>
                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                </b-modal>

    </div>
</template>

<script lang="ts">
    import TodoList from "../components/TodoList";

    export default {
        name: "Calendar",
        components: {TodoList},
        methods: {
            showModal() {
                this.$refs.myModalRef.show()
            },

            hideModal() {
                this.$refs.myModalRef.hide()
            }

        },
        data() {
            let events = this.$store.getters.getEvents;

            let that = this;
            return {
                events: events.map(val => {
                    return {
                        start: val.start,
                        end: val.end,
                        dow: [val.dow],
                        title: val.title,
                        id: val.student
                    };
                }),
                config: {
                    height: 500,

                    defaultView: 'listWeek',
                    eventRender:  (event, element)=> {
                        element.click(() => {
                            this.student = that.$store.getters.getStudentById(event.id);
                            that.showModal()
                        })
                    },

                },
                student: {}

            }
        }
    }
</script>

<style scoped lang="scss">

    .fc-scroller.fc-day-grid-container {
        height: 400px;

    }


</style>