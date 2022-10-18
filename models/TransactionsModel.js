import { Sequelize } from "sequelize";
import db from "../confiq/Database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define('transaction', {
    foodId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    total: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    },
    step: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Transaction;