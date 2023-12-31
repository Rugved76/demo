import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import '../App.css'

export const Navbar = (props) => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [li, setLi] = useState(false)
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
        <Link className="nav-item" to='/'>
            <h3 className="logo">Posts</h3>
        </Link>
        <div className="asl">
            {cookies.access_token && (
                <Link className='nav-item' to="/create-recipe">Add</Link>
            )}
            {cookies.access_token && (
                <Link className='nav-item' to="/saved-recipes">Saved </Link>
            )}
            {!cookies.access_token ? (
                <Link className='nav-item' to="/auth">Login</Link>
            ) : (
                <button className="submit" onClick={logout}> Logout </button>
            )}
        </div>
    </div>
  );
};
