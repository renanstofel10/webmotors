# webmotors
Desafio Webmotors - Testes automatizados de UI utilizando Appium e Cucumber em Javascript.

## Pré-requisitos para rodar localmente

*  [Instalação do node](https://nodejs.org/en/download/)
*  [Instalação do npm](https://www.npmjs.com/get-npm)

#### Atenção: É necessário que a máquina esteja com todas as dependencias instaladas:

* Abrir o terminal; 
* Acessar o diretório `webmotors/e2e`;
* Usar o comando `npm install` onde se ecnontra o arquivo `package.json`.

## Inicializar servidor appium

* No diretório `webmotors/e2e`, usar os comandos abaixo:

`npm run appium` -> Este comando irá inicializar o servidor do appium na porta padrão 4723

ps: Caso possua o appium desktop também é possível incializar o servidor pelo mesmo:
* [Instalação do appium desktop](https://appium.io/downloads.html)  // Não obrigatório

## Inicializar simulador

* Existem diversas maneiras de instalarmos simuladores. Segue abaixo as formas mais convencionais através das ferramentas Xcode e AndroidStudio;

* [simuladores iOS](https://help.apple.com/simulator/mac/current/#/deve44b57b2a)
* [simuladores android](https://developer.android.com/studio/run/emulator?hl=pt-br)

* Com o simulador rodando, anote ou copie o deviceName do aparelho pois será necessário na configuração `.env` de nossa execução 

## Rodando os testes de ui

### Execução no iOS

* No step anterior anotamos o `deviceName` do aparelho e agora vamos inseri-lo no arquivo `.env` localizado na raiz do projeto e2e. Para isso, basta substituir o valor da expressão `DEVICE`;

* Abra uma nova aba no terminal "caso esteja executando o servidor do appium na aba atual" e no diretório `webmotors/e2e`, utilize o comando `npm run test-ios`.

### Visualizando report detalhado de execução dos testes no iOS

* Após a execução dos testes, será gerado um relatório `ios.json` no diretório `webmotors/e2e/reports`;
* Execute o comando `npm run report-ios` que será exibido o relatório `.html` da execução

### Execução no Android

* Assim como na execução em simuladores iOS, vamos substiuir o valor "DEVICE" do arquivo `.env` pelo deviceName utilizado em nosso simulador;

* Abra uma nova aba no terminal "caso esteja executando o servidor do appium na aba atual" e no diretório `webmotors/e2e`, utilize o comando `npm run test-android`.

### Visualizando report detalhado de execução dos testes no Android

* Após a execução dos testes, será gerado um relatório `android.json` no diretório `webmotors/e2e/reports`;
* Execute o comando `npm run report-android` que será exibido o relatório `.html` da execução

## Resumindo o projeto

* Dentro da pasta `webmotors/e2e` temos as pastas: `app`, `features`, `pages` e `reports`;

* Na pasta `app` contém o(s) arquiv(s) `.ipa` e `.apk` para instalação e execução nos simuladores;

* Na pasta `features` contém o(s) arquivo(s) `.feature` que contém a decrição dos steps e as pastas `specs`;

  * Na pasta `steps_definition` ficam os arquivos:

    * `hooks.js` onde contém as configurações iniciais e chamadas de execução: anterior(Before) e posterior(After) aos testes;
    
    * `steps.js` que contém os cenários de testes executados.

* Na pasta `pages` temos os arquivos `.js` com todas funções que serão executadas durante a realização dos testes. Além disso, encontra-se o arquivo `common.js` que contém funções reutilizadas durante os testes;

* Na pasta `reports` temos o arquivo `gerenateReport.js` responsável pela conversão e exibição dos reports em `.html;

* Na raiz do projeto também é possível visualizar os seguintes arquivos:

  *  `package.json` e `package-lock.json` arquivo com nossas dependências e os scripts

  *  `.env` arquivo com o parâmetro de execução deviceName a ser informado antes dos testes