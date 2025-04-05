import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { NetflixLOGO } from "../utils/constants";
import { userLOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unSubscribe called when component unmounts
    return () => unSubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <div className="flex justify-between items-center">
        {/* Netflix Logo (Left-aligned) */}
        <img className="w-44" src={NetflixLOGO} alt="Netflix Logo" />

        {user && (
          <div className="flex items-center space-x-4">
            {showGptSearch && (
              <select className="p-2 m-2 bg-gray-500 text-white rounded-md">
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
              </select>
            )}
            <button
              className="p-2 mx-2 bg-purple-800 text-white rounded-md cursor-pointer font-bold"
              onClick={handleGPTSearchClick}
            >
              {showGptSearch ? "Homepage" : "DeepSeek Search"}
            </button>
            <img
              className="w-9 h-9 rounded-sm"
              src={userLOGO}
              alt="User Icon"
            />
            <button
              onClick={handleSignOut}
              className="text-white font-medium hover:underline"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
