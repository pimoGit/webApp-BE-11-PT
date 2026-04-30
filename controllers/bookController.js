// Importiamo il file di connessione al database
// const connection = require('../data/db');

// elenco funzioni relative alle rotte della risorsa pizze

function index(req, res) {
    res.send("questa è la index dei libri");
}

function show(req, res) {
    res.send("questa è la show del libro");
}



// esportiamo le funzioni per il router
module.exports = { index, show }