<template>
    <div class="app">
        <myComponent1 />
        <br>
        <hr>
        <br>
        <myComponent2 />
    </div>
</template>

<script>
    import myComponent1 from "./components/myComponent1";
    import myComponent2 from "./components/myComponent2";
    export default {
        components: {
            myComponent1,
            myComponent2
        }

    }
</script>

<style scoped>

</style>
