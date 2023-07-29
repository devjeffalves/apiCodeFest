
//Importar o pacote express para criar o servidor
const express = require('express');
//Instancia o express na variável router
const router = express.Router();

import userController from "../controller/userController";



//Listar usuários
router.get('/users/', userController.listUsers);
//Cadastrar usuários
router.post('/users/', userController.createUsers);
//Atualizar usuários
router.put('/user/:id', userController.editUser);
//excluir usuários
router.delete('/user/:id', userController.deleteUser);

export default router;
