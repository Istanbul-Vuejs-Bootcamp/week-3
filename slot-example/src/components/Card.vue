<template>
    <div class="card">
        <slot></slot>
        <hr>
        <slot name="title"></slot>
        <slot name="component"></slot>
        <slot name="message"></slot>
    </div>
</template>

<script>
    export default {
        name: "Card",

    }
</script>

<style scoped>
 .card {
     width: 500px;
     margin: auto;
     border: solid 2px #ccc;
     padding: 5px 5px;
 }
</style>
