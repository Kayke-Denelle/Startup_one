
const express = require('express');
const Task = require('../models/Task');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware para verificar o token e extrair o ID do usuário
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token não fornecido' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token inválido' });
    }
};

// Rota para obter tarefas do usuário
router.get('/tasks', authenticate, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.userId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter tarefas' });
    }
});

// Rota para criar uma nova tarefa para o usuário autenticado
router.post('/tasks', authenticate, async (req, res) => {
    try {
        const task = new Task({
            text: req.body.text,
            completed: false,
            userId: req.userId,
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa' });
    }
});
module.exports = router;