<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


# Description

# 🏡 HomeClub API

API RESTful construida con NestJS + Prisma + Fastify para gestionar apartamentos corporativos y turísticos, permitiendo búsqueda geolocalizada, paginada y filtrada por tipo y precio. Conexión a dos bases de datos distintas.

# 🚀 Características

Búsqueda de apartamentos activos cercanos por coordenadas.

Filtros por tipo de apartamento (corporativo/turístico).

Rango de precios dependiendo del tipo.

Paginación y orden por distancia.

Datos combinados desde dos bases de datos distintas (descripción e imagen).

Documentación automática con Swagger.

Tests unitarios con Jest.

Dockerización lista para desarrollo.

# 📦 Tecnologías utilizadas

NestJS + Fastify

Prisma ORM (conexión a dos bases de datos MySQL)

Swagger para documentación interactiva

Jest para pruebas

Docker & Docker Compose

# 🛠️ Instalación y ejecución local

Requisitos

Node.js 18+

MySQL (o usar Docker Compose)
## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Configura las variables de entorno

Copia .env.example como .env y actualiza las credenciales de ambas bases de datos:

```bash
DATABASE_URL_DB1=mysql://user:password@localhost:3306/db1
DATABASE_URL_DB2=mysql://user:password@localhost:3306/db2
```

## 🐳 Dockerización

 Construir imagen

```bash
 $ docker build -t homeclub-api .
```

 Usar docker-compose

Archivo docker-compose.yml incluye:

- API (NestJS)

- MySQL DB1 (corporativos)

- MySQL DB2 (detalles)

```bash
 $ docker-compose up --build
```

La API quedará disponible en: http://localhost:3000 

Swagger en: http://localhost:3000/api-docs
## Run tests

```bash
# unit tests
$ npm run test
```



# 👨‍💻 Autor

Desarrollado por Jhonathan Alvarez López como prueba técnica para Homeclub

## 📬 Contacto

Email: jhonathan0297@gmail.com

GitHub: @Jhonathan97

