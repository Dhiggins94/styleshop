import React, { useState } from "react";
import "./Navbar.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Navbar = () => {
  // for opening and closing the cart
  const [open,setOpen] = useState(false)
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
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        {/* center of navbar */}
        <div className="center">
          <Link className="link" to="/">
            STYLESHOP
          </Link>
        </div>
        {/* right side of navbar */}
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              HomePage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            {/* SHOWS ICON ON THE CART */}
            {/* when clicked will check if the cart open and if its not, it will not open it, if it does will show cart component down below */}
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {/* opens and shows the cart component */}
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
