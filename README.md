# API Loja de Sapatos 👟

## Projeto

Neste projeto, desenvolvi uma API para uma loja de sapatos, com o objetivo de realizar o gerenciamento dos produtos cadastrados na loja.

O código foi desenvolvido em Node.js e utiliza o Express para criar as rotas e o MongoDB para armazenar as informações dos produtos.

## Desenvolvimento

Primeiramente, foram importadas as bibliotecas necessárias para o funcionamento da aplicação. Em seguida, foi criada a conexão com o banco de dados MongoDB, utilizando uma variável de ambiente chamada MONGO_URI, armazenada no arquivo .env.

O banco de dados utilizado foi chamado de loja, e dentro dele foi criada a coleção produtos, onde ficam armazenadas as informações dos sapatos.

Depois, foram desenvolvidos os métodos HTTP para permitir a interação com os dados:

O método POST permite cadastrar novos sapatos no banco de dados.
O método GET permite visualizar todos os produtos cadastrados.
O método GET com ID permite buscar um sapato específico.
O método PUT permite atualizar as informações de um produto.
O método DELETE permite excluir um produto cadastrado.

Para finalizar, foi realizada a conexão com o MongoDB e configurado o servidor para executar a API na porta disponibilizada pelo ambiente ou, caso não exista, na porta 3000.

 ## Resumo do projeto

A API Loja de Sapatos – Calce Bem permite gerenciar os produtos de uma loja de calçados por meio de requisições HTTP. Com ela, é possível cadastrar sapatos informando nome, marca, categoria, tamanho, cor, preço e quantidade em estoque, além de consultar, atualizar e excluir os produtos.

O projeto foi desenvolvido com base em uma atividade anterior de API de produtos, mantendo a mesma estrutura de código, mas adaptando o contexto para uma loja de sapatos.
