import React, { useState, useEffect } from "react";
import axios from "axios";
import Content from "../Components/Content";
import Search from "../Components/Search";
import { FaLaptop } from "react-icons/fa";
import Layout from "../Components/Layout";

const ShowList = () => {
  // const [shows, setShows] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [fetchData, setfetchData] = useState([]);

  const handleSearch = (e) => {
    const results = fetchData.filter((item) =>
      item?.show?.name?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };
  useEffect(() => {
    if (fetchData) {
      setSearchResults(fetchData);
    }
  }, [fetchData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );

        setfetchData(response.data);
        // setShows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // setSearchResults(fetchData());
  }, []);

  return (
    <Layout>
      <div className=" relative bg-gray-900 text-white">
        <div>
          <div className="w-full lg:flex lg:justify-evenly lg:items-center flex justify-evenly items-center lg:gap-6 lg:pl-44 lg:py-3 ">
            <div>
              <FaLaptop className="font-bold  lg:font-extrabold lg:text-6xl text-4xl"></FaLaptop>
            </div>
            <h1 className="text-2xl font-bold mb-4 text-center ">TV Show's </h1>
            <Search
              onChange={handleSearch}
              className={"lg:w-80 lg:h-12 w-32 text-black"}
            />
          </div>
          <div className="container mx-auto px-4 py-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {searchResults?.length === 0
                ? "No data found"
                : searchResults?.map((data) => (
                    <Content key={data.show.id} show={data.show} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowList;
