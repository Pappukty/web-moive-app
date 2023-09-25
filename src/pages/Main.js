import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./style/style.css";
import logo from "../assets/gray-movie-written-icon-png-UpaYYD.png";
import ReactPlayer from "react-player";
import Show from "../components/Show";
import { FaShareSquare } from "react-icons/fa";
//api key
let API_key = "&api_key=b5aac6810a00ff5be9d3c2a9379285ba";
let base_url = "https://api.themoviedb.org/3";
//api url
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
//nav bar list data store
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];
const Main = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();
  //menu navbar create
  const [isMobile, setIsMobile] = useState(false);
  // screen size control
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  //menu function

  //resize function and change the menu nav
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    //length  desktop to lap size remove the menu
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      });
  }, [url_set]);
  //movie type url menu list change
  const getData = (movieType) => {
    if (movieType == "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType == "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_key;
    }
    if (movieType == "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType == "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_key;
    }
    if (movieType == "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    setUrl(url);
  };
  const searchMovie = (evt) => {
    if (evt.key == "Enter") {
      url =
        base_url +
        "/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=" +
        search;
      setUrl(url);
      setSearch(" ");
    }
  };

  return (
    <div div className="home-container">
      <div className="home">
        <nav className="navbar">
          <img src={logo} alt="" className="logo" width="110px"></img>
          <ul
            className={isMobile ? "nav-links-mob" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            {/* {map method all list create}  */}
            {arr.map((value) => {
              return (
                <li>
                  <a
                    className="href"
                    href="#"
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>

          <from>
            <div className="search-btn">
              <input
                type="text"
                placeholder="Enter Movie Name"
                className="inputText"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
                onKeyPress={searchMovie}
    ></input>

              {/* <button>
                <BiSearch />
              </button> */}
            </div>
          </from>
          <div className="menubar">
            <button className="menu" onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? <h4>X</h4> : <ImMenu />}
            </button>
          </div>
        </nav>
        <Show />
        <div className="trans">
          <div className="video">
            <ReactPlayer
              url="https://youtu.be/mLBNI-k7v3U"
              playing
              playbackRate={1.5}
              muted
              loop
              controls={false}
              width={"100%"}
              height={"100%"}
              className="player"
            />
          </div>
        </div>
        <div className="share-icon">
          <Link to="https://youtu.be/mLBNI-k7v3U">
            <FaShareSquare className="share" />
          </Link>
        </div>

        <div className="container">
          {movieData.length == 0 ? (
            <p className="notfound">Not Found</p>
          ) : (
            movieData.map((res, pos) => {
              return <Card info={res} key={pos} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
