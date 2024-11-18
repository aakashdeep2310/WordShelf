import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import MyFooter from "./components/MyFooter";
// import home from 'react-router-dom/home';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
