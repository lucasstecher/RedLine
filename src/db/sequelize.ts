// import { Sequelize } from 'sequelize-typescript';
// import { config as dotEnv } from 'dotenv';
// import { Car } from './models/car.model';

// dotEnv();

// const env = process.env.NODE_ENV;
// const dialect = env === 'test' ? 'sqlite' : 'postgres';

// export const sequelize = new Sequelize({
//     host: process.env.DB_HOST || 'localhost',
//     port: parseInt(process.env.DB_PORT) || 5432,
//     username: process.env.DB_USERNAME || 'postgres',
//     password: process.env.DB_PASSWORD ||  '1234',
//     database: process.env.DB_DATABASE || 'cars',
//     models: [Car],
//     dialect,
//     storage: './tests/database.sqlite',
//     logging: false,
//     pool: {
//         max: 100,
//         min: 0,
//         idle: 200000,
//         acquire: 200000
//     },
//     define: {
//         timestamps: true,
//         underscored: true
//     }
// });