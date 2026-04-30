// richiamo libreria
const express = require('express')
// estrapolo e uso la parte di router
const router = express.Router();

// importo il controller della risorsa books
const bookController = require('./../controllers/bookController');

// definisco le varie rotte relative alla risorsa specifica
// index
router.get('/', bookController.index);

// show
router.get('/:id', bookController.show);



// esporto il router per poterlo usare i app
module.exports = router;
