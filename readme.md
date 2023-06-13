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

    - Usare il v-show per visualizzare tutti i messaggi del contatto selezionato;