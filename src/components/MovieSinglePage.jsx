import React from "react";
import "../pages/style/MovieSinglePage.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/gray-movie-written-icon-png-UpaYYD.png";
import clip from "../assets/mp.jpg";
import { Link } from "react-router-dom";
import { BsStarHalf } from "react-icons/bs";
import { useStateContext } from "../context/context";
const MovieSinglePage = () => {
  const { onSinglePage } = useStateContext();
  const navigate = useNavigate();
  let img_path = "https://image.tmdb.org/t/p/w500";
  console.log(onSinglePage);

  const handelHome = () => {
    navigate("/");
  };
  return (
    <div className="pageDetail">
      <div className="container-movie">
        <div className="head-nav">
          <div className="nav">
            <div className="review">
              <Link to="/">
                <img src={logo} alt="" className="logo" width="110px"></img>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="image-clip">
            {/* <img
              src={img_path + onSinglePage.poster_path}
              className="posterss"
            ></img> */}
            <img
              src={img_path + onSinglePage.poster_path}
              alt="image"
              width="600px"
              className="image"
            ></img>
          </div>
        </div>
        <div className="movie-detail">
          <div className="box-1">
            <h2 className="title"> {onSinglePage.title}</h2>
            <div className="rating-content">
              <BsStarHalf className="star" />
              <BsStarHalf className="star" />
              <span className="rating-1">{onSinglePage.vote_average}</span>
            </div>

            <div>
              {" "}
              <h4 className="lang">
                language <span>{onSinglePage.original_language}</span>
              </h4>
            </div>
            <div className="years">
              <span>{onSinglePage.release_date}</span>
            </div>
          </div>
          <div className="overview">
            <p>{onSinglePage.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSinglePage;
