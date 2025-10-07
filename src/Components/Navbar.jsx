import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        alert("LogOut successful");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="flex justify-between items-center pt-5">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src="/src/assets/user.png" alt="" />
        {user ? (
          <button onClick={handleSignOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
