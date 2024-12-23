import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from "prop-types";

const googleProvider = new GoogleAuthProvider();
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  // Sign up user
  const signUpUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user
  const signInUser = async (email, password) => {
    setIsChecked(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    setIsChecked(true);
    return await signInWithPopup(auth, googleProvider);
  };

  // Logout user
  const logOut = async () => {
    setIsChecked(false);
    return await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        const { email, displayName, photoURL } = user;
        const userData = {
          email,
          username: displayName,
          photo: photoURL,
        };
      }
    });
    return () => unsubscribe();
  }, []);
  const value = {
    currentUser,
    signUpUser,
    signInUser,
    signInWithGoogle,
    logOut,
    isChecked,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.any,
};
