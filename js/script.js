new Vue({
    el: '#app',
    data: {
        result: '',
        numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'],
        operations: ['/', '*', '-', '+']
    },
    methods: {
        reset: function() {
            this.result = '';
        },
        inputBox: function(value) {
            this.result = this.result + value;
        },
        calculation: function() {
            this.result = eval(this.result)
        }
    }
})
