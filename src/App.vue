<template>
    <div id="app">
        <Navigation></Navigation>
        <router-view></router-view>
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


</style>