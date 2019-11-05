<template>
    <div id="app">
        Hello {{name}}!
    </div>
</template>

<script>


export default {
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