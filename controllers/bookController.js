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
    // recuperiamo l'id dall' URL
    const id = req.params.id

    // query da eseguire con ?seganposto per prepared statement per libro
    const sql = 'SELECT * FROM books WHERE id = ?';

    // query da eseguire con ?seganposto per le review del libro
    const reviewsSql = 'SELECT * FROM reviews WHERE book_id = ?';

    // chiamata per esecuzione query libro
    connection.query(sql, [id], (err, bookResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (bookResults.length === 0) return res.status(404).json({ error: 'Book not found' });

        const book = bookResults[0];

        // se il libro è stato trovato eseguiamo la seconda query per le reviews
        // chiamata per esecuzione query libro
        connection.query(reviewsSql, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' });

            book.reviews = reviewResults;
            res.json(book);

        })

    })

};



// esportiamo le funzioni per il router
module.exports = { index, show }