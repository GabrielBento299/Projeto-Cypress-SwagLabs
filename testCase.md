Funcionalidade de Carrinho:

    Cenário: Adicionar um produto ao carrinho com sucesso
    Dado que tenha um produto disponível na loja
    Quando eu adiciono um produto ao carrinho
    Então o produto deve ser exibido no meu carrinho
    E o total de itens no meu carrinho deve ser atualizado

    Cenário: Adicionar todos os produtos ao carrinho com sucesso
    Dado que tenha produtos disponíveis na loja
    Quando eu adiciono todos os produtos ao meu carrinho
    Então todos os produtos devem ser exibidos no meu carrinho
    E o total de itens no meu carrinho deve ser atualizado corretamente

    Cenário: Remover um produto do carrinho com sucesso
    Dado que eu tenha um produto no meu carrinho
    Quando eu removo o produto do meu carrinho
    Então o produto deve ser removido do meu carrinho
    E o total de itens no meu carrinho deve ser atualizado corretamente

    Cenário: Remover todos os produtos do carrinho com sucesso
    Dado que eu tenha produtos no meu carrinho
    Quando eu removo todos os produtos do meu carrinho
    Então os produtos deve ser removido do meu carrinho
    E o total de itens no meu carrinho deve ser atualizado corretamente

<------------------------------------------------------------------------------><------------------------------------------------------------------------->


Funcionalidade de Links:

    Cenário: Abrir links e ser redirecionado para cada um deles com sucesso
    Dado que eu tenha links disponíveis para acesasr
    Quando eu clico em cada um dos links
    Então devo ser redirecionado para a página correspondente com sucesso
    
<------------------------------------------------------------------------------><------------------------------------------------------------------------->


Funcionalidade de Login:

    Cenário: Deve fazer login com sucesso
    Dado que estou na página de login
    Quando insiro um usuário e senha válidos
    Então devo ser redirecionado para a página inicial
    E devo ver uma mensagem de boas-vindas

    Cenário: Deve exibir uma mensagem de erro ao inserir usuário inválido
    Dado que estou na página de login
    Quando insiro um usuário inválido
    E insiro uma senha válida
    Então devo ver uma mensagem de erro indicando que o usuário é inválido

    Cenário: Deve exibir uma mensagem de erro ao inserir uma senha inválida
    Dado que estou na página de login
    Quando insiro um usuário válido
    E insiro uma senha inválida
    Então devo ver uma mensagem de erro indicando que a senha é inválida
    
    Cenário: Deve exibir uma mensagem de erro ao não preencher o e-mail
    Dado que estou na página de login
    Quando não insiro um e-mail
    E insiro uma senha válida
    Então devo ver uma mensagem de erro indicando que o e-mail é obrigatório

    Cenário: Deve exibir uma mensagem de erro ao não preencher a senha
    Dado que estou na página de login
    Quando insiro um e-mail válido
    E não insiro uma senha
    Então devo ver uma mensagem de erro indicando que a senha é obrigatória   
    
    Cenário: Deve exibir mensagem de erro ao não preencher o campo email e senha
    Dado que estou na página de login
    Quando não insiro um e-mail
    E não insiro uma senha
    Então devo ver mensagens de erro indicando que o e-mail e a senha são obrigatórios

<------------------------------------------------------------------------------><------------------------------------------------------------------------->


Funcionalidade de Logout:

    Cenário: Deve sair com sucesso
    Dado que estou autenticado na aplicação
    Quando clico no botão de "Sair" ou "Logout"
    Então devo ser redirecionado para a página de login

<------------------------------------------------------------------------------><------------------------------------------------------------------------->


Funcionalidade de Ordenação:

    Cenário: Deve pedir pelo preço do maior para o menor
    Dado que estou na página de produtos
    Quando seleciono a opção de ordenar pelo preço do maior para o menor
    Então os produtos devem ser exibidos ordenados pelo preço, do maior para o menor

    Cenário: Deve pedir pelo pelo preço baixo para maior
    Dado que estou na página de produtos
    Quando seleciono a opção de ordenar pelo preço do menor para o maior
    Então os produtos devem ser exibidos ordenados pelo preço, do menor para o maior

    Cenário: Deve pedir pelo pelo nome A a Z
    Dado que estou na página de produtos
    Quando seleciono a opção de ordenar pelo nome de A a Z
    Então os produtos devem ser exibidos ordenados pelo nome, de A a Z

    Cenário: Deve pedir pelo pelo nome Z a A
    Dado que estou na página de produtos
    Quando seleciono a opção de ordenar pelo nome de Z a A
    Então os produtos devem ser exibidos ordenados pelo nome, de Z a A

<------------------------------------------------------------------------------><------------------------------------------------------------------------->


Funcionalidade de Produtos:

    Cenário: Deve comprar um produto com sucesso
    Dado que estou na página do produto desejado
    Quando clico no botão de "Comprar"
    E preencho as informações de pagamento e entrega corretamente
    Então devo receber uma mensagem de confirmação de compra

    Cenário: Deve comprar com sucesso todos os produtos
    Dado que tenho vários produtos no meu carrinho
    Quando clico no botão de "Comprar Todos"
    E preencho as informações de pagamento e entrega corretamente
    Então devo receber uma mensagem de confirmação de compra
