<template>
    <div class="app">
        <Card>
            <Artir />
        </Card>
        <br>
        <Card>
            default slot
            <h1 slot="title">Merhaba</h1>
            <span slot="message">Bu bir mesaj</span>
            <Artir slot="component" />
        </Card>
        <br>

        <Artir />

    </div>
</template>

<script>
    import Card from "./components/Card";
    import Artir from "./components/Artir";

    export default {
        components: { Card, Artir }

    }
</script>

<style scoped>

</style>
