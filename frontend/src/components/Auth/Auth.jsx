import React from "react";
import { signup } from "../../utils/handleApi";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import FadeLoader from "react-spinners/FadeLoader";

function Auth({ setCurUser }) {
    const { user, isLoading } = useAuth0();

    if (user) {
        signup(user.email, user.name, setCurUser);
    }

    if (isLoading) {
        return <FadeLoader />;
    }

    return (
        <div>
            <LoginButton setCurUser={setCurUser} />
        </div>
    );
}

export default Auth;
