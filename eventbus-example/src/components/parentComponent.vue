<template>
    <div class="parent">
        Parent
       <div style="margin: 25px 25px 25px 25px;"><child1 /></div>
       <div style="margin: 25px 25px 25px 25px;"><child2 /></div>
    </div>
</template>

<script>
    import child1 from './child1.vue';
    import child2 from './child2.vue';
    import {EventBus, EventBusListener} from "../eventBus";
    export default {
        name: "parentComponent",
        components: {
            child1,
            child2,
        },
        created() {
            EventBus.$on(EventBusListener.CHILD_2_IN_CHILD_MESSAGE, (message)=> {
                console.log(message);
            })
        }
    }
</script>

<style scoped>
    .parent {
        border: solid 1px #ccc;
        background-color: cadetblue;
    }
</style>
