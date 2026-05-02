const express = require('express')
const app = express()
const port = process.env.PORT
// import cors middleware
const cors = require("cors");

// abilitiamo dominio FE

app.use(cors({
    origin: 'http://localhost:5173'
}));

// importo il router della risorsa pizze
const bookRouter = require('./routers/bookRouter');

// importo middleware di gestione errore interno server 500
const errorsHandler = require('./middlewares/errorsHandler');

// importo middleware di gestione errore di chiamata su rotta inesistente 404
const notFound = require('./middlewares/notFound');

// app.use(express.static('public'));

// attivazione body parser per formato json per tutte le rotte	
// app.use(express.json());


// rotta di home
app.get('/', (req, res) => {
    res.send("Benvenuto nella API della mia libreria");
})

// rotte di CRUD per la risorsa books
app.use("/api/books", bookRouter)


// registra globalmente il middleware di gestione errore interno server 500
app.use(errorsHandler);

// registra globalmente il middleware di gestione chiamata su rotta inesistente 404
app.use(notFound);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})