import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { signup } from "../../utils/handleApi";

function Auth({ setUser, setLoading }) {
    return (
        <div>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    signup(decoded.email, decoded.name, setUser);
                    setLoading(true);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </div>
    );
}

export default Auth;
