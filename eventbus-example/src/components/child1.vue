<template>
    <div class="child1">
        child1
        <p>{{ child2Message }}</p>
        <p>{{ child2InChildMessage }}</p>
    </div>
</template>

<script>
    import { EventBus, EventBusListener} from "../eventBus";

    export default {
        name: "child1",
        data() {
            return {
                child2Message: '',
                child2InChildMessage: '',
            }
        },
        created() {
            EventBus.$on(EventBusListener.CHILD_2_MESSAGE, (text)=> {
                this.child2Message = text;
            });
            EventBus.$on(EventBusListener.CHILD_2_IN_CHILD_MESSAGE, (data)=> {
                this.child2InChildMessage = data;
            });
        },
        beforeDestroy() {
            EventBus.$off();
        }


    }
</script>

<style scoped>
    .child1 {
        border: solid 1px #fff;
        background-color: lightgray;
    }
</style>
