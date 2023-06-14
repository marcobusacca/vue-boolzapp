"use strict";

// RICHIAMO FUNZIONE CREATE_APP DA VUE.JS
const {createApp} = Vue;

// FUNZIONE CREATE_APP
createApp({
    // FUNZIONE DATA CON OGGETTO RETURN
    data(){
        return{
            // DEFINIZIONE VARIABILI VUE.JS

            // INDEX CHAT ATTIVA
            activeChat  : 0,

            // INPUT TEXT INVIA MESSAGGIO
            userMessage : '',

            // INPUT TEXT BARRA RICERCA CONTATTO
            userSearch  : '',

            // OGGETTO PER MESSAGE DROPDOWN
            messageDropdown: {
                index   : 0,
                show    : false,
            },

            // USER DATA OBJECT
            userData: {
                name    : 'Sofia',
                avatar  : './img/avatar_io.jpg'
            },

            // CONTACTS ARRAY
            contacts: [
                {
                    // CONTACT INFO
                    name    : 'Michele',
                    avatar  : './img/avatar_1.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date    : '10/01/2020 15:30:55',
                            message : 'Hai portato a spasso il cane?',
                            status  : 'sent'
                        },
                        {
                            date    : '10/01/2020 15:50:00',
                            message : 'Ricordati di stendere i panni',
                            status  : 'sent'
                        },
                        {
                            date    : '10/01/2020 16:15:22',
                            message : 'Tutto fatto!',
                            status  : 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Fabio',
                    avatar  : './img/avatar_2.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date    : '20/03/2020 16:30:00',
                            message : 'Ciao come stai?',
                            status  : 'sent'
                        },
                        {
                            date    : '20/03/2020 16:30:55',
                            message : 'Bene grazie! Stasera ci vediamo?',
                            status  : 'received'
                        },
                        {
                            date    : '20/03/2020 16:35:00',
                            message : 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status  : 'sent'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Samuele',
                    avatar  : './img/avatar_3.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date    : '28/03/2020 10:10:40',
                            message : 'La Marianna va in campagna',
                            status  : 'received'
                        },
                        {
                            date    : '28/03/2020 10:20:10',
                            message : 'Sicuro di non aver sbagliato chat?',
                            status  : 'sent'
                        },
                        {
                            date    : '28/03/2020 16:15:22',
                            message : 'Ah scusa!',
                            status  : 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Alessandro B.',
                    avatar  : './img/avatar_4.jpg',

                    // CONTACT MESSAGES ARRAY          
                    messages: [
                        {
                            date    : '10/01/2020 15:30:55',
                            message : 'Lo sai che ha aperto una nuova pizzeria?',
                            status  : 'sent'
                        },
                        {
                            date    : '10/01/2020 15:50:00',
                            message : 'Si, ma preferirei andare al cinema',
                            status  : 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Alessandro L.',
                    avatar  : './img/avatar_5.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date    : '10/01/2020 15:30:55',
                            message : 'Ricordati di chiamare la nonna',
                            status  : 'sent'
                        },
                        {
                            date    : '10/01/2020 15:50:00',
                            message : 'Va bene, stasera la sento',
                            status  : 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Claudia',
                    avatar  : './img/avatar_6.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date    : '10/01/2020 15:30:55',
                            message : 'Ciao Claudia, hai novità?',
                            status  : 'sent'
                        },
                        {
                            date    : '10/01/2020 15:50:00',
                            message : 'Non ancora',
                            status  : 'received'
                        },
                        {
                            date    : '10/01/2020 15:51:00',
                            message : 'Nessuna nuova, buona nuova',
                            status  : 'sent'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Federico',
                    avatar  : './img/avatar_7.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date    : '10/01/2020 15:30:55',
                            message : 'Fai gli auguri a Martina che è il suo compleanno!',
                            status  : 'sent'
                        },
                        {
                            date    : '10/01/2020 15:50:00',
                            message : 'Grazie per avermelo ricordato, le scrivo subito!',
                            status  : 'received'
                        }
                    ],
                    visible : true,
                },
                {
                    // CONTACT INFO
                    name    : 'Davide',
                    avatar  : './img/avatar_8.jpg',

                    // CONTACT MESSAGES ARRAY
                    messages: [
                        {
                            date    : '10/01/2020 15:30:55',
                            message : 'Ciao, andiamo a mangiare la pizza stasera?',
                            status  : 'received'
                        },
                        {
                            date    : '10/01/2020 15:50:00',
                            message : 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status  : 'sent'
                        },
                        {
                            date    : '10/01/2020 15:51:00',
                            message : 'OK!!',
                            status  : 'received'
                        }
                    ],
                    visible : true,
                },
            ]            
        }
    },
    // FUNZIONE METHODS
    methods:{
        // QUANDO L'UTENTE CLICCA SUL CONTATTO, RENDO ATTIVA LA CHAT DI QUEL CONTATTO
        changeChat(index){
            this.activeChat = index;
        },

        // QUANDO L'UTENTE CLICCA INVIO DOPO AVER INSERITO IL MESSAGGIO NELL'INPUT, VIENE PUSHATO IL NUOVO MESSAGGIO NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
        newMessage(){
            // CONTROLLO CHE L'UTENTE NON HA LASCIATO IL CAMPO INPUT VUOTO
            if(this.userMessage !== ''){
                
                // CREO UN NUOVO OGGETTO DA PUSHARE NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
                let object = {
                    date    : this.dateTime(),
                    message : this.userMessage,
                    status  : 'sent'
                };

                // PUSHO IL NUOVO OGGETTO NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
                this.contacts[this.activeChat].messages.push(object);

                // RIPRISTINO IL CAMPO INPUT E LA VARIABILE USER_MESSAGE
                this.userMessage = '';

                // RICHIAMO LA FUNZIONE AUTO_MESSAGE
                this.autoMessage();
            }
        },

        // QUANDO L'UTENTE CLICCA INVIO DOPO AVER INSERITO IL MESSAGGIO NELL'INPUT, RICHIAMO LA FUNZIONE AUTO_MESSAGE
        autoMessage(){
            // AVVIO UNA TIMING FUNCTION SET_TIME_OUT CHE DOPO 1 SECONDO MI INVIA UN MESSAGGIO AUTOMATICO
            setTimeout(() => {
    
                // CREO UN NUOVO OGGETTO DA PUSHARE NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
                let object = {
                    date    : this.dateTime(),
                    message : 'ok',
                    status  : 'received'
                };
    
                // PUSHO IL NUOVO OGGETTO NELL'ARRAY MESSAGES DEL CONTATTO ATTIVO
                this.contacts[this.activeChat].messages.push(object);
            }, 1000);
        },

        // QUANDO L'UTENTE SCRIVE NELLA BARRA DI RICERCA CONTATTI, VIENE FILTRATO IL RISULTATO IN BASE A COSA HA SCRITTO L'UTENTE
        searchFilter(){

            // INSERISCO DENTRO UNA VARIABILE LA STRINGA INSERITA DALL'UTENTE NELL'INPUT DI RICERCA CONTATTO
            let contactSearched = this.userSearch.toLowerCase(); 

            // CICLO OGNI ELEMENTO DELL'ARRAY PER VEDERE SE CORRISPONDE CON LA RICERCA DELL'UTENTE
            this.contacts.forEach((contact) => {
                // INSERISCO DENTRO UNA VARIABILE IL NOME DI OGNI CONTATTO DELL'ARRAY CONTACTS
                let contactName = contact.name.toLowerCase();

                // CONTROLLO SE IL NOME INCLUDE LA STRINGA RICERCATA DALL'UTENTE
                if (contactName.includes(contactSearched)){

                    // SE IL NOME INCLUDE LA STRINGA RICERCATA DALL'UTENTE, SETTO LA VARIABILE VISIBLE IN TRUE
                    contact.visible = true;

                } else{
                    // SE IL NOME NON INCLUDE LA STRINGA RICERCATA DALL'UTENTE, SETTO LA VARIABILE VISIBLE IN FALSE
                    contact.visible = false;
                }
            });
        },

        // QUANDO L'UTENTE CLICCA SULL'ICONA DEL MESSAGE DROPDOWN, VIENE MOSTRATO IL DROPDOWN MENU
        showMessageDropdown(index){
            // ASSEGNO L'INDEX DEL MESSAGGIO CLICCATO ALL'INDEX DI MESSAGE DROPDOWN
            this.messageDropdown.index = index;
            // ASSEGNO TRUE ALLA VARIABILE SHOW DI MESSAGE DROPDOWN
            this.messageDropdown.show = true;
        },

        // QUANDO L'UTENTE TOGLIE IL MOUSE DAL MESSAGE DROPDOWN, VIENE DISATTIVATO IL DROPDOWN MENU
        leaveMessageDropdown(){
            // ASSEGNO IL VALORE "0" ALL'INDEX DI MESSAGE DROPDOWN
            this.messageDropdown.index = 0;
            // ASSEGNO FALSE ALLA VARIABILE SHOW DI MESSAGE DROPDOWN
            this.messageDropdown.show = false;
        },

        // QUANDO L'UTENTE CLICCA SU "CANCELLA MESSAGGIO", CANCELLO IL MESSAGGIO SELEZIONATO DALL'ARRAY MESSAGES DEL CONTATTO ATTUALE
        deleteMessage(index){
            // CANCELLO IL MESSAGGIO CLICCATO TRAMITE LA FUNZIONE SPLICE
            this.contacts[this.activeChat].messages.splice(index, 1);
        },

        // FUNZIONA CHE STAMPA IL TESTO DELL'ULTIMO MESSAGGIO DELL'ARRAY MESSAGES DI OGNI CONTATTO
        getLastMessage(contact){

            // RECUPERO L'ARRAY MESSAGES DEL CONTATTO ATTUALE
            const messages = contact.messages;

            // CONTROLLO SE L'ARRAY MESSAGES NON è VUOTO
            if (messages.length > 0) {

                // RECUPERO L'ULTIMO OGGETTO DELL'ARRAY MESSAGES
                const lastMessage = messages[messages.length - 1];
                
                if(lastMessage.status === 'sent'){
                    // STAMPO LA VARIABILE "MESSAGE" DELL'ULTIMO OGGETTO DELL'ARRAY MESSAGES
                    return `✓ ${lastMessage.message}`;
                }

                // STAMPO LA VARIABILE "MESSAGE" DELL'ULTIMO OGGETTO DELL'ARRAY MESSAGES
                return lastMessage.message;
            }
            // SE L'ARRAY MESSAGES è VUOTO RITORNO UNA STRINGA
            return 'Nessun messaggio';
        },

        // FUNZIONA CHE STAMPA L'ULTIMA DATA DELL'ARRAY MESSAGES DI OGNI CONTATTO
        getLastDate(contact){

            // RECUPERO L'ARRAY MESSAGES DEL CONTATTO ATTUALE
            const messages = contact.messages;

            // CONTROLLO SE L'ARRAY MESSAGES NON è VUOTO
            if (messages.length > 0) {

                // RECUPERO L'ULTIMO OGGETTO DELL'ARRAY MESSAGES
                const lastMessage = messages[messages.length - 1];

                // STAMPO LA VARIABILE "DATE" DELL'ULTIMO OGGETTO DELL'ARRAY MESSAGES
                return lastMessage.date;
            }
            // SE L'ARRAY MESSAGES è VUOTO RITORNO UNA STRINGA VUOTA
            return '';
        },

        // FUNZIONE CHE STAMPA L'ULTIMA DATA DELL'ARRAY MESSAGES DEL CONTATTO SELEZIONATO
        getLastAccess(){

            // RECUPERO L'ARRAY MESSAGES DEL CONTATTO SELEZIONATO
            const messages = this.contacts[this.activeChat].messages;

            // CONTROLLO SE L'ARRAY MESSAGES NON è VUOTO
            if (messages.length > 0){

                // DEFINISCO LA VARIABILE LAST_CONTACT_MESSAGE
                let lastContactMessage;

                // CICLO OGNI OGGETTO DELL'ARRAY MESSAGES
                messages.forEach((message) =>{

                    // SE IL MESSAGGIO è STATO MANDATO DAL CONTATTO
                    if(message.status === 'received'){

                        // SALVO LA VARIABILE "DATE" DELL'ULTIMO OGGETTO DELL'ARRAY MESSAGES CON STATUS RECEIVED DENTRO LAST_CONTACT_MESSAGE
                        lastContactMessage = message.date;
                    }
                })
                // STAMPO LA VARIABILE "DATE" DELL'ULTIMO OGGETTO DELL'ARRAY MESSAGES CON STATUS RECEIVED
                return lastContactMessage;
            }
            // SE L'ARRAY MESSAGES è VUOTO RITORNO UNA STRINGA VUOTA
            return '';
        },

        // FUNZIONE CHE RECUPERA LA DATA ATTUALE CON LUXON
        dateTime(){

            // RECUPERO LA DATA DA LUXON
            const date = luxon.DateTime;

            // FORMATTO LA DATA IN TEMPO REALE
            let todayDate = date.now().setLocale('it').toLocaleString(date.DATETIME_SHORT_WITH_SECONDS);

            // RITORNO LA DATA IN TEMPO REALE
            return todayDate;
        },
    }
}).mount('#app'); // COLLEGO L'APP VUE.JS AL DOM HTML