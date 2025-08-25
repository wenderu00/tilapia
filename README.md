# Projeto de Gerenciamento de Tilápias

Este projeto é um sistema de gerenciamento de tilápias construído com uma arquitetura moderna e ferramentas de ponta. A sua estrutura foi cuidadosamente desenhada para ser escalável, de fácil manutenção e testável, seguindo os princípios da Clean Architecture.

---

### Visão Geral da Arquitetura

A arquitetura do projeto é baseada no modelo de **Clean Architecture**, onde o fluxo de dependências é sempre de fora para dentro. Isso significa que as regras de negócio centrais são independentes de frameworks, bancos de dados, interfaces de usuário ou qualquer outra tecnologia externa. Isso nos permite trocar componentes externos (como o banco de dados ou a interface de usuário) sem afetar a lógica de negócio principal.

As camadas principais são:

1.  **Entidades:** Contém as regras de negócio e os objetos centrais da aplicação (ex: `Tilapia`, `Alimentacao`, `QualidadeDaAgua`).
2.  **Casos de Uso:** Orquestra a lógica de negócio específica da aplicação (ex: `RegistrarCrescimentoDeTilapia`, `GerarRelatorioDeAlimentacao`).
3.  **Adaptadores de Interface:** Traduzem os dados entre a camada de Casos de Uso e o mundo externo (ex: API REST, UI do sistema).
4.  **Frameworks & Drivers:** Camada mais externa, que lida com a tecnologia e infraestrutura (ex: servidor web, banco de dados, interface de usuário).

---

### Pilha de Tecnologia (Tech Stack)

A seguir, a lista de ferramentas e tecnologias utilizadas no projeto, agrupadas por sua função na arquitetura:

* **Linguagem de Programação:**
    * **TypeScript:** Utilizado em todas as camadas para garantir tipagem estática e um código mais seguro, limpo e com menos erros.
    * **JavaScript:** O runtime por trás de todas as operações, especialmente no Node.js.

* **Backend & APIs:**
    * **Node.js:** O ambiente de execução para toda a lógica de servidor.
    * **NestJS:** Um framework robusto para construir a API, que já segue o padrão de arquitetura modular, facilitando a implementação da Clean Architecture.
    * **Express:** O framework web subjacente ao NestJS, podendo ser usado diretamente em serviços mais simples.
    * **Node-RED:** Uma ferramenta *low-code* para prototipagem rápida e automação de fluxos de dados, ideal para integrar com hardware ou sistemas externos (ex: um sensor de qualidade de água).

* **Frontend & UI:**
    * **React:** A biblioteca de interface de usuário para construir os componentes visuais.
    * **Next.js:** O framework que hospeda a aplicação React, oferecendo renderização no lado do servidor (SSR) e otimizações de performance.

* **Aplicações Desktop:**
    * **Electron:** Empacota a aplicação web (React/Next.js) como um aplicativo de desktop, permitindo que o mesmo código seja usado em múltiplos ambientes.

* **Testes e Qualidade de Código:**
    * **ESLint:** Análise de código estático para manter um estilo de código consistente e identificar problemas de forma antecipada.
    * **Jest:** Framework de testes unitários e de integração para garantir a funcionalidade da lógica de negócio e dos componentes.
    * **Stryker Mutator:** Ferramenta de **teste de mutação** que avalia a qualidade dos seus testes, revelando lacunas na cobertura de testes.
    * **CodeceptJS:** Framework de testes de ponta a ponta (E2E) que simula o comportamento de um usuário na interface, garantindo que o sistema completo funcione como esperado.

---

### Como as Ferramentas se Complementam

1.  **Da Interface ao Core do Sistema:** Um usuário interage com o sistema através da interface **React** (ou no desktop via **Electron**), acionando uma ação. A requisição viaja até a API construída com **NestJS**, que age como um **Adaptador de Interface**.

2.  **Lógica de Negócio:** O **NestJS** invoca um **Caso de Uso** escrito em **TypeScript**, que contém a lógica para manipular as **Entidades** (como `Tilapia`). Essa lógica é pura e independente de qualquer framework, facilitando a sua manutenção e garantindo sua estabilidade.

3.  **Qualidade e Confiabilidade:**
    * **ESLint** garante que o código em todas as camadas siga um padrão de alta qualidade.
    * **Jest** testa o **Caso de Uso** (lógica de negócio) e os componentes **React** para garantir que funcionem de forma isolada e em conjunto.
    * **Stryker Mutator** é usado para verificar se os testes com **Jest** são realmente eficazes, identificando códigos que não estão sendo devidamente testados.
    * **CodeceptJS** simula um usuário para testar o sistema de ponta a ponta, verificando se a interface (**React/Next.js**) está se comunicando corretamente com a API (**NestJS**).

4.  **Flexibilidade de Fluxos:** O **Node-RED** pode ser utilizado para criar fluxos de integração com dados de sensores ou outros sistemas, agindo como um Adaptador de Interface que se conecta diretamente com a API do **NestJS** ou com o banco de dados.

Com esta arquitetura e conjunto de ferramentas, você pode rapidamente dar vazão a demandas de software, garantindo que cada novo projeto tenha uma base sólida, reutilizável e de alta qualidade.
