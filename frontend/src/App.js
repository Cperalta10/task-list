import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos/Todos";
import Auth from "./components/Auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";

function App() {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);

    if (loading) {
        return (
            <div className="App">
                <FadeLoader color="#000000" height="10px" width="3px" />;
            </div>
        );
    }

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        user ? <Navigate to="home" /> : <Navigate to="auth" />
                    }
                />
                <Route
                    path="/home"
                    element={
                        user ? (
                            <Todos
                                user={user}
                                setUser={setUser}
                                setLoading={setLoading}
                            />
                        ) : (
                            <Navigate to="../auth" />
                        )
                    }
                />
                <Route
                    path="/auth"
                    element={
                        user ? (
                            <Navigate to="../home" />
                        ) : (
                            <Auth setUser={setUser} setLoading={setLoading} />
                        )
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
