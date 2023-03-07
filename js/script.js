//Chiedere il nome all'utente
const username= prompt('qual\'è il tuo nome?');
console.log(username);

//Chiedere il cognome all'utente
const userLastName= prompt('qual\'è il tuo cognome?')
console.log(userLastName);

//Chiedere all'utente il colore preferito
const userFavoriteColor= prompt('qual\'è il tuo colore preferito?')
console.log(userFavoriteColor);

//Srivere il messaggio da stampare
const message= username + userLastName + userFavoriteColor + 21;
console.log(message);

//Stampare il messaggio sulla pagina
document.getElementById('password').innerHTML = message;