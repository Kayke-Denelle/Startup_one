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

module.exports = { createCard, getCards };
