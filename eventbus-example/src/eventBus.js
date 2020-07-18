import Vue from 'vue';

export const EventBus = new Vue();
export const EventBusListener = {
    CHILD_2_MESSAGE: 'CHILD_2_MESSAGE',
    CHILD_2_IN_CHILD_MESSAGE: 'CHILD_2_IN_CHILD_MESSAGE',
};
