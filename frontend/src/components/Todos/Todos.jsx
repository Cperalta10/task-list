import React, { useState, useEffect } from "react";
import "./Todos.css";
import Todo from "../Todo/Todo";
import {
    addTodo,
    updateTodo,
    deleteTodo,
    updateComplete,
    getAllUserTodos,
} from "../../utils/handleApi";

const Todos = ({ userId, setUserId }) => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [todoId, setTodoId] = useState("");

    useEffect(() => {
        getAllUserTodos(userId, setTodo);
    }, []);

    const updateMode = (_id, text) => {
        setIsUpdating(true);
        setText(text);
        setTodoId(_id);
    };

    return (
        <div className="todos box scroll">
            <div className="logout">
                <button className="logoutBtn" onClick={() => setUserId("")}>
                    Logout
                </button>
            </div>
            <h1
                style={{
                    textAlign: "center",
                    paddingBottom: "1rem",
                    fontSize: "3rem",
                }}
            >
                Todo List
            </h1>
            <div className="addTodo">
                <input
                    type="text"
                    placeholder="Add a todo..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="inputAdd"
                />
                <button
                    onClick={
                        isUpdating
                            ? () =>
                                  updateTodo(
                                      todoId,
                                      userId,
                                      text,
                                      setTodo,
                                      setText,
                                      setIsUpdating
                                  )
                            : () => addTodo(text, userId, setText, setTodo)
                    }
                    className="add"
                >
                    {isUpdating ? "Update" : "Add"}
                </button>
            </div>
            {todo.map((todo) => (
                <Todo
                    key={todo._id}
                    id={todo._id}
                    text={todo.text}
                    setTodo={setTodo}
                    completed={todo.completed}
                    updateMode={() => updateMode(todo._id, todo.text)}
                    deleteTodo={() => {
                        deleteTodo(todo._id, setTodo);
                    }}
                    updateComplete={updateComplete}
                />
            ))}
        </div>
    );
};

export default Todos;
