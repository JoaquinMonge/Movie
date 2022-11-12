import React from "react";
import { SavedMovies } from "../components/SavedMovies";

export const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=" h-[400px] w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/b6a55240-1880-4640-8c0d-dc1307bcc52d/CR-en-20221031-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold">My Movies</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};
