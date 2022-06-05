import React, { useState } from "react";
import {Link, useLocation } from "react-router-dom";

function Header() {
    const [isActive, setActive] = useState(false);
    const location = useLocation();


  const toggleClass = () => {
    setActive(!isActive);
  };

    if (window.innerWidth > 1000) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <img
                        className="navbar-brand"
                        src="storage/LogoRGB.png"
                        alt="JTCteam"
                    />
                    <div className="collapse navbar-collapse" id="collapse">
                        <ul id="collapse-ul">
                            <li className={location.pathname.split('/')[1]  == '' ? 'active' : ''}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={location.pathname.split('/')[1]  == 'about' ? 'active' : ''}>
                                <Link to="/about">About</Link>
                            </li>
                            <li className={location.pathname.split('/')[1] == 'service' ? 'active' : ''}>
                                <Link to="/service">Service</Link>
                            </li>
                            <li className={location.pathname.split('/')[1]  == 'contact' ? 'active' : ''}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="icons">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <Link to="market"><i className="fa-solid fa-bag-shopping"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <img
                        className="navbar-brand"
                        src="storage/LogoRGB.png"
                        alt="JTCteam"
                    />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleClass}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isActive ? 'show': ''}`} id="collapse">
                        <ul>
                            <li className={location.pathname == '/' ? 'active' : ''}>
                                <Link onClick={toggleClass} to="/">Home</Link>
                            </li>
                            <li className={location.pathname == '/about' ? 'active' : ''}>
                                <Link onClick={toggleClass} to="/about">About</Link>
                            </li>
                            <li className={location.pathname == '/service' ? 'active' : ''}>
                                <Link onClick={toggleClass} to="/service">Service</Link>
                            </li>
                            <li className={location.pathname == '/contact' ? 'active' : ''}>
                                <Link onClick={toggleClass} to="/contact">Contact</Link>
                            </li>
                            <li className={location.pathname == '/market' ? 'active' : ''}>
                                <Link onClick={toggleClass} to="/market">Market</Link>
                            </li>
                            <li>
                            <div className="input-group rounded">
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                            />
                            <span
                                className="input-group-text border-0"
                                id="search-addon"
                            >
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
