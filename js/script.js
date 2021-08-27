console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        test: 'Hello Vue',
        data: data,
        search: '',
        message: '',
        currentIndex: 0,
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
            this.data.contacts[this.currentIndex].messages.push({
                date: '10/01/2020 15:30:55',
                message: this.message,
                status: 'sent',
            })
            this.message = ''
        },
    },
});