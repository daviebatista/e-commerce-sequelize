<p align="center">
  <a>
    <img align="center" src="https://readme-typing-svg.herokuapp.com/?lines=e-commerce+sequelize;made+by+daviebatista&center=true&size=32">
  </a>
</p>

<h1 align="center">
Bem-vindo!
</h1>

Este é um projeto realizado individualmente, sendo um banco de dados voltado para a estruturação back-end de um e-commerce via estruturação SQL.
Nele, foi preparada uma estrutura de tabelas em associações conjuntas, para se formular um sistema capaz de registrar, armazenar, alterar e controlar as informações existentes em um sistema similar ao banco de dados dos sites de lojas digitais.
Segue, abaixo, o esquema prático do database, para entendimento prévio:

<img align="center" src="https://user-images.githubusercontent.com/91736880/232808581-732ae6ce-8478-4e33-9a5a-3b0f04592024.png">

<h2 align="center">
O que você vai precisar para fazer uso do sistema:
</h2>

- NodeJs;
- Um sistema de banco de dados local. Recomendo, por ter sido o nativo, o uso do PostgreSQL, por ter a portabilidade padrão deste projeto;
- Opcionalmente, um DBMS compatível com seu banco de dados local, caso deseja realizar visualização estruturada. Recomendo o PgAdmin;
- Um software para realizar requisições HTTP. Recomendo o Postman.

<h2 align="center">
Configuração do sistema
</h2>
    <img align="center" src="https://user-images.githubusercontent.com/91736880/232802662-ad3eeba4-d7de-47e3-b054-278a5a9ab463.png">

Faça a clonagem do repositório via SSH ou download direto. Depois disso, use o seguinte comando no terminal do VSC: 

```
npm init
```
<br/>

Feito isso, vá até a pasta 'config', e abra o arquivo 'config.js'. Nele, haverá o objeto JS contendo os campos e atributos a serem preenchidos. Coloque-os de acordo com as descrições ao lado de cada um destes, segundo suas configurações locais do banco de dados.
<br/>
Com o sistema configurado, e com os módulos instalados, podemos agora partir para a criação do banco de dados na máquina local. Para isso, use o comando:
<br/>

```
sequelize db:migrate
```

Assim, estaremos com o banco armazenado em nosso sistema local, e poderemos fazer uso dele para subirmos ele na rede e fazermos o uso desse.

<h2 align="center">
Inserção de informações e rotas
</h2>

<h4 align="center">
Hierarquia de dados
</h4>
Agora que temos o sistema configurado e pronto para fucnionar, podemos realizar a criação das informações no banco. Para isso, devemos respeitar a hierarquia do banco, uma vez que nos é necessário, para registrarmos alguns dados, haver outros que dão a dependência dos demais.
<br/>
A hierarquia, deste modo, é representada por este esquema:
<br/>
    <img align="center" src="https://user-images.githubusercontent.com/91736880/233106114-3a21b616-cb02-4c0c-821e-e0c9fd9f45d3.png">
Assim, é preciso haver um registro de cliente para se registrar um endereço, e um registro de cliente e produto para poder se registrar um comentário, que ficarão igualmente identificadas e armazenados nas estruturas intermédias 'client_addresses' e 'product_comments'.

<h4 align="center">
Rotas
</h4>
Aqui, faremos o uso das 4 principais rotas HTTP, para que possamos fazer a verificação, inserção, alteração e remoção de dados, no modelo CRUD.
Cada metadado possui sua rota específica, e seu corpo em JSON a ser utilizado para que seja assim bem realizada. Abaixo, estarão ordenadas cada uma das rotas e seus devidos modelos. Antes de iniciar, devemos executar o launch do servidor. Para isso, usemos o terminal e digitemos o seguinte comando:
```
npx nodemon src
```
Com a mensagem de sucesso aparecendo, podemos então começar a usar nossas rotas para fazermos o CRUD no banco de dados! Para boa realização, realize a inserção das informações ou tipos de rotas pelo Postman, tal qual mostrado na imagem abaixo:
    <img align="center" src="https://user-images.githubusercontent.com/91736880/233112878-b6e3eca7-bec2-4f16-b71d-401ad2852853.png">



<h4 align="center">
Clients
</h4>

<h6 align="center">
  GET - VERIFICAR TODOS OS CLIENTES REGISTRADOS
</h6>
```
ROTA: http://localhost:3000/client
Não há corpo nesta rota, apenas link.
```

<h6 align="center">
POST - INSERIR UM NOVO CLIENTE NO BANCO DE DADOS
</h6>

```
ROTA: http://localhost:3000/client

CORPO:
{
    "name": "clientName",
    "age": 18,
    "gender": "clientGender",
    "cpf": "12345678910",
    "email": "clientName@email.com",
    "phoneNumber": "(12) 34567-8910",
    "password": "password_example"
}
```

<h6 align="center">
PUT - ALTERAR OS DADOS DE UM CLIENTE SALVO
</h6>

```
ROTA: http://localhost:3000/clients/id
No id, insira a Primary Key do cliente que deseja submeter alterações.
Aqui, há a liberdade de se escolher qual informação alterar, baseado no corpo da requisição POST.
É possível escolher tanto uma, quanto todas a serem alteradas.
CORPO:
{
    "name": "otherName",
}
```

<h6 align="center">
DELETE - REMOVER UM CLIENTE DO BANCO DE DADOS
</h6>

```
ROTA: http://localhost:3000/clients/id
No id, insira a Primary Key do cliente que deseja remover.
```
