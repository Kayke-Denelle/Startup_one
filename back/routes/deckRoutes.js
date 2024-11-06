const express = require('express');
const { createDeck, getDecks, getDeckById } = require('../controllers/deckControllers');
const auth = require('../midleware/auth');
const { getCards } = require('../controllers/cardsControllers');
const router = express.Router();

router.post('/', auth, createDeck);
router.get('/', auth, getDecks);
router.get('/:deckId', auth, getCards);


module.exports = router;
