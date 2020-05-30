import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/project">
        <button>Project Info</button>
      </Link>
    </div>
  );
}

export default Header;
