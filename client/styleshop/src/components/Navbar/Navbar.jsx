import React from "react";
import"./Navbar.scss"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* left side of nav */}
        <div className="left">
          <div className="item">
            <img src="/img/flag.png" alt="" />
            <ArrowDownwardIcon />
          </div>
          <div className="item">
            <span> USD</span>
            <ArrowDownwardIcon />
          </div>
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        {/* center of navbar */}
        <div className="center">
          <Link to="/">STYLESHOP</Link>
        </div>
        {/* right side of navbar */}
        <div className="right">
          <div className="center">
            <Link to="/">HomePage</Link>
          </div>
          <div className="center">
            <Link to="/">About</Link>
          </div>
          <div className="center">
            <Link to="/">Contact</Link>
          </div>
          <div className="center">
            <Link to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            {/* SHOWS ICON ON THE CART */}
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
