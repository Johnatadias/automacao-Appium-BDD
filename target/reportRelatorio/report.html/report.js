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
  "duration": 24341552900,
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
  "duration": 7081418600,
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
  "duration": 3936283600,
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
  "duration": 2751034700,
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
  "duration": 3015726700,
  "status": "passed"
});
formatter.match({
  "location": "AdicionaProdutoCarrinhoStep.adicionoNoCarrinhoDeCompras()"
});
formatter.result({
  "duration": 635298500,
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
  "duration": 1290555100,
  "status": "passed"
});
formatter.after({
  "duration": 958230800,
  "status": "passed"
});
formatter.after({
  "duration": 1273639800,
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
  "duration": 19697282300,
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
  "duration": 104700,
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
  "duration": 1135589600,
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
  "duration": 3421177400,
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
  "duration": 731046500,
  "status": "passed"
});
formatter.after({
  "duration": 1152511200,
  "status": "passed"
});
formatter.after({
  "duration": 866252900,
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
  "duration": 19699904300,
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
  "duration": 92100,
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
  "duration": 2349986000,
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
  "duration": 2870577600,
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
  "duration": 207657400,
  "status": "passed"
});
formatter.after({
  "duration": 867322200,
  "status": "passed"
});
formatter.after({
  "duration": 1134530500,
  "status": "passed"
});
formatter.before({
  "duration": 19811108200,
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
  "duration": 34100,
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
  "duration": 2577647300,
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
  "duration": 1131277200,
  "status": "passed"
});
formatter.after({
  "duration": 599605300,
  "status": "passed"
});
formatter.after({
  "duration": 953604900,
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
  "duration": 21109972800,
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
  "duration": 3152567500,
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
  "duration": 29617873500,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuarioStep.oUsuarioDeveSerNotificadoQueOUsuarioEstaLogado()"
});
formatter.result({
  "duration": 822918900,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: androidx.test.uiautomator.StaleObjectException\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-U784KFP\u0027, ip: \u002710.0.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.Advantage.aShopping.Spl..., appPackage: com.Advantage.aShopping, databaseEnabled: false, desired: {appActivity: com.Advantage.aShopping.Spl..., appPackage: com.Advantage.aShopping, deviceName: 89d6f0da, platformName: android, resetKeyboard: true, udid: 10.0.0.101:5555, unicodeKeyboard: true}, deviceApiLevel: 28, deviceManufacturer: Xiaomi, deviceModel: Mi 9 SE, deviceName: 10.0.0.101:5555, deviceScreenDensity: 480, deviceScreenSize: 1080x2340, deviceUDID: 10.0.0.101:5555, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 9, resetKeyboard: true, statBarHeight: 81, takesScreenshot: true, udid: 10.0.0.101:5555, unicodeKeyboard: true, viewportRect: {height: 2048, left: 0, top: 81, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: b0d41462-b0c3-400f-b396-e91e18adaeab\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat br.com.rsinet_appium_bdd.screens.HomeScreen.clicarMenuNaHomePage(HomeScreen.java:16)\r\n\tat br.com.rsinet_appium_bdd.screens.HomeScreen.assertNovoUsuario(HomeScreen.java:25)\r\n\tat br.com.rsinet_appium_bdd.steps.CadastraUsuarioStep.oUsuarioDeveSerNotificadoQueOUsuarioEstaLogado(CadastraUsuarioStep.java:60)\r\n\tat ✽.Então o usuario deve ser notificado que o usuario esta logado(cadastraUsuario.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 680869700,
  "status": "passed"
});
formatter.after({
  "duration": 1067954000,
  "status": "passed"
});
formatter.before({
  "duration": 22983033200,
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
  "duration": 3760597700,
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
  "duration": 29876929800,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuarioStep.usuario_é_notificado_com_a_mensagem(DataTable)"
});
formatter.result({
  "duration": 2963365200,
  "status": "passed"
});
formatter.after({
  "duration": 709638900,
  "status": "passed"
});
formatter.after({
  "duration": 1215968600,
  "status": "passed"
});
});