https://obaranovskyi.com/node.js/node-typescript-nodemon

Table of contents
Base setup
Setup TypeScript
Setup Nodemon

npm init --yes
npm install typescript @types/node --save-dev

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "allowJs": true,
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "noImplicitAny": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}

npm install --save-dev ts-node nodemon

{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/main.ts"
}