import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos/Todos";
import Auth from "./components/Auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";

function App() {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);

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
            {loading && (
                <FadeLoader color="#ffffff" height="10px" width="3px" />
            )}
        </div>
    );
}

export default App;
