let userEmail = prompt("Inserisci la tua email per accedere all'area riservata");

let emailList = ["matteo@gmail.com", "fabio @gmail.com", "pietro @gmail.com", "anna @gmail.com"];

if (emailList.includes(userEmail)) {
    window.alert("La tua mail è stata accettata, puoi proseguire con l'accesso");
} else {
    window.alert("Ci dispiace ma il tuo indirizzo non è stato accettato");
}




















/* 
Esercizio di oggi: Mail e Gioco dei dadi
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. La lista delle email accettate è:
matteo@gmail.com
fabio@gmail.com
pietro@gmail.com
anna@gmail.com
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Consigli del giorno:
Prima di partire a scrivere codice poniamoci qualche domanda: che ci sia un array da qualche parte? 
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Altri consigli sono:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano", 
oppure usate un FlowCharts per capire la logica.
*/