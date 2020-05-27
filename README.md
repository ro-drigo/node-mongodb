Criar o arquivo package
npm init

//Instalando Express (Gerencia as requisições, rotas e URLs, etc...)
npm install express

//Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte
npm install -D nodemon

//Instalar o MongoDB
npm install --save mongodb

//Instalar o Mongoose. Ele traduz os dados do banco para objetos js para que possam ser utilizados na nossa aplicação
npm install --save mongoose

//Instalar o CORS para proteger as requisições para a nossa API
npm install cors

-------------------------------------
Como rodar o projeto
-------------------------------------
//Para instalar todas as dependências
npm install

//Rodar o projeto
nodemon app.js