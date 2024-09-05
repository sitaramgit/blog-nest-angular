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
- to create users crud
```bash
$ nest g resource modules/users
```

- to validate post data with dto file, after follow the main.ts app.useGlobalPipes
```bash
$ npm i --save class-validator class-transformer
```

- install the bcrypt package for encrypting user passwords as we don't want user passwords to be saved in plain text.
```bash
$ npm i bcrypt
$ npm i -D @types/bcrypt
```

- Authentication with passport & JWT
```bash
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local
$ npm install --save @nestjs/jwt passport-jwt
$ npm install --save-dev @types/passport-jwt

 file upload
$ npm install multer @types/multer @types/node

- to show the filese
$  npm install --save @nestjs/serve-static
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
{ email: 'xcube3@gmail.com', password: 'admin@123' }
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
