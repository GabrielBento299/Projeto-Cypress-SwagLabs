<h1>Projeto-Cypress-SwagLabs</h1>

### [Site ultilizado para os testes]( https://www.saucedemo.com/)

## Caso de Teste com GHERKIN: [TestCase](testCase.md)

<hr />

## Funcionalidade de Carrinho
- ✔ Deve adicionar um produto ao carrinho com sucesso
- ✔ Deve adicionar todos os produtos ao carrinho com sucesso
- ✔ Deve remover um produto do carrinho com sucesso
- ✔ Deve remover todos os produtos do carrinho com sucesso

![cart cy js](https://github.com/GabrielBento299/Projeto-Cypress-cypress-SwagLabs/assets/86307663/36784d3b-5996-4f21-a0d9-39e7634b0e91)
  
## Funcionalidade de Links
- ✔ Deve abrir os links e ser redirecionado para cada um deles com sucesso

![linksFooter cy js](https://github.com/GabrielBento299/Projeto-Cypress-cypress-SwagLabs/assets/86307663/5ef175b9-42a8-4920-9f51-d695a69576e3)

## Funcionalidade de Login
- ✔ deve fazer login com sucesso
- ✔ Deve exibir uma mensagem de erro ao inserir usuário inválido
- ✔ Deve exibir uma mensagem de erro ao inserir uma senha inválida
- ✔ Deve exibir uma mensagem de erro ao não preencher o e-mail
- ✔ Deve exibir uma mensagem de erro ao não preencher a senha
- ✔ Deve exibir mensagem de erro ao não preencher o campo email e senha
- 
![login cy js](https://github.com/GabrielBento299/Projeto-Cypress-cypress-SwagLabs/assets/86307663/ee3f1233-3261-4825-ae78-3590fb3ccdc0)


## Funcionalidade de Logout
- ✔ Deve sair com sucesso

![logout cy js](https://github.com/GabrielBento299/Projeto-Cypress-cypress-SwagLabs/assets/86307663/6e9edd55-ccc0-465c-9a22-fd48ebdc9be5)

## Funcionalidade de Ordenação
- ✔ Deve pedir pelo preço do maior para o menor
- ✔ Deve pedir pelo pelo preço baixo para maior
- ✔ Deve pedir pelo pelo nome A a Z
- ✔ Deve pedir pelo pelo nome Z a A

![ordering cy js](https://github.com/GabrielBento299/Projeto-Cypress-cypress-SwagLabs/assets/86307663/141d2a1a-71b0-45e8-90d0-830b89776fc6)


## funcionalidades de Produtos
- ✔ Deve comprar um produto com sucesso
- ✔ Deve comprar com sucesso todos os produtos

![Produto cy js](https://user-images.githubusercontent.com/86307663/236641439-f09d3ad8-405d-4f1b-bb1e-1d9c4a6d8463.gif)


# Resultado dos testes:
 ![Capturar](https://github.com/GabrielBento299/Projeto-Cypress-cypress-SwagLabs/assets/86307663/550e8c93-755c-413c-8638-1296fcec22f8)

## Pré-requisitos:
- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
#####

## Tutorial, Instalação e execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**  
```
npm install
```

### Utilizando o cypress

* Em um terminal execute o comando abaixo para abrir o cypress:
```
npx cypress open 
```

* Para executar os testes diretamente use:
```
npx cypress run 
```

Feito com 💜 &nbsp;por Gabriel Bento 👋 &nbsp;[Meu linkedin](https://www.linkedin.com/in/santosgabriel299/)
