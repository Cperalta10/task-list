const todoModel = require("../models/todoModel");

module.exports.getAllTodo = async (req, res) => {
    const todo = await todoModel.find();
    res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
    const { text, userId } = req.body;

    todoModel.create({ text, userId }).then((data) => {
        res.send(data);
    });
};

module.exports.updateTodo = async (req, res) => {
    const todoId = req.params.id;
    const { userId } = req.body;

    try {
        const todo = await todoModel.findById(todoId);
        if (todo.userId === userId) {
            await todo.updateOne({ $set: req.body });
            res.status(201).json({ message: "Post was updated successfully!" });
        } else {
            res.status(403).json({ message: "You don't have permission." });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.updateComplete = async (req, res) => {
    const todoId = req.params.id;
    const { completed } = req.body;

    try {
        const todo = await todoModel.findById(todoId);
        await todo.updateOne({ $set: { completed: !completed } });
        res.status(201).json({ message: "Post was updated successfully!" });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.deleteTodo = async (req, res) => {
    const todoId = req.params.id;

    try {
        const todo = await todoModel.findById(todoId);
        await todo.deleteOne();
        res.status(201).json({ message: "Post was deleted successfully!" });
    } catch (err) {
        res.status(500).json(err);
    }
};
