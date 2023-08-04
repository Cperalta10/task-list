import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos/Todos";
import Auth from "./components/Auth/Auth";
import FadeLoader from "react-spinners/FadeLoader";

function App() {
    const [curUser, setCurUser] = useState("");
    const [loading, setLoading] = useState(false);

    if (loading) {
        return (
            <div className="App">
                <FadeLoader color="#000000" height="10px" width="3px" />
            </div>
        );
    }

    return (
        <div className="App">
            {!curUser ? (
                <Auth setCurUser={setCurUser} setLoading={setLoading} />
            ) : (
                <Todos curUser={curUser} setCurUser={setCurUser} />
            )}
        </div>
    );
}

export default App;
