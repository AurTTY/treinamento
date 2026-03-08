import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from './controllers/userController.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get('/users', getUsers);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

// Rota padrão (opcional)
app.get('/', (req, res) => {
    res.json({ message: 'API rodando corretamente' });
});

export default app;