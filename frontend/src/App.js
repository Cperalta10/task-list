import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos/Todos";
import Auth from "./components/Auth/Auth";

function App() {
    const [curUser, setCurUser] = useState("");

    return (
        <div className="App">
            {!curUser ? (
                <Auth curUser={curUser} setCurUser={setCurUser} />
            ) : (
                <Todos curUser={curUser} setCurUser={setCurUser} />
            )}
        </div>
    );
}

export default App;
