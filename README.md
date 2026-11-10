# API Loja de Sapatos 👟
## 📌 Sobre o projeto

O projeto consiste no desenvolvimento de uma API para o gerenciamento de produtos de uma loja de sapatos. A proposta é permitir que as informações dos calçados sejam armazenadas e administradas de maneira simples, por meio de requisições HTTP.

A API foi desenvolvida como atividade acadêmica, utilizando como referência um projeto anterior de gerenciamento de produtos com banco de dados não relacional. Nesta versão, a estrutura foi mantida, mas o tema foi adaptado para uma loja de calçados.

## 🛠️ Tecnologias utilizadas

Para o desenvolvimento do projeto, foram utilizadas as seguintes tecnologias e ferramentas:

**Node.js:** utilizado para executar a aplicação JavaScript no servidor.
**Express:** utilizado para criar o servidor e organizar as rotas da API.
**MongoDB:** banco de dados não relacional responsável por armazenar os produtos.
**MongoDB Atlas:** utilizado para hospedar o banco de dados na nuvem.
**dotenv:** utilizado para carregar as variáveis de ambiente, permitindo armazenar a URL de conexão com o banco de dados no arquivo .env.
**Thunder Client:** utilizado para realizar os testes das requisições HTTP diretamente no Visual Studio Code.
**GitHub:** utilizado para publicar o código-fonte do projeto.
**Render:** utilizado para realizar a publicação da API na internet.

## 💻 Desenvolvimento do código

Inicialmente, foram importadas as bibliotecas necessárias para o funcionamento da aplicação, incluindo o Express, o MongoDB e o dotenv.

Em seguida, foi configurado o Express para receber e interpretar informações enviadas no formato JSON. Também foi criada a conexão com o MongoDB, utilizando a variável de ambiente MONGO_URI, armazenada no arquivo .env, evitando deixar os dados de conexão diretamente no código.

O banco de dados utilizado recebeu o nome de loja, e dentro dele foi definida a coleção produtos, responsável por armazenar os dados dos sapatos cadastrados.

Após a configuração inicial, foram desenvolvidas as rotas responsáveis por realizar as operações com os produtos.

## Operações desenvolvidas

**1. Cadastro de produtos (POST)**

Foi criado o método POST na rota /produtos, responsável por receber as informações de um novo sapato e inseri-las na coleção do MongoDB.

**2. Listagem de produtos (GET)**

Foi desenvolvido o método GET na rota /produtos, que busca todos os produtos cadastrados no banco de dados e retorna uma lista em formato JSON.

**3. Busca de produto por ID (GET)**

Também foi criada uma rota GET com o parâmetro :id, permitindo localizar um produto específico por meio de seu identificador único no MongoDB.

**4. Atualização de produtos (PUT)**

O método PUT foi implementado para atualizar as informações de um sapato já cadastrado, utilizando seu ID como referência e aplicando as alterações enviadas na requisição.

**5. Exclusão de produtos (DELETE)**

Por último, foi desenvolvido o método DELETE, responsável por localizar um produto pelo ID e removê-lo da coleção.

Ao final do código, foi realizada a conexão com o banco de dados. Após a conexão bem-sucedida, o servidor é iniciado, utilizando a porta disponibilizada pelo ambiente de hospedagem ou, caso não exista, a porta 3000.

## 👟 Dados dos produtos

Os produtos cadastrados na API podem conter as seguintes informações:

Nome do sapato;
Marca;
Categoria;
Tamanho;
Cor;
Preço;
Quantidade em estoque.

Exemplo de um produto enviado para cadastro:

json
{
  "nome": "Tenis Adidas Grand Court",
  "marca": "Adidas",
  "categoria": "Tenis",
  "tamanho": 37,
  "cor": "Preto",
  "preco": 299.90,
  "estoque": 12
}

## 🧪 Testes da aplicação

Após o desenvolvimento do código, foram realizados testes utilizando o Thunder Client, uma extensão do Visual Studio Code que permite enviar requisições HTTP e visualizar as respostas da API.

Durante os testes, foram realizadas operações de cadastro, listagem, consulta por ID, atualização e exclusão de produtos, verificando o funcionamento da comunicação entre a aplicação e o banco de dados.

## 📝 Resumo final

A API Loja de Sapatos – Calce Bem foi desenvolvida com o objetivo de colocar em prática os conhecimentos adquiridos sobre criação de APIs e integração com bancos de dados não relacionais.

Por meio do código, é possível realizar o gerenciamento dos produtos de uma loja de calçados, desde o cadastro de novas mercadorias até a consulta, alteração e exclusão das informações armazenadas.

O desenvolvimento permitiu trabalhar com rotas, métodos HTTP, requisições JSON, conexão com o MongoDB e testes da aplicação. Além disso, o projeto proporciona a experiência de publicar um código no GitHub e preparar sua disponibilização na internet por meio do Render.
