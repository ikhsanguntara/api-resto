import Transactions from "../models/TransactionsModel.js";


export const getTransactions = async (req, res) => {
    try {
        const data = await Transactions.findAll({
            // attributes: ['id', 'name', 'description','ingredients']
        });
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

export const getTransactionsId = async (req, res) => {
    try {
        const data = await Transactions.findOne({ where: { id: req.params.id } });
        res.json(data);
    } catch (error) {
        console.log(error.massage);
    }
}

export const postTransactions = async (req, res) => {
    const { foodId, userId, quantity, total, status, step, type } = req.body;

    try {
        await Transactions.create({
            foodId: foodId,
            userId: userId,
            quantity: quantity,
            total: total,
            status: status,
            step: step,
            type: type
        });
        res.json({
            msg: "Berhasil"
        });
    } catch (error) {
        res.json({
            msg: error
        });
    }
}

