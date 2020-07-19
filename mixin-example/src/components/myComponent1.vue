<template>
    <div>
         {{ message }}
         <br>
        {{ message2 }}
        <h1 v-if="isShow">Merhaba</h1>
        <br>
        <button @click="isShow = !isShow" >
            {{ buttonText}}
        </button>
    </div>
</template>

<script>
    import myMixins from "../myMixins";
    export default {
        mixins: [myMixins],
        name: "myComponent1",
        data() {
            return {
                message2: 'Bu yeni bir mesaj'
            }
        },
        created() {
            console.log('my component 1 created')
        }
    }
</script>

<style scoped>

</style>
