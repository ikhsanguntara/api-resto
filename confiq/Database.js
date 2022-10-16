import { Sequelize } from "sequelize";

// const db = new Sequelize('postgres://xodfhwwuvqpzqa:03a636e384fe9b61155feda349f9613568ac430169e858db6e179cb18f597ea3@ec2-54-224-209-114.compute-1.amazonaws.com:5432/dai0p12dkasbhp', {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     dialectOptions: {
//         ssl: true
//     }
// });

const db = new Sequelize('postgres://zahkpggfdgegcd:c57778c4a1c0f1d7ab21d3af32c9a155238d5a2957e7614547a04b38776c2a9d@ec2-44-210-228-110.compute-1.amazonaws.com:5432/d2gsofm82snnqk', {
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