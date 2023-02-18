import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { signup, getUserId } from "../../utils/handleApi";

function Auth({ setUserId, userId }) {
    return (
        <div>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    // console.log(credentialResponse.credential);
                    var decoded = jwt_decode(credentialResponse.credential);
                    // console.log(decoded);
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
