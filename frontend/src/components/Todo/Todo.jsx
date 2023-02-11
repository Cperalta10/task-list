import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";

const Todo = ({
    text,
    updateMode,
    deleteTodo,
    completed,
    updateComplete,
    id,
    setTodo,
}) => {
    // const [completed, setCompleted] = useState(false);

    // const completedSwitch = () => {
    //     setCompleted(!completed);
    // };

    return (
        <div className="todo">
            <div className={!completed ? "text green" : "text"}>{text}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={updateMode} />
                <AiFillDelete className="icon" onClick={deleteTodo} />
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
