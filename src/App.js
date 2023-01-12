import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import './App.css';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
