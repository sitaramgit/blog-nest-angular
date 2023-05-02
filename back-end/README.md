## Typeorm and MySQL intigration
```bash
- Setting up a .env file
$ npm i --save @nestjs/config

- Connecting our application to the MySQL database
$ npm install --save @nestjs/typeorm typeorm mysql2
```

## Migrations and table creations
```bash
- create migration like below cmd
$ typeorm migration:create src/migration/BookMigration
- follow the structure as in this src/migration/1683009888610-UsersMigration.ts file

- To run the migration
$ npm install -g ts-node
- Add typeorm command under scripts section in package.json
- "scripts": {"typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"}
- after run the npm run start:dev cmd and stop
$ npm run start:dev
- npm run typeorm migration:run -- -d ormconfig.ts
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
