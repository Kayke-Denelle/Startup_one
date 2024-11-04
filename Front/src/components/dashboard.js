import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redireciona se não houver token
        }
    }, [navigate]);



    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // Função para obter tarefas do usuário
    const fetchTasks = async () => {
        try {
            const token = localStorage.getItem('token'); // Obtenha o token do localStorage
            const response = await axios.get('http://localhost:5000/api/tasks', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTasks(response.data);
        } catch (error) {
            console.error('Erro ao buscar tarefas', error);
        }
    };

    // Função para adicionar uma nova tarefa
    const addTask = async () => {
        if (task.trim()) {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(
                    'http://localhost:5000/api/tasks',
                    { text: task },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setTasks([...tasks, response.data]);
                setTask('');
            } catch (error) {
                console.error('Erro ao adicionar tarefa', error);
            }
        }
    };

    // Chama `fetchTasks` uma vez ao carregar o componente
    useEffect(() => {
        fetchTasks();
    }, []);

    // Resto do componente permanece igual
    return (
        <div className="dashboard">
            <h1>Dashboard - To-Do List</h1>
            <div className="task-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Adicionar nova tarefa"
                />
                <button onClick={addTask}>Adicionar</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : ''}>
                        <span>{task.text}</span>
                        <button>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
