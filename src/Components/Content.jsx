import React from "react";
import { Link } from "react-router-dom";

const Content = ({ show }) => {
  return (
    <div className=" lg:w-56 lg:h-[18rem] max-w-sm rounded overflow-hidden shadow-lg bg-slate-700 text-white  ">
      <div className="w-full">
        <a
          href={show.url}
          target="_blank"
          className="relative text-center flex items-center justify-center w-full rounded-md"
        >
          <img
            src={show.image?.medium}
            alt={show.name}
            className="z-0 blur-md absolute top-0 left-0 w-full h-56 lg:h-40  object-contain "
          />
          <img
            src={show.image?.medium}
            alt={show.name}
            className="relative z-10 w-full h-56 lg:h-40  object-contain "
          />
        </a>
      </div>
      <div className=" ">
        <div className="text-center">
          <div className="font-bold text-xl mb-2 text-yellow-500  lg:text-2xl">
            {show.name}
          </div>
        </div>
        <div className=" text-center py-1 flex gap-1 items-center justify-center">
          {show.genres.map((genre, index) => (
            <span
              key={index}
              className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-thin text-gray-50 "
            >
              {genre}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center my-2">
          <Link
            className="px-4 py-1 rounded-md   bg-yellow-300  text-black hover:font-semibold"
            to={`/shows/${show.id}`}
          >
            Show Summary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
