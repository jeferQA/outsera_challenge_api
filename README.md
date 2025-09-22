# Desafio Outsera - API

Este projeto contém testes automatizados de API para o desafio Outsera.

---

## Sumário

- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Execução de testes](#execução-de-testes)
- [Estrutura do projeto](#estrutura-do-projeto)  
- [Relatórios](#relatórios)  
- [Observações adicionais](#observações-adicionais) 

---

## Pré-requisitos

- Node.js (recomendado versão X.Y.Z ou maior)  
- npm ou yarn  

---

## Instalação

Depois de clonar o repositório:

```bash
npm install
# ou
yarn install
```
---
## Execução de testes
Para rodar os testes automatizados, escolhendo uma spec, execute o comando
```bash
npx cypress open
```
Ou para executar os testes em modo headless, execute o comando
```bash
npx cypress run
```
---
## Estrutura do projeto

outsera_challenge_api/
<br>├── cypress/
<br>│   ├── e2e/api/                     ← Implementação dos testes de api
<br>│   ├── fixtures/                    ← Não utilizado no momento
<br>│   ├── support/
<br>│   └──── commands/                  ← Custom commads criados para organizar as chamadas de api   
<br>├── allure-results/                   ← resultados brutos do Allure
<br>├── allure-report/                    ← relatório gerado
<br>├── package.json
<br>├── cypress.config.js                 
<br>└── README.md

---
## Relatórios
Para rodar os testes e em sequência gerar os resultados via report Allure, execute o comando
```bash
npm run browser:chrome
```
Para poder visualizar os resultados dos testes abrindo o dashboard allure, execute o comando
```bash
npm run report:allure
```
## Observações adicionais
- Todos os comandos devem ser executados no terminal dentro da raiz do projeto (diretório onde está o package.json).
Exemplo no Windows PowerShell
```bash
cd outsera_api_challenge
npm install
npm run browser:chrome
npm run report:allure
```
- Esse projeto esta configurado para executar os testes no workflow do github, basta acessar aqui no repositório do projeto a página <b>Actions -> Run Cypress API tests -> opção Run workflow</b>
```

