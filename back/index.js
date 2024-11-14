const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const deckRoutes = require('./routes/deckRoutes');
const cardRoutes = require('./routes/cardsRoutes');
const atividadeRoutes = require('./routes/atividadeRoutes');


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json("Funcionou");
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/baralhos', deckRoutes);
app.use('/api/cartas', cardRoutes);
app.use('/api/atividades', atividadeRoutes);

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
