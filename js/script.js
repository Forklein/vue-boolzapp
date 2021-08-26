console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        test: 'Hello Vue',
        user: user,
        contacts: contacts,
        search: '',
        chat: ["Ciao", "Come stai?"],
    },
    methods: {
        showItem(contact) {
            if (!this.search) {
                return true;
            }
            if (contact.toLowerCase().includes(this.search.trim().toLowerCase())) {
                return true;
            }
        }

    },
});