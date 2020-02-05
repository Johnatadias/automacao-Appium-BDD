#language: pt

@adiciona_produto_no_carrinho
Funcionalidade: Adicionar produtos no carrinho
	
	Como um usuario do sistema
	Eu quero encontrar um produto pela tela principal
	Para que eu possa adicionar no carrinho de compras

Cenario: Não deve adicionar mais de dez produto iguais no carrinho de compras
	Dado que o usuario esteja na tela principal
	Quando seleciona determinada categoria "speakers"
	E seleciona o produto "HP Roar Plus Wireless Speaker"
	E adiciona a quantidades de items para "99"
	E clica em adicionar no carrinho
	Então o usuario é notificado com uma informação "Oops! We only have 10 in stock. We updated your order accordingly"