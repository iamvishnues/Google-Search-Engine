import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      {/* <h1>This is a Home Page</h1> */}

      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          {/* <Link to="/store">Store</Link> */}
          <a href="https://store.google.com/">Store</a>
        </div>
        <div className="home__headerRight">
          {/* <Link to="/gmail">Gmail</Link> */}
          <a href="http://gmail.com/">Gmail</a>
          <Link to="/images">Images</Link>
          <AppsIcon></AppsIcon>
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer"></div>
        <Search />
      </div>
      <Footer className="footer__class" />
    </div>
  );
}

export default Home;
