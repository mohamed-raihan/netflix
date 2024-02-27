import React, { useEffect, useState } from "react";
import "./Row.css";
import instance from "../instance";

function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  console.log(title, fetchUrl);
  console.log(isPoster);

  const fetchData = async () => {
    const response = await instance.get(fetchUrl);
    // console.log(response.data.results);
    setMovies(response.data.results);
  };
  console.log(movies);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <h1 style={{ fontSize: "25px", margin: "7px" }}>{title}</h1>
      <div style={{ marginTop: "20px" }} className="movie-row">
        {movies?.map((item) => (
          <img
            className={`movie ${isPoster && "movie-poster"}`}
            src={`${baseUrl}${
              isPoster ? item.poster_path : item.backdrop_path
            }`}
            alt="poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

/*"https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg" */
