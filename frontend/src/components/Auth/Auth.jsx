import React from "react";
import { signup } from "../../utils/handleApi";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

function Auth({ setCurUser, setLoading }) {
    const { user } = useAuth0();

    if (user) {
        setLoading(false);
        signup(user.email, user.name, setCurUser);
    }

    return (
        <div>
            <LoginButton setCurUser={setCurUser} setLoading={setLoading} />
        </div>
    );
}

export default Auth;
