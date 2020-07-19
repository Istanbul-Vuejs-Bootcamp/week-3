const myMixins = {
    data() {
        return {
            isShow: true,
            message: 'Mixin is here!!!'
        }
    },
    computed: {
        buttonText() {
            return this.isShow ? 'Hide' : 'Show';
        }
    },
    created() {
        console.log('created is here');
    }
}

export default myMixins;
