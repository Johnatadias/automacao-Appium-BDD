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
  "duration": 15242549701,
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
  "duration": 5583560099,
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
  "duration": 1947044800,
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
  "duration": 4206627600,
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
  "duration": 2203221701,
  "status": "passed"
});
formatter.match({
  "location": "AdicionaProdutoCarrinhoStep.adicionoNoCarrinhoDeCompras()"
});
formatter.result({
  "duration": 584027400,
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
  "duration": 1233227900,
  "status": "passed"
});
formatter.after({
  "duration": 350344199,
  "status": "passed"
});
formatter.after({
  "duration": 709246000,
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
  "duration": 15066797800,
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
  "name": "seleciona o produto desejado \"HP PRO TABLET 608 G1\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o usuario deve visualizar as informações do produto \"HP PRO TABLET 608 G1\"",
  "keyword": "Então "
});
formatter.match({
  "location": "BuscaProdutoHomeStep.queOUsuarioEstejaNaPaginaHome()"
});
formatter.result({
  "duration": 85799,
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
  "duration": 2056459601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP PRO TABLET 608 G1",
      "offset": 30
    }
  ],
  "location": "BuscaProdutoHomeStep.selecionaOProdutoDesejado(String)"
});
formatter.result({
  "duration": 2864847200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP PRO TABLET 608 G1",
      "offset": 53
    }
  ],
  "location": "BuscaProdutoHomeStep.oUsuarioDeveVisualizarAsInformaçõesDoProduto(String)"
});
formatter.result({
  "duration": 15167870100,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RSI1594\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.Advantage.aShopping.Spl..., appPackage: com.Advantage.aShopping, automationName: uiautomator2, databaseEnabled: false, desired: {appActivity: com.Advantage.aShopping.Spl..., appPackage: com.Advantage.aShopping, automationName: uiautomator2, deviceName: 89d6f0da, newCommandTimeout: 120, platformName: android, resetKeyboard: true, udid: emulator-5554, unicodeKeyboard: true}, deviceApiLevel: 24, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 7.0, resetKeyboard: true, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, unicodeKeyboard: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: b112d15b-1e32-49e7-9f56-a62590889d35\n*** Element info: {Using\u003did, value\u003dcom.Advantage.aShopping:id/textViewProductName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:70)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat br.com.rsinet_appium_bdd.screens.DescricaoProdutoScreen.validandoProdutoEscolhido(DescricaoProdutoScreen.java:16)\r\n\tat br.com.rsinet_appium_bdd.steps.BuscaProdutoHomeStep.oUsuarioDeveVisualizarAsInformaçõesDoProduto(BuscaProdutoHomeStep.java:39)\r\n\tat ✽.Então o usuario deve visualizar as informações do produto \"HP PRO TABLET 608 G1\"(buscaProdutoHome.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 348935800,
  "status": "passed"
});
formatter.after({
  "duration": 642467401,
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
  "duration": 19121504901,
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
  "duration": 95700,
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
  "duration": 2609194301,
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
  "duration": 2566211300,
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
  "duration": 43397401,
  "status": "passed"
});
formatter.after({
  "duration": 324436199,
  "status": "passed"
});
formatter.after({
  "duration": 939075400,
  "status": "passed"
});
formatter.before({
  "duration": 15229838000,
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
  "duration": 24599,
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
  "duration": 2618704100,
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
  "duration": 1039616800,
  "status": "passed"
});
formatter.after({
  "duration": 232235700,
  "status": "passed"
});
formatter.after({
  "duration": 746092800,
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
  "duration": 15499014600,
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
  "duration": 4412764901,
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
  "duration": 22276261100,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuarioStep.oUsuarioDeveSerNotificadoQueOUsuarioEstaLogado()"
});
formatter.result({
  "duration": 3199810300,
  "status": "passed"
});
formatter.after({
  "duration": 482868199,
  "status": "passed"
});
formatter.after({
  "duration": 845954199,
  "status": "passed"
});
formatter.before({
  "duration": 15154317600,
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
  "duration": 3561620200,
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
  "duration": 22392101401,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuarioStep.usuario_é_notificado_com_a_mensagem(DataTable)"
});
formatter.result({
  "duration": 1562045501,
  "status": "passed"
});
formatter.after({
  "duration": 257912800,
  "status": "passed"
});
formatter.after({
  "duration": 724615300,
  "status": "passed"
});
});