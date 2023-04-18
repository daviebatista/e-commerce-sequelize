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
<br/>
```
npm init
```
<br/>
Feito isso, vá até a pasta 'config', e abra o arquivo 'config.js'. Nele, haverá o objeto JS contendo os campos e atributos a serem preenchidos. Coloque-os de acordo com as descrições ao lado de cada um destes, segundo suas configurações locais do banco de dados.
<br/>
Com o sistema configurado, e com os módulos instalados, podemos agora partir para a criação do banco de dados na máquina local. Para isso, use o comando:

```
sequelize db:migrate
```
Assim, estaremos com o banco armazenado em nosso sistema local, e poderemos fazer uso dele para subirmos ele na rede e fazermos o uso desse.
