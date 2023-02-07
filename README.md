# Cartão de Crédito Válido

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Objetivos gerais](#2-objetivo-gerais)
* [3. Funcionamento da aplicação](#3-funcionamento-da-aplicação)
* [4. Descrição de scripts/funcionalidades](#4-descrição-de-scripts/funcionalidades)
* [5. Deploy](#5-deploy)

## 1. Resumo do projeto

Esta página foi criada para fazer a validação de qualquer tipo de cartão de crétido antes de seguir para a finalização de compra na loja Shop Shop.

## 2. Objetivos gerais

Permitir que o usuário seja encaminhado para o pagamento somente a partir da confirmação de que possui um cartão de crédito válido. Todos os usuários que decidirem partir para o check out de sua compra passarão obrigatoriamente por essa validação antes de prosseguir com o pagamento. O intuito é que o usuário não precise fornecer vários dados antes de saber se o cartão será aceito. Isso poupa tempo do usuário, que por vezes preenche vários campos e somente quando clica em ˜pagar"descobre que o cartão não é válido ou foi digitado incorretamente.

## 3. Funcionamento da aplicação

* Inserir o número que deseja validar, usando apenas caracteres
  numéricos (dígitos) no cartão para validar [0-9].
* Constatar se o resultado é válido ou não.
* Caso seja válido, o campo é limpo. Caso inválido, os número se mantém para checar o que foi digitado errado.
* O número digitado no campo vai aparecendo no modelo de cartão, com aplicação automática de máscara exceto nos últimos 4 caracteres.
* Não é possível inserir um campo vazio.

## 4. Descrição de scripts/funcionalidades

* `src/validator.js`: aqui está implementado o objeto `validator`, que contém
  dois métodos:
  - `validator.isValid(numeroDoCartao)`: `numeroDoCartao` é um `string`
    com o número do cartão a ser verificado. Esta função retorna um
    `boolean`, dependendo de sua validade, de acordo com o [algoritmo de
    Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).
  - `validator.maskify(numeroDoCartao)`: `numeroDoCartao` é um `string`
    com o número do cartão e esta função retorna um `string` onde todos,
    exceto os últimos quatro caracteres, são substituídos por (`#`). Essa função mantém os quatro últimos caracteres intactos,
    mesmo quando o `string` for mais curto.
* `test/validator.spec.js`: este arquivo contem alguns testes para `validator.isValid()` e `validator.maskify()`.

## 5. Deploy

Neste este projeto foi utilizado o Github Pages, usando o comando `npm run deploy`. A partir disso é feito o deploy de toda a pasta `./src`.
