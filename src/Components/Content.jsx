import React from "react";

const Content = ({ show }) => {
  return (
    <div className="  max-w-screen rounded overflow-hidden shadow-lg bg-slate-700 text-white  flex-col justify-center items-center ">
      <a
        href={show.url}
        className="text-center flex items-center justify-center p-2 rounded-md"
      >
        <img
          className="w-[65vw] h-[45vh] lg:h-[60vh] text-center rounded-md "
          src={show.image.medium}
          alt={show.name}
        />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-yellow-500">
          {show.name}
        </div>
        <p className="text-gray-50 text-base">{show.summary}</p>
      </div>
      <div className="px-6 py-4">
        {show.genres.map((genre, index) => (
          <span
            key={index}
            className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2"
          >
            {genre}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center my-2">
        <a href={show.url} target="_blank">
          <button className="px-6 py-2 rounded-md   bg-red-500 text-black">
            Show More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Content;
