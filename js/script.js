console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        test: 'Hello Vue',
        user: user,
        contacts: contacts,
    },
    methods: {},
});