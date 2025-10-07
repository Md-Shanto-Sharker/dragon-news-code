import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <Navbar ></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
