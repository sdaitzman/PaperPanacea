<template>
    <div id="app">
        Hello {{name}}!
        <Camera></Camera>
    </div>
</template>

<script>
import Camera from "./components/Camera.vue"

export default {
    components: {Camera},
    data() {
        return {
            bundler: "Parcel",
            name: window.prompt('What is your name?')
        };
    }
}
</script>

<style>
div {
    color: red;
}
</style>
