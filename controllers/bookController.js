// Importiamo il file di connessione al database
const connection = require('../data/db');

// elenco funzioni relative alle rotte della risorsa pizze

function index(req, res) {
    // prepariamo la query
    const sql = 'SELECT * FROM books';

    // eseguiamo la query!
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
}

function show(req, res) {
    res.send("questa è la show del libro");
}



// esportiamo le funzioni per il router
module.exports = { index, show }