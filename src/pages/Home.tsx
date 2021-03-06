import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/organisms/Cards";

const Home = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch("https://flaskwidelo.herokuapp.com/homepage").then((response) =>
      response.json().then((data) => {
        setMovies(data);
      })
    );
  }, []);
  return (
    <div className="h-full">
      <div className="w-full h-[32rem] bg-black relative group overflow-clip">
        <img
          className="w-full h-full object-cover lg:object-top group-hover:scale-105 z-0 transition-transform duration-1000"
          src="https://images.unsplash.com/photo-1594189683218-b5a9a346a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div></div>
        <div className="absolute bottom-12 font-serif right-4 md:bottom-48 md:right-24 text-white text-3xl z-10">
          <Link to="/item/Pirates">
            Pirates of the carribean{" "}
            <p className="text-right group-hover:underline">Watch now</p>
          </Link>
        </div>
        <div className="w-full top-0 h-full bg-black absolute opacity-50"></div>
        <div className="w-full bottom-0 h-10 absolute bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="flex flex-col content-space-between ">
        <h1 className="w-full text-center text-4xl text-white p-3 italic">
          We recommend:
        </h1>
        <div className="w-full flex justify-center text-lg">
          <Cards movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Home;
