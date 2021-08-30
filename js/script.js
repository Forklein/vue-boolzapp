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
        editChat: false,
        writeChat: false,
        currentIndex: 0,
        currentIndexChat: 0,
        day: 'ieri',
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
            this.editChat = false;
            this.writeChat = false;
        },
        userOrCpu(status) {
            if (status === 'sent') {
                return 'ms-auto bg-user';
            } else {
                return 'me-auto bg-cpu';
            }
            /* status === 'sent' ? 'ms-auto bg-user' : 'me-auto bg-cpu'; */
        },
        addList() {
            if (!this.message) return;
            this.data.contacts[this.currentIndex].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.message,
                status: 'sent',
            })
            this.writeChat = true;
            setTimeout(() => {
                this.data.contacts[this.currentIndex].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: this.cpuMessage[this.randomNumber(this.cpuMessage.length - 1, 0)],
                    status: 'received',
                })
                this.writeChat = false;
            }, 2000);
            this.message = '';
            const newObject = this.data.contacts.map((element, index) => {
                if (index === this.currentIndex) {
                    element.access = dayjs().format('HH:mm');
                }
                return element;
            })
            this.day = 'oggi';
            this.addList.contacts = newObject;
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
        },
        editMessage(i) {
            this.editChat = !this.editChat;
            this.currentIndexChat = i;
        },
        clearMessage(i) {
            this.data.contacts[this.currentIndex].messages.splice(i, 1);
            this.editChat = !this.editChat;
        }
    },
});