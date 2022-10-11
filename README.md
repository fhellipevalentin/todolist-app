# Todolist App

Este projeto é uma aplicação simples de criação, seleção, atualização e deleção de tarefas simples do dia-a-dia. Criado em Angular Material, em essência, full stack e possui uma base de dados que pode ser manipulados através do "json-server"

![image](https://user-images.githubusercontent.com/65087845/195132550-bbacc2c8-ebd4-4f14-912b-06a5d4cab4dd.png)

![image](https://user-images.githubusercontent.com/65087845/195132393-e05dfc96-9104-4b27-a0af-be2a12b4a246.png)

![image](https://user-images.githubusercontent.com/65087845/195132699-f6dbdcdf-d5e4-4a6f-9830-a3654d88d431.png)

## Requerimentos:

### Cli/Angular: 

Para instalar o Angular, siga os passos no site oficial: https://angular.io/guide/setup-local.

## Baixar a aplicação 

Assim que estiver baixado, coloque na sua pasta de preferência

## Baixar as dependências

Execute `npm install` dentro do diretório específico raiz da aplicação Angular para baixar as dependências.

### Json-Server

Para conseguir manipular a base de dados é necessário esse utilitário para ao menos simular uma API. Para isso, execute `npm install json-server`.

## Funcionamento Json-Server
 
Para conferir seu funcionamento, navegue até a pasta /server/ da aplicação baixada do github e execute `json-server db.json`. Assim que executar o arquivo em JSON, use o navegador de sua preferência e digite `http://localhost:3000/tasks` para conferir os dados que estão registrados até o momento.

## Development server

Execute `ng serve` para executar a aplicação através do Angular. Navegue para `http://localhost:4200/tasks-list` para ver a aplicação rodando. A rota padrão por enquanto é para o componente Home, que está em desenvolvimento. Ao menos, as funcionalidades de uma aplicação To-do estão ok.
