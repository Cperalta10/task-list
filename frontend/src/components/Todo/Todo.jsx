import React from "react";
import { BiEdit } from "react-icons/bi";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import "./Todo.css";
import DeleteModal from "../Modal/DeleteModal";

const Todo = ({
    text,
    updateMode,
    deleteTodo,
    completed,
    updateComplete,
    id,
    setTodo,
}) => {
    return (
        <div className="todo">
            <div className={completed ? "green" : "text"}>{text}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={updateMode} />
                <DeleteModal deleteTodo={deleteTodo}></DeleteModal>
                {completed ? (
                    <ImCheckboxChecked
                        onClick={() => updateComplete(id, completed, setTodo)}
                    />
                ) : (
                    <ImCheckboxUnchecked
                        onClick={() => updateComplete(id, completed, setTodo)}
                    />
                )}
            </div>
        </div>
    );
};

export default Todo;
