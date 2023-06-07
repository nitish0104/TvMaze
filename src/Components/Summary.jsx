import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "./Layout";
import { MdOutlineArrowBack } from "react-icons/md";

const Summary = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    if (id) {
      axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => {
        setData(res?.data);
      });
    }
  }, [id]);

  return (
    <div>
      <Layout>
        <section className="p-6 bg-gray-800  text-center overflow-hidden">
          <div className="top-3 left-3">
            <Link to="/">
              <MdOutlineArrowBack className="font-bold  lg:font-extrabold lg:text-2xl text-xl"></MdOutlineArrowBack>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="container  h-screen overflow-hidden gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 flex  justify-center items-center">
              <div className="w-[40%] px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                <h2 className="text-xl  text-center font-bold mb-2  text-yellow-500  md:text-4xl">
                  {data?.name}
                </h2>
                <p className="text-center text-gray-50 flex justify-center items-center">
                  {data?.summary.replace(/<[^>]+>/g, "")}
                </p>
              </div>
              <img
                src={data?.image.original}
                alt={data?.name}
                className="object-cover w-[25vw] rounded-md xl:col-span-3 dark:bg-gray-500"
              />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Summary;
