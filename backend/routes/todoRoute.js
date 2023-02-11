const { Router } = require("express");
const {
    getTodo,
    saveTodo,
    updateTodo,
    deleteTodo,
    updateComplete,
} = require("../controllers/todoController");

const router = Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.put("/:id", updateTodo);
router.put("/completed/:id", updateComplete);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
