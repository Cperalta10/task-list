import axios from "axios";

const baseUrl = "http://localhost:9000/todos";

const getAllTodo = (setTodo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            // console.log("data --->", data);
            setTodo(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

const addTodo = (text, setText, setTodo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            // console.log("data --->", data);
            setText("");
            getAllTodo(setTodo);
        })
        .catch((err) => {
            console.log(err);
        });
};

const updateTodo = (todoId, text, setTodo, setText, setIsUpdating) => {
    axios
        .put(`${baseUrl}/update`, { _id: todoId, text })
        .then((data) => {
            // console.log("data --->", data);
            setText("");
            setIsUpdating(false);

            setTodo((prevState) => {
                const newTodos = prevState.map((todo) => {
                    if (todo._id === todoId) {
                        return {
                            ...todo,
                            text: text,
                        };
                    } else {
                        return todo;
                    }
                });

                return newTodos;
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

const updateComplete = (todoId, completed, setTodo, setText, setIsUpdating) => {
    axios
        .put(`${baseUrl}/completed`, { _id: todoId, completed })
        .then((data) => {
            console.log(data);
            // console.log("data --->", data);
            // setText("");
            // setIsUpdating(false);
            setTodo((prevState) => {
                const newTodos = prevState.map((todo) => {
                    if (todo._id === todoId) {
                        return {
                            ...todo,
                            completed: !completed,
                        };
                    } else {
                        return todo;
                    }
                });
                return newTodos;
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

const deleteTodo = (_id, setTodo) => {
    axios
        .delete(`${baseUrl}/delete/${_id}`)
        .then((data) => {
            console.log("data --->", data);

            setTodo((prevState) => {
                const newTodos = prevState.filter((todo) => todo._id !== _id);

                return newTodos;
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export { getAllTodo, addTodo, updateTodo, deleteTodo, updateComplete };
