import axios from "axios";

const baseUrl = "https://task-list-six-pink.vercel.app/";

const signup = (email, username) => {
    axios
        .post(`${baseUrl}/user/signup`, { email, username })
        .then((data) => {})
        .catch((err) => {
            console.log(err);
        });
};

const getUserId = (email, setUserId) => {
    axios
        .get(`${baseUrl}/user`)
        .then(({ data }) => {
            const user = data.users.filter(
                (userEmail) => userEmail.email === email
            );
            setUserId(user[0]._id);
        })
        .catch((err) => {
            console.log(err);
        });
};

const getAllUserTodos = (userId, setTodo) => {
    axios
        .get(`${baseUrl}/todos`)
        .then(({ data }) => {
            const userTodos = data.filter(
                (userTodo) => userTodo.userId === userId
            );
            setTodo(userTodos);
        })
        .catch((err) => {
            console.log(err);
        });
};

const getAllTodo = (setTodo) => {
    axios
        .get(`${baseUrl}/todos`)
        .then(({ data }) => {
            setTodo(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

const addTodo = (text, userId, setText, setTodo) => {
    axios
        .post(`${baseUrl}/todos/save`, { text, userId })
        .then((data) => {
            setText("");
            getAllUserTodos(userId, setTodo);
        })
        .catch((err) => {
            console.log(err);
        });
};

const updateTodo = (todoId, userId, text, setTodo, setText, setIsUpdating) => {
    axios
        .put(`${baseUrl}/todos/${todoId}`, { userId, text })
        .then((data) => {
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

const updateComplete = (todoId, completed, setTodo) => {
    axios
        .put(`${baseUrl}/todos/completed/${todoId}`, { completed })
        .then((data) => {
            setTodo((prevState) => {
                const newTodos = prevState.map((todo) => {
                    if (todo._id === todoId) {
                        return {
                            todo,
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

const deleteTodo = (todoId, setTodo) => {
    axios
        .delete(`${baseUrl}/todos/delete/${todoId}`)
        .then((data) => {
            setTodo((prevState) => {
                const newTodos = prevState.filter(
                    (todo) => todo._id !== todoId
                );

                return newTodos;
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export {
    getAllTodo,
    addTodo,
    updateTodo,
    deleteTodo,
    updateComplete,
    signup,
    getUserId,
    getAllUserTodos,
};
