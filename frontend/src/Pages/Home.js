import { useEffect, useState } from "react";
import instance from "../instance";

import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data } = await instance.get("/").then((res) => {
        return res;
      });
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <Carousel data={data.length ? data[0].results : []} />
    </div>
  );
}

export default Home;
