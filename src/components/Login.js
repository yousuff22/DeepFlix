import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { Netflix_bgIMG } from "../utils/Netflix";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const togglesigninform = () => {
    setisSignInForm(!isSignInForm);
  };

  const handelbuttonclicked = () => {
    const msg = checkValidData(email.current.value, password.current.value);

    seterrorMessage(msg);
    if (msg) return;

    // sign in / sign up form

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/175668381?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL, 
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          seterrorMessage("The email ID you entered is already registered. ");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          seterrorMessage("User Not Found");
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img className="w-full h-screen object-cover sm:h-auto" src={Netflix_bgIMG} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-xs text-white w-2/3 md:w-3/12 p-8 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 bg-gray-700 text-white w-full rounded-md"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 bg-gray-700 text-white w-full rounded-md"
          ref={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 bg-gray-700 text-white w-full rounded-md"
          ref={password}
        />
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handelbuttonclicked}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <p className="py-6 cursor-pointer" onClick={togglesigninform}>
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
