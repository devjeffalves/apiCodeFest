//Importar o pacote express para criar o servidor
const express = require('express');
//Importar o pacote File system para manipular arquivos
const fs = require('fs'); // Precisa do arquivo em formato de String
//Importar banca do dados de extensão .json
const data: string= './database.json';

//Instancia o express na variável app
const app = express();

//função para o express acessar o JSON
app.use(express.json());

//Listar usuários
app.get('/api/users', (req:any, res: any) => {
    const jsonData = fs.readFileSync(data);//Chamando a função do pacote fs
    res.send(JSON.parse(jsonData));

});

//Cadastrar usuários
app.post('/api/users', (req:any, res: any) => {
    const jsonDataBase = fs.readFileSync(data);
    let content = JSON.parse(jsonDataBase);
    //Verifica a quantidade de objetos na base de dados
    let index: number = Object.keys(content).length;
   // console.log(req.body); exibe usuário adicionado
   content[index++] = req.body;
   const values = JSON.stringify(content);

   fs.writeFileSync(data, values);

   res.status(201).send("user registered successfully");
   
});

//Atualizar usuários
app.put('/api/user/:id', (req:any, res: any) => {
    const jsonDataBase = fs.readFileSync(data);  

    const userId = req.params.id; 

    let content = JSON.parse(jsonDataBase);

    content[userId] = req.body;

    const values = JSON.stringify(content);

    fs.writeFileSync(data, values);

    res.send(`User with id ${userId} has been updated`);

});
//excluir usuários
app.delete('/api/users', (req:any, res: any) => {
    res.send(data);
});

app.post('/users', (req: any, res: any) => {
    console.log(req.body.cidade);
    let user = {
        nome: req.body.nome,
        idade: req.body.idade,
        cidade: req.body.cidade
    };

    //file.push(user);

return res.send("Dados inseridos com sucesso!");

});
//Iniciar servidor => função anônima
app. listen(3000, () => console.log(`Running on port 3000`))