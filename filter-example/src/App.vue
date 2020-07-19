<template>
    <div class="app">
        {{ message | hepsiBuyukHarf }}
        <br><br>
        <input type="text" v-model="amount"
               placeholder="please enter amount" />
        <br>
        Your total amount: {{ amount | amount | amountSymbolTR }}
        <br>
        Your total amount: {{ getRate | amount | amountSymbolUSD }}
    </div>
</template>

<script>
    export default {
      filters: {
          hepsiBuyukHarf(value) {
              return value.toUpperCase();
          },
          hepsiKucukHarf(value) {
              return value.toLowerCase()
          },
      },
      data() {
        return {
          message: 'Merhaba bu bir vue filter örneğidir',
          amount: 0,
        }
      },
        computed: {
          getRate() {
              //....
              return this.amount / 5;
          }
        },
    }
</script>
