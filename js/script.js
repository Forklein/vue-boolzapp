console.log('Vue is activated', Vue);
Vue.config.devtools = true;

//# PLUGIN DAYJS
dayjs.extend(dayjs_plugin_customParseFormat);

const app = new Vue({
    el: '#app',
    data: {
        test: 'Hello Vue',
        data: data,
        search: '',
        searchChat: '',
        message: '',
        searchChatMessage: false,
        currentIndex: 0,
        cpuMessage: ['Ok', 'Vabene', 'Non lo so', 'Forse più tardi', 'Sto andando a mangiare']
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
        userOrCpu(status) {
            if (status === 'sent') {
                return 'ms-auto bg-user'
            } else {
                return 'me-auto bg-cpu'
            }
            /* status === 'sent' ? 'ms-auto bg-user' : 'me-auto bg-cpu'; */
        },
        addList() {
            this.data.contacts[this.currentIndex].messages.push({
                date: dayjs().format('DD/MM/YY HH:mm:ss'),
                message: this.message,
                status: 'sent',
            })
            setTimeout(() => {
                this.data.contacts[this.currentIndex].messages.push({
                    date: dayjs().format('DD/MM/YY HH:mm:ss'),
                    message: this.cpuMessage[this.randomNumber(this.cpuMessage.length - 1, 0)],
                    status: 'received',
                })
            }, 1000)
            this.message = ''
        },
        showSearchChat() {
            this.searchChatMessage = !this.searchChatMessage;
        },
        showChatMessage(message) {
            if (!this.searchChat) {
                return true;
            }
            if (message.toLowerCase().includes(this.searchChat.trim().toLowerCase())) {
                return true;
            }
        }
    },
});