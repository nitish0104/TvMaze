import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <p dangerouslySetInnerHTML={{ __html: data?.summary }}></p>
    </div>
  );
};

export default Summary;
