import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const route = express.Router();

route.get('/lista', getUsers);
route.post('/criar', createUser);
route.put('/atualizar/:id', updateUser);
route.delete('/deletar/:id', deleteUser);

export default route