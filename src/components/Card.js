import React from "react";

import { Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/context";
const Card = (movie) => {
  const { setOnSinglePage } = useStateContext();
  const Navigate = useNavigate();
  // console.log(movie.info);
  let img_path = "https://image.tmdb.org/t/p/w500";
  const singlePage = (info) => {
    setOnSinglePage(movie.info);
    Navigate("/singlepage");
  };
  return (
    <>
      <div className="videos">
        <div className="movie" onClick={singlePage}>
          <img src={img_path + movie.info.poster_path} className="poster"></img>
          <div className="movie-details">
            <div className="box">
              <h4 className="title">{movie.info.title}</h4>
              {/* <p className="rating">{movie.info.vote_average}</p> */}
            </div>
            <div className="overview">
              <h1>overview</h1>
              {movie.info.overview}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
