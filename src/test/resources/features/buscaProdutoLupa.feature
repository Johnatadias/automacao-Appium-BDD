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
	Quando inserir a categoria "laptops" na lupa de pesquisa
	E selecionar o produto desejado "HP PAVILION 15Z LAPTOP"
	Então o usuario deve visualizar as informações sobre o produto "HP PAVILION 15Z LAPTOP"
	
	@tipo2
	Cenário: Não deve encontrar um produto inexistente
	Quando inserir a categoria "video game" na lupa de pesquisa
	Então o usuario deve ser notificado que o produto não existe "No results"