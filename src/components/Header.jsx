import "../css/Header.css";
import logo from "../assets/logo.png";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  function handleSearchInput(e) {
    if (inputSearch.trim().length > 0 && e.key === "Enter")
      navigate(`/search/${inputSearch}`);
  }

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/" className="header__left__link">
          <img src={logo} className="header__logo" alt="logo" />
          <h1>YouTube</h1>
        </Link>
      </div>
      <div className="header__center">
        <input
          type="search"
          placeholder="Search"
          spellCheck={false}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          onKeyDown={handleSearchInput}
        />
        <Link
          to={inputSearch.trim() !== "" && `/search/${inputSearch}`}
          className="search__link"
        >
          <SearchIcon />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallOutlinedIcon />
        <NotificationsIcon />
        <Avatar
          className="header__avatar"
          src="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/ssk.png"
        />
      </div>
    </div>
  );
};

export default Header;
