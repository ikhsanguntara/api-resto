import { Sequelize } from "sequelize";
import * as pg from 'pg';


// const db = new Sequelize('postgres://xodfhwwuvqpzqa:03a636e384fe9b61155feda349f9613568ac430169e858db6e179cb18f597ea3@ec2-54-224-209-114.compute-1.amazonaws.com:5432/dai0p12dkasbhp', {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     dialectOptions: {
//         ssl: true
//     }
// });

const db = new Sequelize('postgres://asxotglipxypxt:f17f9641cc65de5fae73dedc12c8618d1205111580f8111f3e36bca54b55b040@ec2-3-92-98-129.compute-1.amazonaws.com:5432/d5scgbbuaov45e', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default db;