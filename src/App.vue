<template>
    <h1>{{ greeting }}</h1>
</template>

<script>
export default {
    data: function () {
        return {
            greeting: 'Hello World!'
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>