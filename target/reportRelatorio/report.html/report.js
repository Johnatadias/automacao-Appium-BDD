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
  "duration": 41309787000,
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
  "duration": 1860595400,
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
  "duration": 5194637400,
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
  "duration": 3102053100,
  "status": "passed"
});
formatter.match({
  "location": "AdicionaProdutoCarrinhoStep.adicionoNoCarrinhoDeCompras()"
});
formatter.result({
  "duration": 760437300,
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
  "duration": 1269738100,
  "status": "passed"
});
formatter.after({
  "duration": 1120832400,
  "status": "passed"
});
formatter.after({
  "duration": 997581100,
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
  "duration": 26592561200,
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
  "duration": 2029540500,
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
  "duration": 3813295300,
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
  "duration": 15073562500,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RSI1594\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.Advantage.aShopping.Spl..., appPackage: com.Advantage.aShopping, databaseEnabled: false, desired: {appActivity: com.Advantage.aShopping.Spl..., appPackage: com.Advantage.aShopping, deviceName: 89d6f0da, platformName: android, resetKeyboard: true, udid: 0039960624, unicodeKeyboard: true}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: 0039960624, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: 0039960624, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, resetKeyboard: true, statBarHeight: 72, takesScreenshot: true, udid: 0039960624, unicodeKeyboard: true, viewportRect: {height: 1848, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: fee16f68-5196-45e6-9366-126b0eed1f91\n*** Element info: {Using\u003did, value\u003dcom.Advantage.aShopping:id/textViewProductName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:70)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat br.com.rsinet_appium_bdd.screens.DescricaoProdutoScreen.validandoProdutoEscolhido(DescricaoProdutoScreen.java:16)\r\n\tat br.com.rsinet_appium_bdd.steps.BuscaProdutoHomeStep.oUsuarioDeveVisualizarAsInformaçõesDoProduto(BuscaProdutoHomeStep.java:42)\r\n\tat ✽.Então o usuario deve visualizar as informações do produto \"HP ELITEPAD 1000 G2 TABLET\"(buscaProdutoHome.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2378730300,
  "status": "passed"
});
formatter.after({
  "duration": 902032800,
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
  "duration": 27706838500,
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
  "duration": 2739913300,
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
  "duration": 6680746400,
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
  "duration": 82470500,
  "status": "passed"
});
formatter.after({
  "duration": 1010662000,
  "status": "passed"
});
formatter.after({
  "duration": 957033500,
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
  "duration": 26775908300,
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
  "duration": 2570153500,
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
  "duration": 2040285600,
  "status": "passed"
});
formatter.after({
  "duration": 842391800,
  "status": "passed"
});
formatter.after({
  "duration": 981631000,
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
  "duration": 33744195800,
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
  "duration": 31433508800,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuarioStep.oUsuarioDeveSerNotificadoQueOUsuarioEstaLogado()"
});
formatter.result({
  "duration": 775496700,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element \u0027By.id: com.Advantage.aShopping:id/imageViewMenu\u0027 does not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RSI1594\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.Advantage.aShopping.Spl..., appPackage: com.Advantage.aShopping, databaseEnabled: false, desired: {appActivity: com.Advantage.aShopping.Spl..., appPackage: com.Advantage.aShopping, deviceName: 89d6f0da, platformName: android, resetKeyboard: true, udid: 0039960624, unicodeKeyboard: true}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: 0039960624, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: 0039960624, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, resetKeyboard: true, statBarHeight: 72, takesScreenshot: true, udid: 0039960624, unicodeKeyboard: true, viewportRect: {height: 1848, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: a7cebba8-ec98-4c1d-a2fa-b45141fda6b6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat br.com.rsinet_appium_bdd.screens.HomeScreen.clicarMenuNaHomePage(HomeScreen.java:13)\r\n\tat br.com.rsinet_appium_bdd.screens.HomeScreen.assertNovoUsuario(HomeScreen.java:25)\r\n\tat br.com.rsinet_appium_bdd.steps.CadastraUsuarioStep.oUsuarioDeveSerNotificadoQueOUsuarioEstaLogado(CadastraUsuarioStep.java:55)\r\n\tat ✽.Então o usuario deve ser notificado que o usuario esta logado(cadastraUsuario.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 998746100,
  "status": "passed"
});
formatter.after({
  "duration": 971038000,
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
  "duration": 32025487000,
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
  "duration": 31195328000,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuarioStep.usuario_é_notificado_com_a_mensagem(DataTable)"
});
formatter.result({
  "duration": 4646830900,
  "status": "passed"
});
formatter.after({
  "duration": 856915400,
  "status": "passed"
});
formatter.after({
  "duration": 926965900,
  "status": "passed"
});
});