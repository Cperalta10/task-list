import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos/Todos";
import Auth from "./components/Auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    const [userId, setUserId] = useState("");

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        userId ? <Navigate to="home" /> : <Navigate to="auth" />
                    }
                />
                <Route
                    path="/home"
                    element={
                        userId ? (
                            <Todos userId={userId} />
                        ) : (
                            <Navigate to="../auth" />
                        )
                    }
                />
                <Route
                    path="/auth"
                    element={
                        userId ? (
                            <Navigate to="../home" />
                        ) : (
                            <Auth setUserId={setUserId} userId={userId} />
                        )
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
