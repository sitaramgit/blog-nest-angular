import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "nest_blog",
    "synchronize": false,
    "logging": false,
    "entities": [
       "dist/**/entities/*.entity.{ts,js}"
    ],
    "migrations": [
       "dist/src/migration/**/*.{js,ts}"
    ],
    "subscribers": [
       "src/subscriber/**/*.{js,ts}"
    ]
 });