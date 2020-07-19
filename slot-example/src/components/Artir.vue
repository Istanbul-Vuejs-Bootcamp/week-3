<template>
    <div>
        <p>{{ sayi }}</p>
        <button @click="sayi++">Artır</button>
    </div>
</template>

<script>
    export default {
        name: "Artir.vue",
        data() {
            return {
                sayi: 0
            }
        },
    }
</script>

<style scoped>

</style>
