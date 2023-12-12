import React from "react";  
import Profile from "./components/Profile"; 
import Info from "./components/Info";
import Footer from "./components/Footer";


export default function App(){
  return(
    <div className="card">
      <Profile />
      <Info />
      <Footer />
    </div>
  )
}