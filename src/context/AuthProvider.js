import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/api/courrentUserSlice";

// import { setCurrentUser } from "../features/api/courrentUserSlice"

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [notifi, setNotifi] = useState(false);
  const dispatch = useDispatch()


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const { data: userDetails = {}, refetch } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      if (user) {
        const res = await fetch(` https://one-bit-pay-server.vercel.app/user/${user?.email}`);
        const data = await res.json();
        return data.data;
      }
    },
  });
  console.log(userDetails);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userData = {
      //   email: currentUser.email,
      //   uid: currentUser.uid
      // }
      dispatch(setCurrentUser(currentUser))
      setUser(currentUser);
      setLoading(false);
      refetch();
    });
    return () => unsubscribe;
  }, [user?.email, refetch]);

  const authInfo = {
    user,
    setUser,
    loading,
    userDetails,
    refetch,
    setLoading,
    createUser,
    signIn,
    logOut,
    passwordReset,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
