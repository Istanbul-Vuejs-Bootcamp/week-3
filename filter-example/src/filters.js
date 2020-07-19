import Vue from "vue";

Vue.filter(
    'amountSymbolTR', (value) => {
        return `${value} TL`;
    });

Vue.filter(
    'amountSymbolUSD', (value) => {
        return `$${value}`;
    });

Vue.filter(
    'amount', (value) => {
        return `${value}.00`;
    }
)
