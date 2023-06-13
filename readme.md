PROBLEMA: realizzare WhatsApp Web.


/******************************************************************************************************/

MILESTONE 1:

Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse;

Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.


SOLUZIONE MILESTONE 1:

- Creare la struttura HTML statica;

- Inserire il Boilerplate vue.js in JavaScript;

- Inserire l'array di oggetti in Return vue.js;

- Usare la direttiva v-for per visualizzare nome e immagine di ogni contatto.


/******************************************************************************************************/

MILESTONE 2:

1 - Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione;

2 - Click sul contatto : mostra la conversazione del contatto cliccato.


SOLUZIONE MILESTONE 2:

1

    - Inserire una Variabile per Definire qual è l'indice della chat attiva (activeChat);

    - Usare il v-bind per visualizzare la classe "contact-selected" se activeChat è UGUALE all'indice dell'elemento attuale;

    - Usare v-for per visualizzare tutti i messaggi;

    - Usare il v-bind per visualizzare la classi "message-content-sent" e "message-sent" se status è UGUALE a 'sent';

    - Usare il v-show per visualizzare tutti i messaggi del contatto selezionato.


2

    - Creare la Funzione (changeChat(index));

    - Richiamare la funzione con v-on:click sulle Col dei Contatti.
    

/******************************************************************************************************/

MILESTONE 3:

1 - Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde;

2 - Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


SOLUZIONE MILESTONE 3:

1

    - Aggiungere una Variabile (userMessage) dove inserire il messaggio dell'utente;

    - Aggiungere v-model all'input per l'invio di un nuovo messaggio;

    - Creare la funzione (newMessage);

        - ? SE l'utente non ha lasciato il campo vuoto, ALLORA:

            - Creare un nuovo oggetto per ogni messaggio inviato dall'utente;

            - Pushare il nuovo oggetto dentro l'array Message del Contatto Attuale;

            - Ripristinare la Variabile userMessage;

    - Aggiungere v-on:keyup.enter all'input per l'invio di un nuovo messaggio per richiamare la funzione (newMessage).


2

    - Inserire dentro la funzione (newMessage) una Timing Function setTimeOut che viene attivata dopo 1 secondo:

            - Creare un nuovo oggetto per ogni messaggio inviato dall'utente;

                - message = ok;

            - Pushare il nuovo oggetto dentro l'array Message del Contatto Attuale.