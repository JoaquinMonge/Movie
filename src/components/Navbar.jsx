import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user.email);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  items-center justify-between p-3 z-[100] w-full absolute bg-black/60">
      <Link to="/">
        <h1 className="text-red-600 netflix text-4xl   font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white myList pr-1 mr-5  ">MY LIST</button>
          </Link>
          <button className="text-white myList pr-2 mr-5  ">
            {user.email.split("@")[0].toUpperCase()}
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600  logout rounded cursor-pointer text-white"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr4 mr-5 ">Sign In</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
