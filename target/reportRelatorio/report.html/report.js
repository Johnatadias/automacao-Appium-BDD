$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cadastraUsuario.feature");
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
  "location": "CadastraUsuarioTest.que_o_usuário_esteja_na_pagina_cadastro_de_usuário()"
});
formatter.result({
  "duration": 29303104100,
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
  "name": "realizar o cadastro com username \"john718\" válido",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "o usuario deve ser notificado que o usuario \"john718\" esta logado",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "john718",
      "offset": 34
    }
  ],
  "location": "CadastraUsuarioTest.realizar_o_cadastro_com_username_válido(String)"
});
formatter.result({
  "duration": 31413920300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john718",
      "offset": 45
    }
  ],
  "location": "CadastraUsuarioTest.o_usuario_deve_ser_notificado_que_o_usuario_esta_logado(String)"
});
formatter.result({
  "duration": 3340926600,
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
  "location": "CadastraUsuarioTest.que_o_usuário_esteja_na_pagina_cadastro_de_usuário()"
});
formatter.result({
  "duration": 22257965400,
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
  "location": "CadastraUsuarioTest.realizar_o_cadastro_sem_preencher_os_campos_obrigatorios()"
});
formatter.result({
  "duration": 30799385600,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuarioTest.usuario_é_notificado_com_a_mensagem(DataTable)"
});
formatter.result({
  "duration": 3366768100,
  "status": "passed"
});
});