Funcionalidade de Extrato:

      Cenário: Exibir saldo disponível no momento
      Dado que estou logado na minha conta bancária
      Quando acesso a funcionalidade de extrato
      Então devo ver o saldo disponível no momento
      
      Cenário: Exibir "-" quando a transação for sem comentário
      Dado que tenho uma transação sem comentário na minha conta bancária
      Quando acesso a funcionalidade de extrato
      Então devo ver "-" como comentário dessa transação
      
      Cenário: Exibir detalhes de transação
      Dado que tenho transações na minha conta bancária
      Quando acesso a funcionalidade de extrato
      Então devo ver a data, tipo de transação e valor de cada transação listada