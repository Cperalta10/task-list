import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { signup, getUserId } from "../../utils/handleApi";

function Auth({ setUserId }) {
    return (
        <div>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    signup(decoded.email, decoded.name);
                    getUserId(decoded.email, setUserId);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </div>
    );
}

export default Auth;
