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

const Todos = ({ user, setUser, setLoading }) => {
    const { _id } = user;
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [todoId, setTodoId] = useState("");

    useEffect(() => {
        getAllUserTodos(_id, setTodo);
        setLoading(false);
    }, []);

    const updateMode = (_id, text) => {
        setIsUpdating(true);
        setText(text);
        setTodoId(_id);
    };

    return (
        <div className="todos box scroll">
            <div className="logout">
                <h2>Welcome, {user.username}</h2>
                <button className="logoutBtn" onClick={() => setUser("")}>
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
                                      _id,
                                      text,
                                      setTodo,
                                      setText,
                                      setIsUpdating
                                  )
                            : () => addTodo(text, _id, setText, setTodo)
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
