var data = {
    name: 'Coll'
}

Vue.component('greeting', {
    template:'<p>Hello i am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
    data: function() {
        return data
    },
    methods: {
        changeName: function(){
            this.name = 'Nam';
        }
    }
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
