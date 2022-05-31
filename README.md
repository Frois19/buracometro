<h1 align="center">
  <img alt="Buracometro" title="Plant Manager" src=".github/logo.png" width="240px"/>
</h1>


<br>

<p align="center">
  <img alt="Buracometro" src=".github/cover.png" width="80%">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://docs.docker.com/)
- [KafKaJs](https://kafka.js.org/)

## 💻 Projeto

Aplicativo para encontrar todos os buracoes existentes nas vias

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Frois19/buracometro.git
$ cd buracometro
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências do backend do projeto 
$ cd back
$ yarn
# Iniciar o projeto
# Mude o ip local nos arquivos back/src/views/images_views.ts e mobile/src/services/api.ts
$ docker-compose up --build #Caso nem todos os containers inciarem com o script, favor executar no Docker Desktop
# Abra outro terminal no diretorio buracometro/back
$ yarn dev
# Instalar as dependências do aplicativo mobile do projeto
# Abra outro terminal no diretorio buracometro/mobile
$ yarn
# Iniciar o projeto
$ expo start
```

