<template>
    <div id="app" class="container">

        <nav class="navbar navbar-expand-lg navbar-light">
            <router-link class="navbar-brand" to="/">GRRZ</router-link>
            <!--
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
            -->
            <div class="nav-line">
                <!--<router-link to="/" class="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span>-->
                <!--</router-link>-->
                <router-link to="/works" class="nav-link nav-item" href="#">Works</router-link>
                <router-link to="/about" class="nav-link nav-item" href="#">About</router-link>
            </div>
        </nav>

        <button @click="bla">FIKE</button>
        <div class="container">
            <router-view/>
        </div>
        <footer class="page-footer font-small blue">
            <div class="container"></div>
        </footer>
    </div>
</template>
<script>
    export default {
        methods: {
            bla() {
                var createCalOptions = window.plugins.calendar.getCreateCalendarOptions();
                createCalOptions.calendarName = "My Cal Name";
                createCalOptions.calendarColor = "#FF0000"; // an optional hex color (with the # char), default is null, so the OS picks a color

                window.plugins.calendar.createCalendar("calendarName", success => console.log("success", success), error => console.log("error", error));

                window.plugins.calendar.listCalendars(success => console.log("success", success), error => console.log("error", error));

            }

        }
    }
</script>
<style lang="scss">
    footer .container {
        height: -webkit-fill-available;
    }

    nav {
        background-color: burlywood;
        a {
            color: black;
        }
        .nav-line .nav-item {
            display: inline;
        }
        .router-link-active {
            font-weight: bold;
            color: #007bff;
        }
    }

    .container {
        background-color: antiquewhite;
    }

    #app {
        border-radius: 5px;
        .card {
            background-color: bisque;
            .card-body {
                background-color: #fff1e0;
            }
        }
        .modal-content {
            background-color: linen;
        }

    }
</style>
