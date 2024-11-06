// controllers/deckControllers.js
const Deck = require('../models/deck');  // Certifique-se de que você tem um modelo "Deck"

const createDeck = async (req, res) => {
  const { name, description } = req.body;
  const userId = req.user.userId;  // O userId vem do middleware auth

  try {
    const newDeck = new Deck({
      name,
      description,
      userId,
    });

    await newDeck.save();
    res.status(201).json(newDeck);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDecks = async (req, res) => {
  const userId = req.user.userId;

  try {
    const decks = await Deck.find({ userId });
    res.status(200).json(decks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Função para buscar um deck por ID
const getDeckById = async (req, res) => {
  const { deckId } = req.params;  // Captura o deckId da URL

  try {
    const deck = await Deck.findById(deckId);

    if (!deck) {
      return res.status(404).json({ message: 'Deck não encontrado' });
    }

    res.status(200).json(deck);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createDeck,
  getDecks,
  getDeckById,
};
