import React from "react";
import Sidebar from "../Sidebar";
import Mainpage from "../Mainpage";


const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar></Sidebar>
        <Mainpage></Mainpage>
        
      </div>
    </div>
  );
};

export default Home;
