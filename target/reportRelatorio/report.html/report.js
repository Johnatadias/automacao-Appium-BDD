$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adicionaProdutoCarrinho.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Adicionar produtos no carrinho",
  "description": "\r\nComo um usuario do sistema\r\nEu quero encontrar um produto pela tela principal\r\nPara que eu possa adicionar no carrinho de compras",
  "id": "adicionar-produtos-no-carrinho",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@adiciona_produto_no_carrinho"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Não deve adicionar mais de dez produto iguais no carrinho de compras",
  "description": "",
  "id": "adicionar-produtos-no-carrinho;não-deve-adicionar-mais-de-dez-produto-iguais-no-carrinho-de-compras",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 11,
  "name": "que o usuario esteja na tela principal",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "seleciona determinada categoria \"speakers\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "seleciona o produto \"HP Roar Plus Wireless Speaker\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "adiciona a quantidades de items para \"99\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "clica em adicionar no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o usuario é notificado com uma informação \"Oops! We only have 10 in stock. We updated your order accordingly\"",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("buscaProdutoHome.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Escolher produto atraves da tela home",
  "description": "\r\nComo um usuario do sistema\r\nEu quero encontrar um produto atraves tela home\r\nPara que eu possa obter mais informações sobre ele",
  "id": "escolher-produto-atraves-da-tela-home",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@pesquisa_produto_tela_home"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Devo escolher um produto pela tela home",
  "description": "",
  "id": "escolher-produto-atraves-da-tela-home;devo-escolher-um-produto-pela-tela-home",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 11,
  "name": "que o usuario esteja na pagina home",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "seleciona a categoria",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "seleciona o produto desejado",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o usuario deve visualizar as informações do produto",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("buscaProdutoLupa.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Filtrar produto desejado atraves da lupa de pesquisa",
  "description": "\r\nComo um usuario do sistema\r\nEu quero encontrar um produto pela lupa de pesquisa\r\nPara que eu possa obter mais informações sobre ele",
  "id": "filtrar-produto-desejado-atraves-da-lupa-de-pesquisa",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@pesquisa_produto_pela_lupa"
    }
  ]
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que o usuario esteja na tela home",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "clicar na lupa de pesquisa",
  "keyword": "Quando "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 15,
  "name": "Deve pesquisar um produto existente",
  "description": "",
  "id": "filtrar-produto-desejado-atraves-da-lupa-de-pesquisa;deve-pesquisar-um-produto-existente",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@tipo1"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "inserir a categoria \"laptops\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "selecionar o produto desejado \"HP Chromebook 14 G1(ES)\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o usuario deve visualizar as informações sobre o produto \"HP Chromebook 14 G1(ES)\"",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que o usuario esteja na tela home",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "clicar na lupa de pesquisa",
  "keyword": "Quando "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "Não deve encontrar um produto inexistente",
  "description": "",
  "id": "filtrar-produto-desejado-atraves-da-lupa-de-pesquisa;não-deve-encontrar-um-produto-inexistente",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 20,
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "inserir a categoria \"video game\"",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "o usuario deve ser notificado que o produto não existe \"No results\"",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("cadastraUsuario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 4,
  "name": "Validar cadastro",
  "description": "\r\nComo um usuario do sistema\r\nEu quero me cadastrar no site da loja\r\nPara que eu possa realizar compras",
  "id": "validar-cadastro",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@validarCadastro"
    }
  ]
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que o usuário esteja na aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "clicar em no icone user",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clicar em create new account",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 16,
  "name": "Deve cadastrar um novo usuario com sucesso",
  "description": "",
  "id": "validar-cadastro;deve-cadastrar-um-novo-usuario-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 15,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "preencher o campo username \"johnm\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencher o campo email \"a@a.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencher o campo password \"Oicara10\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "preencher o campo confirm password \"Oicara10\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencher o campo firt name \"johnata\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencher o campo last name \"dias\"",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencher o campo phone number \"1234-1234\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "selecionar o pais \"Brazil\" no campo country",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "preencher o campo city \"São paulo\"",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "preencher o campo address \"Rua xy, 182\"",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "preencher o campo state \"SP\"",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "preencher o campo postal code \"02309-030\"",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "aceitar os termos de uso",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "clicar no botão register",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "usuario é cadastrado com sucesso \"johnm\"",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que o usuário esteja na aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "clicar em no icone user",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clicar em create new account",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 34,
  "name": "Não deve cadastrar usuario existente",
  "description": "",
  "id": "validar-cadastro;não-deve-cadastrar-usuario-existente",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 33,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "preencher o campo username \"john1411\"",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "preencher o campo email \"a@a.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "preencher o campo password \"Oicara10\"",
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "preencher o campo confirm password \"Oicara10\"",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "preencher o campo firt name \"johnata\"",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "preencher o campo last name \"dias\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "preencher o campo phone number \"1234-1234\"",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "selecionar o pais \"Brazil\" no campo country",
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "preencher o campo city \"São paulo\"",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "preencher o campo address \"Rua xy, 182\"",
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "preencher o campo state \"SP\"",
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "preencher o campo postal code \"02309-030\"",
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "aceitar os termos de uso",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "clicar no botão register",
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "usuario é notificado com uma informação \"User name already exists\"",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});