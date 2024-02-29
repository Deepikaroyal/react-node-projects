import React from "react";
import ReactGoogleLogin from "react-google-login";
import ReactFacebookLogin from "react-facebook-login";
export default function GoogleLogin(props) {
  const onResponse = resp => {
    console.log(resp);
    console.log(resp.profileObj.imageUrl);
  };
  return (
      <>
    <ReactGoogleLogin
      clientId="367566483692-9bb12sdjqtni5upqsiuqr8cch1o9to18.apps.googleusercontent.com" // We created this earlier, remember?
      buttonText="Login with Google"
      onSuccess={onResponse}
      onFailure={onResponse}
    />
    <ReactFacebookLogin
      appId="733965791297556" // we created this, remember?
      autoLoad={true}
      fields="name,email,picture"
      callback={onResponse}
      onFailure={onResponse}
    />
    </>
  );
}