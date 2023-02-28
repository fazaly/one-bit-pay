import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, isOnStateCng, setUser } from "./features/api/authSlice";
import KommunicateChat from "./Components/KommunicateChat/chat";
import Cookie from "./Components/Cookie/Cookie";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        dispatch(setUser(user.email));
        dispatch(isOnStateCng());
      }
    })
  }, [dispatch]);
  return (
    <div className="mx-auto bg-white">
      <RouterProvider router={router} />
      <KommunicateChat/>
      <Toaster />
      <Cookie></Cookie>
    </div>
  );
}

export default App;
