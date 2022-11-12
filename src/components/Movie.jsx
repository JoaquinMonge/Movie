import React, { useState } from "react";
import { FaHeart, FaHeartBroken, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    //si el usuario esta loggeado
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="w-[200px] sm:w-[220px] md:w-[270px] lg:w-[280px] inline-block cursor-pointer relative p-1">
      <img
        className="w-full h-auto block hover:opacity-25 rounded "
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        title={item?.title}
      />

      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 text-transparent">
        <p
          onClick={saveMovie}
          className="white-space-normal text-xs md:text-xs font-bold flex hover:text-white justify-center items-center h-full "
        >
          {item?.title}{" "}
          {like ? (
            <FaHeart className="absolute top-4 left-4 font-bold  hover:text-gray-400" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 font-bold  hover:text-gray-400" />
          )}
        </p>
      </div>
    </div>
  );
};

//min 2:00:43 fav
