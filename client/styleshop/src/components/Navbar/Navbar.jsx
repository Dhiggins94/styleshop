import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left"></div>
        <div className="item">
          <img src="/img/flag.png" alt="" />
          <ArrowDownwardIcon />
        </div>

        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Navbar;
