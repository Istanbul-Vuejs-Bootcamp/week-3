<template>
    <div class="child2">
        child2
        <br>
        <input type="text" v-model="text" /><br><br>
        <button @click="sendData">Send</button>

        <div style="margin:25px;">
            <child2inChild />
        </div>



    </div>
</template>

<script>
    import child2inChild from "./child2inChild";
    import { EventBus, EventBusListener } from '../eventBus';
    export default {
        name: "child2",
        components: { child2inChild },
        data() {
            return {
                text: ''
            }
        }, methods: {
            sendData() {
                EventBus.$emit(EventBusListener.CHILD_2_MESSAGE, this.text);
            }
        },
    }
</script>

<style scoped>
    .child2 {
        border: solid 1px #fff;
        background-color: lightcyan;
    }
</style>
