import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import axios from "axios";

const DashBoard = () => {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch the API from stats
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/api/stats");
      isLoading(false);
      setData(data.data);
    };
    setTimeout(() => fetchData(), 1 * 1000);
  }, []);
  console.log(data);
  if (loading) return <Loading></Loading>;

  return <section>haha</section>;
};

export default DashBoard;
