import Foods from "../models/FoodModel.js";

export const getFoods = async (req, res) => {
    try {
        const data = await Foods.findAll({
            // attributes: ['id', 'name', 'description','ingredients']
        });
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

export const getFoodId = async (req, res) => {
    try {
        const data = await Foods.findOne({ where: { id: req.params.id } });
        res.json(data);
    } catch (error) {
        console.log(error.massage);
    }
}

export const postFoods = async (req, res) => {
    const { name, description, ingredients, price, rate, types } = req.body;

    if (name === '') return res.status(400).json({ msg: "mandatory" });
    try {
        await Foods.create({
            name: name,
            description: description,
            ingredients: ingredients,
            price: price,
            rate: rate,
            types: types,
        });
        res.json({
            msg: " Berhasil"
        });
    } catch (error) {
        console.log(error);
    }
}

