#language: pt

@pesquisa_produto_pela_lupa
Funcionalidade: Filtrar produto desejado atraves da lupa de pesquisa
	
	Como um usuario do sistema
	Eu quero encontrar um produto pela lupa de pesquisa
	Para que eu possa obter mais informações sobre ele
	
Contexto:
	Dado que o usuario esteja na tela home do sistema
	
	@tipo1
	Cenário: Deve pesquisar um produto existente
	Quando inserir a categoria "TABLETS" na lupa de pesquisa
	E selecionar o produto desejado "HP ELITEPAD 1000 G2 TABLET"
	Então o usuario deve visualizar as informações sobre o produto "HP ELITEPAD 1000 G2 TABLET"
	
	@tipo2
	Cenário: Não deve encontrar um produto inexistente
	Quando inserir a categoria "video game" na lupa de pesquisa
	Então o usuario deve ser notificado que o produto não existe "No results"