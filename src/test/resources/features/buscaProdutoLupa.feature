#language: pt

@pesquisa_produto_pela_lupa
Funcionalidade: Filtrar produto desejado atraves da lupa de pesquisa
	
	Como um usuario do sistema
	Eu quero encontrar um produto pela lupa de pesquisa
	Para que eu possa obter mais informações sobre ele
	
Contexto:
	Dado que o usuario esteja na tela home 
	Quando clicar na lupa de pesquisa
	
	@tipo1
	Cenário: Deve pesquisar um produto existente
	E inserir a categoria "laptops"
	E selecionar o produto desejado "HP Chromebook 14 G1(ES)"
	Então o usuario deve visualizar as informações sobre o produto "HP Chromebook 14 G1(ES)"
	
	@tipo2
	Cenário: Não deve encontrar um produto inexistente
	E inserir a categoria "video game"
	Então o usuario deve ser notificado que o produto não existe "No results"