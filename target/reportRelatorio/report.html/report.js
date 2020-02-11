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
formatter.scenarioOutline({
  "line": 10,
  "name": "Não deve adicionar mais que dez produtos iguais no carrinho de compras",
  "description": "",
  "id": "adicionar-produtos-no-carrinho;não-deve-adicionar-mais-que-dez-produtos-iguais-no-carrinho-de-compras",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 11,
  "name": "que o usuario esteja logado na tela principal",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "seleciona determinada categoria \"\u003ccategoria\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "seleciona o produto \"\u003cproduto\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "adiciona a quantidades de items para \"\u003ccolocarQuantidade\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "adiciono no carrinho de compras",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "deve existir \"\u003cquantidadeEsperada\u003e\" itens no carrinho",
  "keyword": "Então "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "adicionar-produtos-no-carrinho;não-deve-adicionar-mais-que-dez-produtos-iguais-no-carrinho-de-compras;",
  "rows": [
    {
      "cells": [
        "categoria",
        "produto",
        "colocarQuantidade",
        "quantidadeEsperada"
      ],
      "line": 19,
      "id": "adicionar-produtos-no-carrinho;não-deve-adicionar-mais-que-dez-produtos-iguais-no-carrinho-de-compras;;1"
    },
    {
      "cells": [
        "Laptops",
        "HP CHROMEBOOK 14 G1(ENERGY STAR)",
        "99",
        "10"
      ],
      "line": 20,
      "id": "adicionar-produtos-no-carrinho;não-deve-adicionar-mais-que-dez-produtos-iguais-no-carrinho-de-compras;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 23347817500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Não deve adicionar mais que dez produtos iguais no carrinho de compras",
  "description": "",
  "id": "adicionar-produtos-no-carrinho;não-deve-adicionar-mais-que-dez-produtos-iguais-no-carrinho-de-compras;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@adiciona_produto_no_carrinho"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que o usuario esteja logado na tela principal",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "seleciona determinada categoria \"Laptops\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "seleciona o produto \"HP CHROMEBOOK 14 G1(ENERGY STAR)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "adiciona a quantidades de items para \"99\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "adiciono no carrinho de compras",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "deve existir \"10\" itens no carrinho",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "AdicionaProdutoCarrinhoStep.queOUsuarioEstejaLogadoNaTelaPrincipal()"
});
formatter.result({
  "duration": 7621609800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops",
      "offset": 33
    }
  ],
  "location": "AdicionaProdutoCarrinhoStep.selecionaDeterminadaCategoria(String)"
});
formatter.result({
  "duration": 680685300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP CHROMEBOOK 14 G1(ENERGY STAR)",
      "offset": 21
    }
  ],
  "location": "AdicionaProdutoCarrinhoStep.selecionaOProduto(String)"
});
formatter.result({
  "duration": 3219841000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 38
    }
  ],
  "location": "AdicionaProdutoCarrinhoStep.adicionaAQuantidadesDeItemsPara(String)"
});
formatter.result({
  "duration": 2400586600,
  "status": "passed"
});
formatter.match({
  "location": "AdicionaProdutoCarrinhoStep.adicionoNoCarrinhoDeCompras()"
});
formatter.result({
  "duration": 683557800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "AdicionaProdutoCarrinhoStep.deveExistirItensNoCarrinho(String)"
});
formatter.result({
  "duration": 1316288100,
  "status": "passed"
});
formatter.after({
  "duration": 730498800,
  "status": "passed"
});
formatter.after({
  "duration": 651732800,
  "status": "passed"
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
  "description": "\r\nComo um usuario do sistema\r\nEu quero encontrar um produto atraves da tela home\r\nPara que eu possa obter mais informações sobre ele",
  "id": "escolher-produto-atraves-da-tela-home",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@pesquisa_produto_tela_home"
    }
  ]
});
formatter.before({
  "duration": 17346009300,
  "status": "passed"
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
  "name": "seleciona a categoria \"TABLETS\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "seleciona o produto desejado \"HP ELITEPAD 1000 G2 TABLET\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o usuario deve visualizar as informações do produto \"HP ELITEPAD 1000 G2 TABLET\"",
  "keyword": "Então "
});
formatter.match({
  "location": "BuscaProdutoHomeStep.queOUsuarioEstejaNaPaginaHome()"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TABLETS",
      "offset": 23
    }
  ],
  "location": "BuscaProdutoHomeStep.selecionaACategoria(String)"
});
formatter.result({
  "duration": 2042385400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP ELITEPAD 1000 G2 TABLET",
      "offset": 30
    }
  ],
  "location": "BuscaProdutoHomeStep.selecionaOProdutoDesejado(String)"
});
formatter.result({
  "duration": 3115509700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP ELITEPAD 1000 G2 TABLET",
      "offset": 53
    }
  ],
  "location": "BuscaProdutoHomeStep.oUsuarioDeveVisualizarAsInformaçõesDoProduto(String)"
});
formatter.result({
  "duration": 221487800,
  "status": "passed"
});
formatter.after({
  "duration": 883054300,
  "status": "passed"
});
formatter.after({
  "duration": 639299500,
  "status": "passed"
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
formatter.before({
  "duration": 19105164900,
  "status": "passed"
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
  "name": "que o usuario esteja na tela home do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "BuscaProdutoLupaStep.queOUsuarioEstejaNaTelaHomeDoSistema()"
});
formatter.result({
  "duration": 59400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Deve pesquisar um produto existente",
  "description": "",
  "id": "filtrar-produto-desejado-atraves-da-lupa-de-pesquisa;deve-pesquisar-um-produto-existente",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@tipo1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "inserir a categoria \"laptops\" na lupa de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "selecionar o produto desejado \"HP PAVILION 15Z LAPTOP\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o usuario deve visualizar as informações sobre o produto \"HP PAVILION 15Z LAPTOP\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "laptops",
      "offset": 21
    }
  ],
  "location": "BuscaProdutoLupaStep.inserirACategoriaNaLupaDePesquisa(String)"
});
formatter.result({
  "duration": 2547226000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP PAVILION 15Z LAPTOP",
      "offset": 31
    }
  ],
  "location": "BuscaProdutoLupaStep.selecionarOProdutoDesejado(String)"
});
formatter.result({
  "duration": 2197998000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP PAVILION 15Z LAPTOP",
      "offset": 58
    }
  ],
  "location": "BuscaProdutoLupaStep.oUsuarioDeveVisualizarAsInformaçõesSobreOProduto(String)"
});
formatter.result({
  "duration": 868574700,
  "status": "passed"
});
formatter.after({
  "duration": 784865700,
  "status": "passed"
});
formatter.after({
  "duration": 633785700,
  "status": "passed"
});
formatter.before({
  "duration": 25857199200,
  "status": "passed"
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
  "name": "que o usuario esteja na tela home do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "BuscaProdutoLupaStep.queOUsuarioEstejaNaTelaHomeDoSistema()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Não deve encontrar um produto inexistente",
  "description": "",
  "id": "filtrar-produto-desejado-atraves-da-lupa-de-pesquisa;não-deve-encontrar-um-produto-inexistente",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 19,
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "inserir a categoria \"video game\" na lupa de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "o usuario deve ser notificado que o produto não existe \"No results\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "video game",
      "offset": 21
    }
  ],
  "location": "BuscaProdutoLupaStep.inserirACategoriaNaLupaDePesquisa(String)"
});
formatter.result({
  "duration": 2310314800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No results",
      "offset": 56
    }
  ],
  "location": "BuscaProdutoLupaStep.oUsuarioDeveSerNotificadoQueOProdutoNãoExiste(String)"
});
formatter.result({
  "duration": 1112521900,
  "status": "passed"
});
formatter.after({
  "duration": 549955700,
  "status": "passed"
});
formatter.after({
  "duration": 579450300,
  "status": "passed"
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
  "description": "\r\nComo um usuario do sistema\r\nEu quero me cadastrar no app da loja\r\nPara que eu possa realizar compras",
  "id": "validar-cadastro",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@validarCadastro"
    }
  ]
});
formatter.before({
  "duration": 18135857900,
  "status": "passed"
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
  "name": "que o usuário esteja na pagina cadastro de usuário",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastraUsuarioStep.que_o_usuário_esteja_na_pagina_cadastro_de_usuário()"
});
formatter.result({
  "duration": 3171942400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Deve cadastrar um novo usuario com sucesso",
  "description": "",
  "id": "validar-cadastro;deve-cadastrar-um-novo-usuario-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "realizar um cadastro válido",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "o usuario deve ser notificado que o usuario esta logado",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastraUsuarioStep.realizarUmCadastroVálido()"
});
formatter.result({
  "duration": 29828085400,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuarioStep.oUsuarioDeveSerNotificadoQueOUsuarioEstaLogado()"
});
formatter.result({
  "duration": 3919583100,
  "status": "passed"
});
formatter.after({
  "duration": 802604800,
  "status": "passed"
});
formatter.after({
  "duration": 631200000,
  "status": "passed"
});
formatter.before({
  "duration": 18806341700,
  "status": "passed"
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
  "name": "que o usuário esteja na pagina cadastro de usuário",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastraUsuarioStep.que_o_usuário_esteja_na_pagina_cadastro_de_usuário()"
});
formatter.result({
  "duration": 3181528700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve validar campos obrigatorios",
  "description": "",
  "id": "validar-cadastro;deve-validar-campos-obrigatorios",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 18,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "realizar o cadastro sem preencher os campos obrigatorios",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "usuario é notificado com a mensagem",
  "rows": [
    {
      "cells": [
        "User name required",
        "Email required",
        "Password required",
        "Confirm password required"
      ],
      "line": 22
    }
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CadastraUsuarioStep.realizar_o_cadastro_sem_preencher_os_campos_obrigatorios()"
});
formatter.result({
  "duration": 29837641800,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuarioStep.usuario_é_notificado_com_a_mensagem(DataTable)"
});
formatter.result({
  "duration": 3089149800,
  "status": "passed"
});
formatter.after({
  "duration": 592147900,
  "status": "passed"
});
formatter.after({
  "duration": 650445300,
  "status": "passed"
});
});