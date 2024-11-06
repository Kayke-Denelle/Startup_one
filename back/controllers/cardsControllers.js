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
  const cards = await Card.find({ deckId: req.params.deckId, userId: req.user.userId });
  res.json(cards);
};

module.exports = { createCard, getCards };
