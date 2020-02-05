#language:pt

@validarCadastro
Funcionalidade: Validar cadastro

	Como um usuario do sistema
	Eu quero me cadastrar no app da loja
	Para que eu possa realizar compras

Contexto:
	  Dado que o usuário esteja na pagina cadastro de usuário
  	
@test1
  Cenário: Deve cadastrar um novo usuario com sucesso
 		Quando realizar o cadastro com username "john718" válido
 		Então o usuario deve ser notificado que o usuario "john718" esta logado
   	
@test2
  Cenário: Deve validar campos obrigatorios
  	Quando realizar o cadastro sem preencher os campos obrigatorios
  	Então usuario é notificado com a mensagem 
  	| User name required | Email required | Password required | Confirm password required |
  	