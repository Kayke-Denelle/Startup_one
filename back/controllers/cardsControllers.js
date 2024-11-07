const Card = require('../models/cards');

const createCard = async (req, res) => {
  const { question, answer, deckId } = req.body;
  const card = new Card({ question, answer, deckId, userId: req.user.userId });

  try {
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCards = async (req, res) => {
  const { deckId } = req.params; // Ensure this is correctly capturing the URL parameter
  try {
    const cards = await Card.find({ deckId: deckId }); // Ensure deckId is a valid ObjectId
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
const updateCard = async (req, res) => {
  const { cardId } = req.params;
  const { question, answer } = req.body;

  try {
    const card = await Card.findByIdAndUpdate(cardId, { question, answer }, { new: true });
    if (!card) {
      return res.status(404).json({ message: 'Cartão não encontrado' });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCard = async (req, res) => {
  const { cardId } = req.params;

  try {
    const card = await Card.findByIdAndDelete(cardId);
    if (!card) {
      return res.status(404).json({ message: 'Cartão não encontrado' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createCard, getCards, deleteCard, updateCard };
