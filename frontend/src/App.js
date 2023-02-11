import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos/Todos";
import Auth from "./components/Auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    const [user, setUser] = useState(false);

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
                    element={user ? <Todos /> : <Navigate to="../auth" />}
                />
                <Route
                    path="/auth"
                    element={
                        user ? (
                            <Navigate to="../home" />
                        ) : (
                            <Auth setUser={setUser} user={user} />
                        )
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
