const todoModel = require("../models/todoModel");

module.exports.getTodo = async (req, res) => {
    const todo = await todoModel.find();
    res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
    const { text, userId } = req.body;

    todoModel.create({ text, userId }).then((data) => {
        console.log("Added successfully!");
        console.log(data);
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

// module.exports.updateTodo = async (req, res) => {
//     const { _id, text } = req.body;

//     todoModel
//         .findByIdAndUpdate(_id, { text })
//         .then(() => res.set(201).send("Updated successfully!"))
//         .catch((err) => console.log(err));
// };

module.exports.updateComplete = async (req, res) => {
    const todoId = req.params.id;
    const { completed, userId } = req.body;

    try {
        const todo = await todoModel.findById(todoId);
        if (todo.userId === userId) {
            await todo.updateOne({ $set: { completed: completed } });
            res.status(201).json({ message: "Post was updated successfully!" });
        } else {
            res.status(403).json({ message: "You don't have permission." });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
// module.exports.updateComplete = async (req, res) => {
//     const { _id, completed } = req.body;

//     // console.log(req);

//     todoModel
//         .findByIdAndUpdate(_id, { completed: !completed })
//         .then(() => res.set(201).send("Updated successfully!"))
//         .catch((err) => console.log(err));
// };

module.exports.deleteTodo = async (req, res) => {
    const todoId = req.params.id;
    const { userId } = req.body;

    try {
        const todo = await todoModel.findById(todoId);
        if (todo.userId === userId) {
            await todo.deleteOne();
            res.status(201).json({ message: "Post was deleted successfully!" });
        } else {
            res.status(403).json({ message: "You don't have permission." });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
// module.exports.deleteTodo = (req, res) => {
//     const { id } = req.params;
//     console.log(id);

//     todoModel
//         .findByIdAndRemove(id)
//         // .then(() => console.log(_id))
//         .then(() => res.set(200).send("Deleted successfully!"))
//         .catch((err) => console.log(err));
// };
