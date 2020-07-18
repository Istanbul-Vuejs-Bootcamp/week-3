<template>
    <div class="child2inChild">
        child2 in child
        <br>
        <input type="text" v-model="text" /><br><br>
        <button @click="sendData">Send</button>
    </div>
</template>

<script>

    import {EventBus, EventBusListener} from "../eventBus";

    export default {
        name: "child2inChild",
        data() {
            return {
                text: ''
            }
        }, methods: {
            sendData() {
                EventBus.$emit(EventBusListener.CHILD_2_IN_CHILD_MESSAGE, this.text);
            }
        },
    }
</script>

<style scoped>
    .child2inChild {
        border: solid 1px #fff;
        background-color: lightpink;
    }
</style>
