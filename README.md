# Projeto_livraria_cultura

## 📑 Objetivo
Projeto educacional da universidade UTFPR que implementa uma aplicação web inspirada na Livraria Cultura, visando o aprendizado prático do uso de frameworks.

### 🚀 Pricipais funcionalidades
- Busca de Livros
- Exibição de Descrição dos Livros
- Responsividade e Design

## 💡 Dados do projeto
- Para um melhor detalhamento do tema do projeto, objtivo, funcionalidades e site e imagens de inspiração: [Detalhes de temas e objetivos e demais dados.pdf](https://github.com/user-attachments/files/19728128/Tema_do_projeto_Natalia_lupp.pdf)

- Informaçõe detalhadas sobre decisões de design system: [Decisoes_design_system.pdf](https://github.com/user-attachments/files/19824875/Natalia_lupp_decisoes_design_system.pdf)

- Detalhamento sobre o armazenamento dos dados e suas entidades: [Armazenamento_de_dados.pdf](https://github.com/user-attachments/files/19824876/Natalia_lupp_Armazenamento_de_dados.pdf)

### Design das Telas
A telas foram desenvolvidas utilizando a plataforma Figma e se encontra no seguinte link: [Prototipo de telas projeto Livraria cultura](https://www.figma.com/design/g9iGwfOHeHWNfYg65KNpr0/Projeto_livraria?node-id=0-1&p=f&t=wgOxMKRZf1vM6AGc-0)

### Ferramentas de desenvolvimento:
Aplicação foi desenvolvido com:
- HTM, CSS e JavaScript.
  
- JSON Server, para criação de banco de dados local fake.
  
- APIs publica para endereços de usuario e lista de livro.
  
- Bootstrap framework.
  
- Compoentes web.

### Dependências JavaScript
- **JQuery** - Para realizar animações.

- **JSON Server** - Para simular uma API Rest. //ver se apaga isso

## Site em Produção - GitHub Pages
Projeto hospedado via github pages que se encontra no link:
https://natalia-lupp.github.io/Projeto_livraria_cultura/


## Video explicativo de como foi feito o site e funcionamento
[Video explicativo de funcionalidades e produção](https://drive.google.com/file/d/1voIQUuHDrL1nnQ2kc8WaB6fGi-Fut42d/view?usp=drive_link)

## ✍️ Autor
Aluna do quarto sementre do curso de TSI da UTFPR

[Natalia Rodrigues Lupp](https://github.com/natalia-Lupp)

## Telas da aplicação
![1_tela_inicial](https://github.com/user-attachments/assets/d7f5ebda-0961-4aaf-b564-d51bb80a6248)
![2_tela_inicial](https://github.com/user-attachments/assets/9965d515-d0a2-4384-b744-fc55e94efc1f)
![3_tela_inicial](https://github.com/user-attachments/assets/e49d4f2d-a786-4056-af1e-f7d386f368a0)



## Solução de Problemas que Podem vir a enfrentar no Projeto
-**Problemas com paginas HTML ao criar arquivo .gitignore**
Caso ocorra o problema das paginas html não estarem sendo mostradas e sim a estrutura de pastas ao iniciar a extenção live server, após acriação do arquivo .gitignore e a estrutura de pastas estiver correta, atualize o projeto com F5 e atualize o live server com o projeto aberto apertando as teclas ALT + R feche o projeto e abra novamente.
Isso normalmente resolve o problema, caso não funcione desistale e reinstale o live-server.

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server` 
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API Fake (JSON Server) via um dos seguintes comandos: 
  - Execução via script registrado no `package.json`: `npm run json:server:routes` 
  - Ou via Execução explícita: `json-server --watch db.json --routes routes.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Executar o projeto frontend.

## Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

#### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.
- [x] ID0 - Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de design como Figma, Quant UX ou Sketch.
- [x] ID01 - Implementa um layout responsivo de uma página web utilizando um Framework CSS, como Bootstrap, Materialize ou Tailwind (com DaisyUI), aproveitando as técnicas de Flexbox ou Grid oferecidas pelo próprio framework, garantindo que o layout se adapte adequadamente a diferentes tamanhos de tela e dispositivos.
- [x] ID 02 - Utiliza técnica de responsividade nativa de CSS, como Flexbox ou Grid Layout, para criar layouts responsivos e fluidos em diferentes resoluções de tela.
- [x] ID 03 - Utiliza componentes CSS (ex. card, button ou outros) e JavaScript (ex. modal, carrousel ou outro) oferecidos por um Framework CSS.
- [x] ID 04 - Implementa um layout fluido e responsivo utilizando unidades relativas (vw, vh, %, em ou rem) em vez de unidades fixas (px) em diferentes dispositivos e tamanhos de tela.
- [x] ID 05 - Implementa animações em elementos da página, como fadeIn/fadeOut, slideIn/slideOut, utilizando CSS Animations ou bibliotecas de animação, como o Animate.css ou JQuery, para fornecer feedback visual ao usuário e criar uma experiência interativa.
- ~[ ] ID 06 - Cria transições personalizadas entre diferentes estados da página ou elementos, como mudanças de layout, alterações de cor ou exibição/hide de elementos, usando CSS Transitions ou CSS Animation, para melhorar a usabilidade e a aparência da aplicação.~
- [x] ID 07 - Aplica um Design System consistente, definindo diretrizes de estilo, cores, tipografia e padrões de componentes que são seguidos em toda a aplicação, garantindo uma experiência de usuário uniforme e atraente.
- [ ] ID 08 - Implementa pré-processadores CSS, como o Sass, em conjunto com um Framework CSS ou de forma isolada, para organizar e modularizar o código CSS, aplicando variáveis, mixins e funções para facilitar a manutenção e escalabilidade dos estilos.
- [x] ID 09 - Aplica tipografia responsiva utilizando media queries ou a função clamp(), em conjunto com unidades relativas como rem, em ou vw, para ajustar o tamanho da fonte de acordo com diferentes tamanhos de tela.

#### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente, utilizando a API do HTML e expressões regulares (REGEX).
- [x] ID 10 - Implementa tratamento de formulários no lado cliente com apresentação de mensagens de erro (texto próximo dos campos de entrada ou balões com mensagens) ou sucesso, utilizando os recursos da API do HTML, como validação de campos obrigatórios, tipo de entrada e limites de caracteres, garantindo que os dados inseridos sejam válidos antes de serem enviados para o servidor (via tratador de evento submit).
- [x] ID 11 - Aplica expressões regulares (REGEX) de forma eficiente para realizar validações customizadas nos campos de formulários, como formatos específicos de e-mail, telefone, data ou outros padrões personalizados definidos pelos requisitos do projeto.
- [x] ID 12 - Incorpora elementos de listagem, como checkbox, radio ou select, de maneira eficiente em formulários web, possibilitando a seleção e coleta precisa de dados pelos usuários.
- [x] ID 13 - Realiza a escrita e leitura de dados no Web Storage, permitindo a persistência de informações entre sessões de usuário e fornecendo uma maneira eficaz de armazenar dados localmente no navegador.

#### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web, incluindo Node.js, NPM e linters para garantir a qualidade do código, juntamento com boas práticas de versionamento e organização de projetos.
- [x] ID 14 - Configura adequadamente um ambiente de desenvolvimento usando Node.js e NPM para gerenciar pacotes e dependências do projeto, facilitando a instalação e o uso de bibliotecas e ferramentas de terceiros.
- [x] ID 15 - Utiliza linters, como ESLint ou Stylelint, para analisar e corrigir automaticamente problemas de código, incluindo erros de sintaxe, estilo e boas práticas, garantindo a qualidade e consistência do código do projeto.
- [x] ID 16 - Adota boas práticas de versionamento utilizando sistemas como Git e GitHub, criando e gerenciando repositórios com branches adequados ou pelo menos o branch main.
- ~[ ] ID 17 - Utiliza técnicas de minificação e otimização de recursos, como minificação de CSS e JavaScript e otimização de imagens, para melhorar o desempenho e o tempo de carregamento do site ou aplicação.~
- [x] ID 18 - Organiza o arquivo README.md conforme o template exigido na disciplina, contendo informações claras e estruturadas sobre o projeto, principalmente o checklist de tópicos devidamente preenchido.
- [x] ID 19 - Organiza os arquivos do projeto em uma estrutura coerente, lógica e modular, conforme projeto de exemplo, facilitando a localização, manutenção e escalabilidade.
- ~[ ] ID 20 - Utiliza as metodologias BEM (Block Element Modifier) ou SMACSS (Scalable and Modular Architecture for CSS) para organizar e estruturar os estilos CSS de forma eficiente, garantindo a reutilização de estilos, a legibilidade do código e a manutenção sustentável do projeto.~

#### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade de páginas web.
- [x] ID 21 - Utiliza a biblioteca jQuery para manipular o DOM e aprimorar a interatividade das páginas web, implementando funcionalidades como eventos, animações e manipulação de elementos HTML de forma eficiente.  
- [x] ID 22 - Seleciona e integra com sucesso um plugin jQuery, como o jQuery Mask Plugin ou outro plugin relevante para o projeto, a fim de melhorar a funcionalidade ou a aparência de elementos específicos em uma página web. 
- ~[ ] ID 23 - Utiliza bibliotecas de web components, como Lit, para criar componentes reutilizáveis e encapsulados, melhorando a modularidade e a manutenibilidade das páginas web.~ 
- ~[ ] ID 24 - Utiliza uma biblioteca de componentes prontos, como Material Web Components ou outra de escolha, ou então, algum componente independente (standalone) a fim de oferecer funcionalidades específicas sem a necessidade de estar integrado a uma biblioteca completa.~

#### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, permitindo a obtenção e manipulação de dados dinamicamente.
- [x] ID 25 - Realiza requisições assíncronas para uma API fake utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para persistir os dados originados de um formulário.
- [x] ID 26 - Realiza requisições assíncronas para uma API fake utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para exibição dos dados na página web.
