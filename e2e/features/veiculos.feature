#language:pt
Funcionalidade: Veiculos 
  Como um usuário
  Eu desejo acessar a listagem de veículos
  Para que consiga visualizar dados dos veículos para compra

Contexto:
  Dado que usuário esteja na listagem de veículos

@smoketest @ios @android
Cenario: Consultar ano de veículo da lista
  Quando usuário selecionar o veículo "<veiculo>" ano "<ano>" modelo "<modelo>"
  Entao sistema exibe os detalhes do veículo
  Entao sistema exibe a cor "<cor>" do veículo
  Entao usuário retorna para listagem de veículos

  Exemplos:
  |   veiculo  |   ano   |  modelo  |   cor    |
  |    City    |   2017  |   2018   |   Azul   |
  |   Lancer   |   2012  |   2012   |  Branco  |
  |     Fit    |   2018  |   2018   |  Preto   |

@smoketest @ios @android
Cenario: Consultar valor de veículo da lista
  Quando usuário selecionar o veículo "<veiculo>" ano "<ano>" modelo "<modelo>"
  Entao sistema exibe os detalhes do veículo
  Entao sistema exibe o valor "<preco>" do veículo
  Entao usuário retorna para listagem de veículos

  Exemplos:
  |  veiculo |   ano   |  modelo |     preco     |
  |  Lancer  |   2015  |   2016  |  R$ 59.000,00 |
  |   Fit    |   2016  |   2016  |  R$ 55.000,00 |

@smoketest @ios @android
Cenario: Verificar kilometragem de veículo da lista
  Quando usuário selecionar o veículo "<veiculo>" ano "<ano>" modelo "<modelo>"
  Entao sistema exibe os detalhes do veículo
  Entao sistema exibe a kilometragem "<km>" do veículo
  Entao usuário retorna para listagem de veículos

  Exemplos:
  | veiculo  |   ano   |  modelo |    km   |
  |  Agile   |   2013  |   2014  |  12000  |
  |  Agile   |   2017  |   2018  |    0    |

@smoketest @ios @android
Cenario: Verificar versao de veículo da lista
  Quando usuário selecionar o veículo "<veiculo>" ano "<ano>" modelo "<modelo>"
  Entao sistema exibe os detalhes do veículo
  Entao sistema exibe a versao "<versao>" do veículo
  Entao usuário retorna para listagem de veículos

  Exemplos:
  |  veiculo  |   ano   |  modelo |               versao              |
  |  Ecosport |   2012  |   2013  |  1.6 FREESTYLE 16V FLEX 4P MANUAL |