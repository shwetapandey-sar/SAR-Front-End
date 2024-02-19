import React from "react";
import Profile from "../pages/Profile";
import Company from "../pages/Company";
import Customer from "../pages/Customer";
import { Route,Routes } from "react-router-dom";
import EmployeePerformance from "../pages/Employee Performance";


const MContain = () => {
  return (
    <div>
      <EmployeePerformance/>
      {/* <Profile/> */}
      {/* <Company /> */}
      {/* <Routes>
      <Route path="customer" element={<Customer/>}></Route>
      </Routes> */}
      
    </div>
  );
};

export default MContain;
