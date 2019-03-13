<template>
    <div class="cal-wrap">
        <full-calendar :config="config" :events="events"></full-calendar>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Calendar",
        data() {
            let events = this.$store.getters.getEvents;

            return {
                events: events.map(val=>{
                    let x =  {
                        start: val.start,
                        end:val.end,
                        dow:[val.dow],
                        title:val.title
                    }
                    return x;
                }),
                config: {
                    height: 500,

                    defaultView: 'listWeek',
                    eventRender: function (event, element) {
                        console.log(element)
                        element.click(()=>console.log("click"))
                    },

                },

            }
        }
    }
</script>

<style scoped lang="scss">

    .fc-scroller.fc-day-grid-container {
        height: 400px;

    }



</style>