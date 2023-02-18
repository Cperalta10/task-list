const { Router } = require("express");
const {
    getAllTodo,
    saveTodo,
    updateTodo,
    deleteTodo,
    updateComplete,
} = require("../controllers/todoController");

const router = Router();

router.get("/", getAllTodo);
router.post("/save", saveTodo);
router.put("/:id", updateTodo);
router.put("/completed/:id", updateComplete);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
