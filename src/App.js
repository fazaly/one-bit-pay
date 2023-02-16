import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, setUser } from "./features/api/authSlice";
import KommunicateChat from "./Components/KommunicateChat/chat";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        dispatch(setUser(user.email));
      }
    })
  }, [dispatch]);
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
      <KommunicateChat/>
      <Toaster />
    </div>
  );
}

export default App;
