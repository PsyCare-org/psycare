# PsyCare
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/PsyCare-org/psycare/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/PsyCare-org/psycare/blob/main/README.pt-br.md)

## Sobre
Repositório auxiliar do PsyCare, ele possui ferramentas de orquestração para os outros repositórios, permitindo por exemplo, rodar os dois servidores NodeJS ao mesmo tempo. Basicamente, ele usa o pacote [Concurrently](https://www.npmjs.com/package/concurrently) para executar vários comandos ao mesmo tempo.

## Começando
### Pré-requisitos
Você precisará do [NodeJS](https://nodejs.org/en/download/), e um gerenciador de pacotes de sua preferência.

### Instalação
1. Clone o repositório
   ```sh
   git clone https://github.com/PsyCare-org/psycare
   ```
2. Instale os pacotes
   ```sh
   npm install
   ```

OBS.: Certifique-se de que todos os repositórios(psycare-api, psycare-web e psycare) estejam dentro da mesma pasta raiz.

## Uso
Pode ser usado de duas maneiras diferentes:

### 1. Usando um terminal
Em um terminal, execute os scripts que estão dentro da pasta `src/`. Por exemplo, para executar front-end e back-end ao mesmo tempo, você pode executar `node src/start.js`.

### 2. Usando tarefas do VS Code
No Visual Studio Code você pode acessar o menu ***Terminal > Executar Tarefa > Start***, fazendo isso um terminal será aberto com tudo automatizado.

## Licensa
Distribuído sob a licença MIT. Veja `LICENSE.txt` para mais informações.