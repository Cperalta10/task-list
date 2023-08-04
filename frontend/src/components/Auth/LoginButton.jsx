import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            className="logoutBtn"
            onClick={() => {
                loginWithRedirect();
            }}
        >
            Log In / Signup
        </button>
    );
};

export default LoginButton;
