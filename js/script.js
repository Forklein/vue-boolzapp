console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        test: 'Hello Vue',
        user: user,
        contacts: contacts,
        search: '',
        message: '',
        currentIndex: 0,
        chat: ["Ciao", "Come stai?"],
        chatCpu: ["Si", "No", "Non lo so", "Assolutamente si"],
    },
    methods: {
        randomNumber(max, min) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
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
        addList() {
            this.chat.push(this.message.trim());
            this.message = '';
        },
    },
});