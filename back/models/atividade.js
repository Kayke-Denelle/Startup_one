const mongoose = require('mongoose');

const atividadeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  cartaId: { type: mongoose.Schema.Types.ObjectId, required: true },
  dificuldade: { type: String, enum: ['facil', 'medio', 'dificil'], required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Atividade', atividadeSchema);