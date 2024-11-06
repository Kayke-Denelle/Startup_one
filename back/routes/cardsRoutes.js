const express = require('express');
const { createCard, getCards } = require('../controllers/cardsControllers');
const auth = require('../midleware/auth');
const router = express.Router();

// Rota para criar um novo cartão (POST)
router.post('/', auth, createCard);

// Rota para obter todos os cartões de um deck específico (GET)
router.get('/:deckId', auth, getCards);  // Rota para pegar todos os cartões de um deck

// Rota para obter um cartão específico (GET)
// Rota para obter um cartão específico
router.get('/:deckId/cartas/:cardId', auth, async (req, res) => {
    const { cardId } = req.params;  // Captura o cardId da URL
  
    try {
      const card = await card.findById(cardId);  // Corrigido para 'Card'
      if (!card) {
        return res.status(404).json({ message: 'Cartão não encontrado' });
      }
      res.status(200).json(card);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

module.exports = router;
