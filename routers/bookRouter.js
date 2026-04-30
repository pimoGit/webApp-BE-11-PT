// richiamo libreria
const express = require('express')
// estrapolo e uso la parte di router
const router = express.Router();

// importo il controller della risorsa pizze
// const pizzaController = require('./../controllers/pizzaController');

// definisco le varie rotte relative alla risorsa specifica
// index
router.get('/', pizzaController.index);

// show
router.get('/:id', pizzaController.show);



// esporto il router per poterlo usare i app
module.exports = router;
