import React from "react";
import "./header.css";
import Logo from "../../assets/logo_toolbox.jpeg";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-col-left">        
        <img className="main-logo" src={Logo} />
      </div>      
    </header>
  );
};

export default Header;
