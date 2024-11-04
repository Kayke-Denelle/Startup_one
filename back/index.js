const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // A rota de autenticação
const taskRoutes = require('./routes/taskRoutes');



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB conectado'))
  .catch((error) => console.log(error));

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
