import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

export const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteMovie = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My movies</h2>
      <div className="relative flex  items-center group">
        <svg
          onClick={slideLeft}
          className="w-10 h-15 text-white left-0 font-bold rounded-full absolute  hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>

        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[200px] sm:w-[220px] md:w-[270px] lg:w-[280px] inline-block cursor-pointer relative p-1"
            >
              <img
                className="w-full h-auto block hover:opacity-25 rounded "
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                title={item?.title}
              />

              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 text-transparent">
                <p className="white-space-normal text-xs md:text-xs font-bold flex hover:text-white justify-center items-center h-full ">
                  {item?.title}
                  <svg
                    onClick={() => deleteMovie(item.id)}
                    className="w-6 h-6 absolute hover:text-gray-300 top-4 right-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </div>
        <svg
          onClick={slideRight}
          className="w-10 h-15 text-white right-0 rounded-full absolute  hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </>
  );
};
