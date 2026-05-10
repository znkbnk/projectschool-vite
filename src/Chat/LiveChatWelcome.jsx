import React from "react";
import GoogleSignin from "../images/btn_google_signin_dark_pressed_web.webp";
import { auth, googleProvider } from "../components/firebase";
import { signInWithPopup } from "firebase/auth";

const LiveChatWelcome = () => {
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <main className='welcome'>
      <h1>Welcome to Live Chat.</h1>
      <h1>Sign in with Google to chat.</h1>
      <button className='sign-in' onClick={googleSignIn} type='button'>
        <img
          src={GoogleSignin}
          alt='sign in with google'
        />
      </button>
    </main>
  );
};

export default LiveChatWelcome;