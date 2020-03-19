import React from "react";
import "./header.css";

function Header() {
  return (
    <section className="side">
      <input type="checkbox" id="check"/>
      <label for="check">
        <i className="fas fa-bars" id="open"></i>
        <i className="fas fa-times" id="close"></i>
      </label>
      <div className="sidebar">

        <header>App</header>
        <ul>
          <li><a href="#home"><i className="fas fa-qrcode"></i>Home</a></li>
          <li><a href="#about"><i className="fas fa-address-book"></i>Team</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
