import { Sequelize } from "sequelize";
import db from "../confiq/Database.js";

const { DataTypes } = Sequelize;

const Food = db.define('foods', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    ingredients: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    rate: {
        type: DataTypes.DOUBLE
    },
    types: {
        type: DataTypes.STRING
    },
    // image: {
    //     type: DataTypes.STRING
    // }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Food;