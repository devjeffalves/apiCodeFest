
//Importar o pacote express para criar o servidor
const express = require('express');

import userController from "../controller/userController";

//Instancia o express na variável router
const router = express.Router();

//Listar usuários
router.get('/users/', userController.getUsers);
//Cadastrar usuários
router.post('/users/', userController.postUsers);
//Atualizar usuários
router.put('/user/:id', userController.putUser);
//excluir usuários
router.delete ('/user/:id', userController.deleteUser);


/*router.post('/users', (req: any, res: any) => {
    console.log(req.body.cidade);
    let user = {
        nome: req.body.nome,
        idade: req.body.idade,
        cidade: req.body.cidade
    }
    */


export default router;
