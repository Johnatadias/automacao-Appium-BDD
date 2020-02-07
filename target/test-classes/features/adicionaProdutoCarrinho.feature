#language: pt

@adiciona_produto_no_carrinho
Funcionalidade: Adicionar produtos no carrinho
	
	Como um usuario do sistema
	Eu quero encontrar um produto pela tela principal
	Para que eu possa adicionar no carrinho de compras

Esquema do Cenário: Não deve adicionar mais que dez produtos iguais no carrinho de compras
	Dado que o usuario esteja logado na tela principal
	Quando seleciona determinada categoria "<categoria>"
	E seleciona o produto "<produto>"
	E adiciona a quantidades de items para "<colocarQuantidade>"
	E adiciono no carrinho de compras
	Então deve existir "<quantidadeEsperada>" itens no carrinho
	
Exemplos:
| categoria | produto 													|	 colocarQuantidade  |  quantidadeEsperada |
| Laptops   | HP CHROMEBOOK 14 G1(ENERGY STAR)	|  99									|		10								|