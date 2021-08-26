console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        test: 'Hello Vue',
        user: user,
        contacts: contacts,
        search: '',
        currentIndex: 0,
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
        },
        showChat(index) {
            if (index === this.currentIndex) {
                return true;
            }
        },
        addIndex(index) {
            this.currentIndex = index;
        },
    },
});