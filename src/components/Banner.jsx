import React, { useEffect, useState } from "react";
import "./Banner.css";
import instance from "../instance";
import { Button } from "bootstrap";

function Banner({ fetchUrl }) {
  console.log(fetchUrl);
  const [movie, setMovie] = useState({});
  const base_url = "https://image.tmdb.org/t/p/original";

  const fetchData = async () => {
    const response = await instance.get(fetchUrl);
    console.log(response);
    setMovie(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
  };

  console.log(movie);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="p-4"
        style={{
          height: "600px",
          width: "100%",
          backgroundImage: `url(${base_url}${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ width: "45rem" }}>
          <h1 style={{ marginTop: "250px", color: "white" }}>{movie.name}</h1>
          <h3 style={{ color: "white" }}>{movie.overview?.slice(0, 200)}...</h3>
          <button className="btn btn-danger">Play</button>
          <button className="btn btn-outline-light ms-2">More Info</button>
        </div>
      </div>
    </>
  );
}

export default Banner;
