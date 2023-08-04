import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { signup } from "../../utils/handleApi";

const LoginButton = ({ setUser, setLoading }) => {
    const { loginWithRedirect, user } = useAuth0();

    return (
        <button
            className="logoutBtn"
            onClick={() => {
                setLoading(true);
                loginWithRedirect();
            }}
        >
            Log In / Signup
        </button>
    );
};

export default LoginButton;
