import React from "react";

const Content = ({ show }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={show.image.medium} alt={show.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{show.name}</div>
        <p className="text-gray-700 text-base">{show.summary}</p>
      </div>
      <div className="px-6 py-4">
        {show.genres.map((genre, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Content;
