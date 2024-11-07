const express = require('express');
const { createCard, getCards, updateCard, deleteCard } = require('../controllers/cardsControllers');
const auth = require('../midleware/auth');
const router = express.Router();

// Rota para criar um novo cartão (POST)
router.post('/', auth, createCard);

// Rota para obter todos os cartões de um deck específico (GET)
router.get('/:deckId', auth, getCards);  // Rota para pegar todos os cartões de um deck


// Rota para obter um cartão específico
router.get('/:deckId/cartas/:cardId', auth, async (req, res) => {
    const { cardId } = req.params;  
  
    try {
      const card = await card.findById(cardId); 
      if (!card) {
        return res.status(404).json({ message: 'Cartão não encontrado' });
      }
      res.status(200).json(card);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // Rota para atualizar um cartão específico (PUT)
router.put('/:cardId', auth, updateCard);

// Rota para excluir um cartão específico (DELETE)
router.delete('/:cardId', auth, deleteCard);
  

module.exports = router;
