<template>
    <div id="app">
        <router-view></router-view>
        <Navigation></Navigation>
        <span>kamsdmsad</span>
    </div>
</template>

<script>

import Navigation from './components/Navigation'
export default {
    name: 'app',
    components: {
        'Navigation': Navigation
    },
    data() {
        return {
            bundler: "Parcel"
        };
    }
}
</script>

<style>
div {
    color: red;
}
</style>