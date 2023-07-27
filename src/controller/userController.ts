import { Request, Response } from "express";

//Importar o pacote File system para manipular arquivos
const fs = require('fs'); // Precisa do arquivo em formato de String
//Importar banca do dados de extensão .json
const data: string= './database.json';


//Listar usuários
async function getUsers(req: Request, res: Response){
    const jsonData = fs.readFileSync(data);//Chamando a função do pacote fs
        res.send(JSON.parse(jsonData));
}
//Cadastrar Usuários
async function postUsers(req: Request, res: Response){
    const jsonDataBase = fs.readFileSync(data);
    
    //analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase);
    
    //verifica a quantidade de objetos na base de dados
    let index: number = Object.keys(content).length;
   
    //criar uma nova chave de objeto somando +1 do total de objetos 
    content[index++] = req.body;
    
    //analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content);
    
    //lê o arquivo da base de dados e adiciona o novo objeto
    fs.writeFileSync(data, values);
    
    //retorno amigável para o usuário que chamou o endpoint
    res.status(201).send("User '" + req.body.username + "' registered successfulll!");
}
//Atualizar usuários
async function putUser (req:any, res: any) {
    const jsonDataBase = fs.readFileSync(data);  
    const userId = req.params.id; 
    let content = JSON.parse(jsonDataBase);
    content[userId] = req.body;
    const values = JSON.stringify(content);
    fs.writeFileSync(data, values);
    res.send(`User with id ${userId} has been updated`);
}
//excluir usuários 
async function deleteUser (req: any, res: any) {
    const jsonDataBase = fs.readFileSync(data);  
    const userId = req.params.id; 
    let content = JSON.parse(jsonDataBase);
    delete content[userId];
    const values = JSON.stringify(content);
    fs.writeFileSync(data, values);
    res.send(`User with id ${userId} has been deleted!`);
};

export default {
    getUsers,
    postUsers,
    putUser,
    deleteUser
    }