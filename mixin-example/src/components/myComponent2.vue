<template>
    <div>
        {{ message }}
        <h2 v-if="isShow">Bu yeni bir component</h2>
        <button @click="isShow=!isShow">{{ buttonText }}</button>
    </div>
</template>

<script>
    import myMixins from "../myMixins";
    export default {
        mixins: [myMixins],
        name: "myComponent2",
        mounted() {
            this.message = 'Message has been changed';
        },
    }
</script>

<style scoped>

</style>
