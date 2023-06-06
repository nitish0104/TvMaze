import React, { useState, useEffect } from "react";
import axios from "axios";
import Content from "../Components/Content";
import Search from "../Components/Search";

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [fetchData, setfetchData] = useState([]);

  const handleSearch = (e) => {
    const results = fetchData.filter((item) =>
      item.show.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setfetchData(response.data);
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // setSearchResults(fetchData());
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold mb-4">Show List</h1>
          <Search onChange={handleSearch} className={"w-80 h-12"} />
        </div>
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((data) => (
              <Content key={data.show.id} show={data.show} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shows.map((data) => (
              <Content key={data.show.id} show={data.show} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowList;
