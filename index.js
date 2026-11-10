// Importando as bibliotecas
require('dotenv').config();

const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

// Criando a conexão com o banco:
const app = express();
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);

const produtos = client.db('loja').collection('produtos');

// Criando os métodos HTTP:

// Cadastrar um sapato
app.post('/produtos', async (req, res) => {
    const novoProduto = await produtos.insertOne(req.body);
    res.status(201).json(novoProduto);
});

// Listar todos os sapatos
app.get('/produtos', async (req, res) => {
    const listaProdutos = await produtos.find().toArray();
    res.json(listaProdutos);
});

// Buscar um sapato pelo ID
app.get('/produtos/:id', async (req, res) => {
    const produtoEspecifico = await produtos.findOne({
        _id: new ObjectId(req.params.id)
    });
    res.json(produtoEspecifico);
});

// Atualizar um sapato
app.put('/produtos/:id', async (req, res) => {
    const produtoAtualizado = await produtos.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    );
    res.json(produtoAtualizado);
});

// Excluir um sapato
app.delete('/produtos/:id', async (req, res) => {
    const produtoDeletado = await produtos.deleteOne({
        _id: new ObjectId(req.params.id)
    });
    res.json(produtoDeletado);
});

// Conectando ao MongoDB
client.connect()
    .then(() => {
        console.log('CONECTADO AO MONGODB');

        app.listen(process.env.PORT || 3000, () => {
            console.log('API RODANDO');
        });
    })
    .catch((erro) => {
        console.log('ERRO AO CONECTAR', erro.message);
    });