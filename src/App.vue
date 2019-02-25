<template>
    <div id="app">
        <div id="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/works">Works</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about">About</router-link>
                </li>


            </ul>
        </div>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>
<script>

    export default {}
</script>
<style>
</style>
