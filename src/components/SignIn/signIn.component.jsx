import React from 'react';
import {GoogleLogin} from 'react-google-login';

const client_id = process.env.REACT_APP_WEB_CLIENT_ID

const SignIn = ()=> {
    const responseGoogleSuccess = (response) => {
        const userInfo = {
            name: response.profileObj.name,
            email:response.profileObj.email,
        };
        console.log(userInfo);
    }
    
    const responseGoogleError = (err) => {
        console.log(err);
    }

    return(
        <GoogleLogin
            clientId={client_id}
            buttonText="Sign In with Google"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleError}
            isSignedIn={true}
        ></GoogleLogin>
    )
}

export default SignIn;