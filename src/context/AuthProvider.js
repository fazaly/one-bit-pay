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

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

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

  //Loading user data from database for using in multiple components
  // useEffect(() => {
  //     fetch(`http://localhost:5000/user/${user?.email}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //             setUserDetails(data.data);
  //         });
  // },[user?.email, userDetails.balance]);

  const {
    data: userDetails = {},
    refetch,
  } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      if (user) {
        const res = await fetch(`http://localhost:5000/user/${user?.email}`);
        const data = await res.json();
        return data.data;
      }
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
    setLoading,
    userDetails,
    refetch,
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
